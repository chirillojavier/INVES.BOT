import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { active, strategy, broker, crypto } = await req.json();
  // Guardá el estado en memoria/db según user, o trigger del bot.
  // Demo: solo responde OK
  return Response.json({ ok: true, botActive: active });
}
