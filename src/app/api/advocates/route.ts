import db from "../../../db";
import { advocates } from "../../../db/schema";
import { sql } from 'drizzle-orm'

export async function GET() {
  // Uncomment this line to use a database
  const data = await db.select().from(advocates);

  return Response.json({ data });
}

export async function POST(req: Request) {
  const body = await req.json()
  const {searchTerm} = body
  const data = await db
    .select()
    .from(advocates)
    .where(sql`(
      to_tsvector('english', ${advocates.firstName}) ||
      to_tsvector('english', ${advocates.lastName}) ||
      to_tsvector('english', ${advocates.city}) ||
      to_tsvector('english', ${advocates.degree}) ||
      to_tsvector('english', ${advocates.specialties}) ||
      to_tsvector('english', ${String(advocates.yearsOfExperience)})
  ) @@ plainto_tsquery('english', ${searchTerm})`
    );

  return Response.json({data})
}
