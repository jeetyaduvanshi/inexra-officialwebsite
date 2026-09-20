import { NextResponse } from "next/server";
import { sendVendorEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      companyName,
      contactName,
      jobTitle,
      email,
      phone,
      website,
      geographies,
      sampleTypes,
      panelSize,
      consumerCpi,
      b2bCpi,
      methodology,
      qualityChecks,
      notes,
    } = body;

    // Validate required fields
    if (!companyName || !contactName || !email || !geographies || !sampleTypes) {
      return NextResponse.json(
        { error: "Missing required fields. Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    await sendVendorEmail({
      companyName,
      contactName,
      jobTitle,
      email,
      phone,
      website,
      geographies,
      sampleTypes,
      panelSize,
      consumerCpi,
      b2bCpi,
      methodology,
      qualityChecks,
      notes,
    });

    return NextResponse.json({
      success: true,
      message: "Your vendor application has been submitted successfully.",
    });
  } catch (error: unknown) {
    console.error("Vendor form submission error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: `Failed to process request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
