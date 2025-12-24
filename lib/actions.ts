"use server"

import { z } from "zod"
import { supabase } from "./supabase"

const waitlistSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().optional(),
})

export async function addToWaitlist(prevState: any, formData: FormData) {
  const validatedFields = waitlistSchema.safeParse({
    full_name: formData.get("full_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { data, error } = await supabase
    .from("waitlist")
    .insert([
      {
        full_name: validatedFields.data.full_name,
        email: validatedFields.data.email,
        phone_number: validatedFields.data.phone_number,
      },
    ])
    .select()

  if (error) {
    if (error.code === "23505") {
      return {
        error: "DUPLICATE_EMAIL",
      }
    }
    return {
      error: "SERVER_ERROR",
    }
  }

  return {
    success: true,
  }
}
