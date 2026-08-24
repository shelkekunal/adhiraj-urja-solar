import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      message,
      monthlyBill,
      propertyType,
      pinCode,
      systemSize,
    } = body;

    // -------------------------
    // Validation
    // -------------------------

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and phone number are required.",
        },
        { status: 400 }
      );
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid 10-digit phone number.",
        },
        { status: 400 }
      );
    }

    if (
      propertyType !== "residential" &&
      propertyType !== "commercial"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid property type.",
        },
        { status: 400 }
      );
    }

    // -------------------------
    // Supabase
    // -------------------------

    const supabase =
        await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        phone,
        email: email || null,
        message: message || null,
        monthly_bill: monthlyBill ?? null,
        property_type: propertyType,
        pin_code: pinCode || null,
        system_size: systemSize ?? null,
        status: "new",
      })
      .select()
      .single();

    // -------------------------
    // Database error
    // -------------------------

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save your request.",
        },
        { status: 500 }
      );
    }

    // -------------------------
    // Success
    // -------------------------

    console.log("NEW SOLAR LEAD:", data);

    return NextResponse.json({
      success: true,
      message: "Quote request received successfully.",
    });
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}