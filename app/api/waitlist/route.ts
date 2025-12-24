import { NextResponse } from "next/server"
import { addToWaitlist } from "@/lib/actions"

export async function POST(request: Request) {
  const body = await request.json()
  const formData = new FormData()
  formData.append("full_name", body.full_name)
  formData.append("email", body.email)
  formData.append("phone_number", body.phone_number || "")

  const result = await addToWaitlist(null, formData)

  if (result.success) {
    return NextResponse.json({ success: true }, { status: 201 })
  } else if (result.error === "DUPLICATE_EMAIL") {
    return NextResponse.json({ error: "DUPLICATE_EMAIL" }, { status: 409 })
  } else if (result.error) {
    return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 })
  } else if (result.errors) {
    return NextResponse.json({ errors: result.errors }, { status: 400 })
  }

  return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 })
}
