import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type CustomerType = "residential" | "commercial";
type SystemType = "on_grid" | "off_grid";

type LeadRequest = {
  name: string;
  phone: string;
  pinCode: string;
  monthlyBill: number | null;
  monthlyUnits: number | null;
  customerType: CustomerType;
  systemType: SystemType;
};

export async function POST(request: Request) {
  try {
     const contentLength = request.headers.get("content-length");

    if (contentLength && Number(contentLength) > 100_000) {
      return NextResponse.json(
        { error: "Request body is too large." },
        { status: 413 }
      );
    }
    const body = (await request.json()) as Partial<LeadRequest>;

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const pinCode =
      typeof body.pinCode === "string"
        ? body.pinCode.trim()
        : "";

    const customerType = body.customerType;
    const systemType = body.systemType;

    const monthlyBill =
      typeof body.monthlyBill === "number"
        ? body.monthlyBill
        : null;

    const monthlyUnits =
      typeof body.monthlyUnits === "number"
        ? body.monthlyUnits
        : null;

    /*
     * ---------------------------------------------------------
     * SERVER-SIDE VALIDATION
     * ---------------------------------------------------------
     */

    if (!name || name.length > 200) {
      return NextResponse.json(
        { error: "Invalid name." },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid mobile number." },
        { status: 400 }
      );
    }

    if (!/^[1-9]\d{5}$/.test(pinCode)) {
      return NextResponse.json(
        { error: "Invalid PIN code." },
        { status: 400 }
      );
    }

    if (
      customerType !== "residential" &&
      customerType !== "commercial"
    ) {
      return NextResponse.json(
        { error: "Invalid customer type." },
        { status: 400 }
      );
    }

    if (
      systemType !== "on_grid" &&
      systemType !== "off_grid"
    ) {
      return NextResponse.json(
        { error: "Invalid system type." },
        { status: 400 }
      );
    }

    const validBill =
      monthlyBill !== null &&
      Number.isFinite(monthlyBill) &&
      monthlyBill > 0;

    const validUnits =
      monthlyUnits !== null &&
      Number.isFinite(monthlyUnits) &&
      monthlyUnits > 0;

    if (!validBill && !validUnits) {
      return NextResponse.json(
        { error: "Invalid electricity usage." },
        { status: 400 }
      );
    }

    /*
     * ---------------------------------------------------------
     * EXISTING CALCULATION LOGIC
     * PRESERVED
     * ---------------------------------------------------------
     */

    const bill = monthlyBill ?? 0;
    const units = monthlyUnits ?? 0;

    let calculatedUnits = units;

    if (!validUnits && bill > 0) {
      calculatedUnits = Math.ceil(bill / 12);
    }

    calculatedUnits = Math.ceil(calculatedUnits);

    const requiredSystem = calculatedUnits / 120;

    const recommendedSystem = Math.ceil(requiredSystem);

    const estimatedGeneration =
      recommendedSystem * 120 * 12;

    const estimatedSavings =
      estimatedGeneration * 12;

    let systemCost = 0;
    let subsidy = 0;

    /*
     * RESIDENTIAL + ON GRID
     */

    if (
      customerType === "residential" &&
      systemType === "on_grid"
    ) {
      if (recommendedSystem === 1) {
        systemCost = 70000;
        subsidy = 30000;
      } else if (recommendedSystem === 2) {
        systemCost = 150000;
        subsidy = 65000;
      } else if (recommendedSystem === 3) {
        systemCost = 210000;
        subsidy = 78000;
      } else if (recommendedSystem === 4) {
        systemCost = 270000;
        subsidy = 78000;
      } else if (recommendedSystem === 5) {
        systemCost = 325000;
        subsidy = 78000;
      } else {
        systemCost =
          325000 +
          (recommendedSystem - 5) * 65000;

        subsidy = 78000;
      }
    } else {
      /*
       * COMMERCIAL OR OFF GRID
       */

      systemCost = recommendedSystem * 80000;
      subsidy = 0;
    }

    const estimatedCost = systemCost - subsidy;

    const estimatedPayback =
      estimatedSavings > 0
        ? estimatedCost / estimatedSavings
        : 0;

    /*
     * ---------------------------------------------------------
     * DATABASE INSERT
     * ---------------------------------------------------------
     *
     * IMPORTANT:
     * status and all calculated values come from the server.
     */

    const supabase = createSupabaseAdminClient();

    const { error: insertError } = await supabase
      .from("leads")
      .insert({
        name,
        phone,
        customer_type: customerType,

        monthly_bill: validBill
          ? Math.ceil(bill)
          : null,

        monthly_units: calculatedUnits,

        pin_code: pinCode,

        system_type: systemType,

        recommended_system: recommendedSystem,
        estimated_generation: estimatedGeneration,
        estimated_savings: estimatedSavings,

        subsidy,
        estimated_cost: estimatedCost,
        estimated_payback: estimatedPayback,

        status: "new",
      });

    if (insertError) {
      console.error("LEAD INSERT ERROR:", insertError);

      return NextResponse.json(
        { error: "Unable to save quotation." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      quotation: {
        monthlyUnits: calculatedUnits,
        recommendedSystem,
        estimatedGeneration,
        estimatedSavings,
        subsidy,
        estimatedCost,
        estimatedPayback,
        systemType,
        customerType,
      },
    });
  } catch (error) {
    console.error("LEAD API ERROR:", error);

    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}