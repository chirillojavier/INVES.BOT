import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  // Lista de ejemplo. En producción podrías traer de Alpaca u otro broker.
  return Response.json([
    { symbol: "BTC/USD" },
    { symbol: "ETH/USD" },
    { symbol: "SOL/USD" },
    // Agregá más si querés
  ]);
}
