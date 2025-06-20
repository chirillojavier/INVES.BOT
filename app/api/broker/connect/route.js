import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { apiKey, apiSecret } = await req.json();
  // Acá podrías validar la key con Alpaca (opcional)
  // Para demo, devolvemos OK:
  return Response.json({ ok: true });
}
