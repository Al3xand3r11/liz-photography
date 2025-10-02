import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const contactsTable = sqliteTable('contacts', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: integer('phone'),
    serviceType: text('serviceType'),
})