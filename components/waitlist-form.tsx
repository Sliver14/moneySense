"use client"

import { useEffect } from "react"
import { useActionState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "./ui/spinner"
import { addToWaitlist } from "@/lib/actions"

const initialState = {
  errors: {},
  error: null,
  success: false,
}

export function WaitlistForm() {
  const router = useRouter()

  const [state, formAction, pending] = useActionState(
    addToWaitlist,
    initialState
  )

  useEffect(() => {
    if (state.success) {
      router.push("/waitlist/success")
    }
  }, [state.success, router])

  return (
    <form
      id="waitlist"
      action={formAction}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <Input
        name="full_name"
        placeholder="Full Name"
        className="h-12 rounded-xl border-gray-200 bg-white"
      />
      {state.errors?.full_name && (
        <p className="text-red-500 text-sm">
          {state.errors.full_name[0]}
        </p>
      )}

      <Input
        name="email"
        placeholder="Email Address"
        className="h-12 rounded-xl border-gray-200 bg-white"
      />
      {state.errors?.email && (
        <p className="text-red-500 text-sm">
          {state.errors.email[0]}
        </p>
      )}

      <Input
        name="phone_number"
        placeholder="Phone Number (Optional)"
        className="h-12 rounded-xl border-gray-200 bg-white"
      />

      {state.error && (
        <p className="text-red-500 text-sm">
          {state.error === "DUPLICATE_EMAIL"
            ? "This email is already on the MoneySense waitlist."
            : "Something went wrong. Please try again in a moment."}
        </p>
      )}

      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-full px-6 py-6 rounded-full bg-[#D9CBB5] text-[#0A1A2F] hover:bg-[#C99663] hover:text-white"
      >
        {pending ? (
          <>
            <Spinner />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>
    </form>
  )
}
