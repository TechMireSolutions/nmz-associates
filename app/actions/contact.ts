"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fields?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = (formData.get("name")    as string | null)?.trim() ?? "";
  const email   = (formData.get("email")   as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
      fields: { name, email, company, subject, message },
    };
  }

  if (!EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
      fields: { name, email, company, subject, message },
    };
  }

  if (message.length < 10) {
    return {
      status: "error",
      message: "Please write a message of at least 10 characters.",
      fields: { name, email, company, subject, message },
    };
  }

  return {
    status: "success",
    message: "Thank you! We'll be in touch within one business day.",
  };
}
