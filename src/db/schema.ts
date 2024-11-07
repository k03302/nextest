import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const usersTable = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    pw: text('pw').notNull(),
    favorites: text('favorites', { mode: 'json' })
        .notNull()
        .$type<string[]>()
        .default(sql`(json_array())`),
});
// export const postsTable = sqliteTable('posts', {
//     id: integer('id').primaryKey(),
//     title: text('title').notNull(),
//     content: text('content').notNull(),
//     userId: integer('user_id')
//         .notNull()
//         .references(() => usersTable.id, { onDelete: 'cascade' }),
//     createdAt: text('created_at')
//         .default(sql`(CURRENT_TIMESTAMP)`)
//         .notNull(),
//     updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
// });
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;