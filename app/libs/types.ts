import { z } from "zod"
import { createInsertSchema } from "drizzle-zod"
import { contactsTable } from "@/app/db/schema"

export const contactSchema = createInsertSchema(contactsTable, {
    name: z.string().nonempty("Name is required").min(1, { message: "Name must be at least 1 character long" }),
    email: z.string().nonempty("Email is required").email({ message: "Invalid email address" }),
    phone: z.string().optional().transform(val => val && val.trim() !== "" ? parseInt(val) : null),
    serviceType: z.string().nonempty("Service type is required"),
})