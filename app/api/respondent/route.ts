import { NextResponse } from "next/server";
import { sendRespondentEmail } from "@/lib/mail";

const MAX_LEN = 500;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_LEN);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot: real users never see/fill this field. Pretend success for bots.
    if (clean(body.company_website)) {
      return NextResponse.json({ success: true });
    }

    const data = {
      fullName: clean(body.fullName),
      email: clean(body.email),
      phone: clean(body.phone),
      gender: clean(body.gender),
      ageGroup: clean(body.ageGroup),
      country: clean(body.country),
      city: clean(body.city),
      education: clean(body.education),
      employmentStatus: clean(body.employmentStatus),
      industry: clean(body.industry),
      jobTitle: clean(body.jobTitle),
      companySize: clean(body.companySize),
      householdIncome: clean(body.householdIncome),
      interests: clean(body.interests),
      surveyModes: clean(body.surveyModes),
      languages: clean(body.languages),
      referral: clean(body.referral),
      marketingConsent: Boolean(body.marketingConsent),
    };

    // Validate required fields
    if (
      !data.fullName ||
      !data.email ||
      !data.gender ||
      !data.ageGroup ||
      !data.country ||
      !data.city ||
      !data.employmentStatus
    ) {
      return NextResponse.json(
        { error: "Missing required fields. Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!body.ageConfirm || !body.privacyConsent) {
      return NextResponse.json(
        { error: "Please confirm you are 18+ and agree to the privacy terms to join the panel." },
        { status: 400 }
      );
    }

    await sendRespondentEmail(data);

    return NextResponse.json({
      success: true,
      message: "Thank you for registering with the Inexra Survey Panel.",
    });
  } catch (error: unknown) {
    console.error("Respondent registration error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: `Failed to process registration: ${errorMessage}` },
      { status: 500 }
    );
  }
}
