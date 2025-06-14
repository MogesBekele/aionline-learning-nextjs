import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

interface UserRequestBody {
  email: string;
  name: string;
}

export async function POST(req: Request) {
  try {
    const { email, name }: UserRequestBody = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: "Missing email or name" }, { status: 400 });
    }

    const users = await db.select().from(usersTable).where(eq(usersTable.email, email));

    if (!users || users.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          name,
          email,
        })
        .returning();

      return NextResponse.json(result);
    }

    return NextResponse.json(users[0]);
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}