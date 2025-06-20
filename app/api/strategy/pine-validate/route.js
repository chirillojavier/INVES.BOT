import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { pineScript } = await req.json();
  // Validación muy básica: chequea si comienza con //@version
  if (pineScript && pineScript.trim().startsWith("//@version")) {
    return Response.json({ valid: true });
  }
  return Response.json({ valid: false });
}
