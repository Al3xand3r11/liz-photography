'use server'

import { revalidatePath } from "next/cache"
import { db } from "@/app/db"
import { contactSchema } from "@/app/libs/types"
import { contactsTable } from "../db/schema"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitContactForm(prevState: any, formData: FormData) {
    // Bot protection: Check honeypot field
    const honeypot = formData.get("honeypot")
    if (honeypot && honeypot !== "") {
        // This is likely a bot submission, reject silently
        return { error: { honeypot: ["Invalid submission"] } }
    }

    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        serviceType: formData.get("serviceType"),
    })

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors }
    }

    const { name, email, phone, serviceType } = validatedFields.data

    try {
        await db.insert(contactsTable).values({ name, email, phone, serviceType })
        revalidatePath("/")
        return { success: true }
    } catch (error) {
        console.error("Database error:", error)
        return { error: { general: ["Failed to send message. Please try again."] } }
    }
}