"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("senderMessage");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalid sender message",
    };
  }
 
  let data;
  try {
    await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "daigurenhyourinmaru20@gmail.com",
      subject: "Message From Portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
