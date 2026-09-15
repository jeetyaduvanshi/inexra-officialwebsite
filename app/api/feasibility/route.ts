import { NextResponse } from "next/server";
import { sendFeasibilityEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      country,
      sampleType,
      audience,
      completes,
      loi,
      ir,
      methodology,
      timeline,
      surveyLink,
    } = body;

    // Validate required fields
    if (!name || !company || !email || !country || !sampleType || !audience || !completes) {
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

    await sendFeasibilityEmail({
      name,
      company,
      email,
      country,
      sampleType,
      audience,
      completes,
      loi,
      ir,
      methodology,
      timeline,
      surveyLink,
    });

    return NextResponse.json({
      success: true,
      message: "Your feasibility request has been submitted successfully.",
    });
  } catch (error: unknown) {
    console.error("Feasibility form submission error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: `Failed to process request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
