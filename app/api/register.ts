import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

import { usersTable } from '@/src/db/schema'
import { db } from '@/src/db'
import { eq } from 'drizzle-orm';


const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

interface RegisterRequestBody {
    username: string;
    password: string;
}


export async function POST(req: Request) {
    const { username, password }: RegisterRequestBody = await req.json();
    const user = await db.select().from(usersTable)
        .where(eq(usersTable.name, username)).limit(1);

    if (user.length > 0) {
        // User not found
        return NextResponse.json({ message: 'Invalid username' }, { status: 401 });
    }

    await db.insert(usersTable).values({
        name: username,
        pw: password
    });

    return NextResponse.json({ message: 'Registered successfully' });
}