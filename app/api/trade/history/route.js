import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  // Datos ficticios. En producción, traé el historial real de Alpaca.
  return Response.json([
    { date: "2024-06-17", action: "BUY", symbol: "BTC/USD", qty: 0.01, price: 67000, result: "+$45" },
    { date: "2024-06-16", action: "SELL", symbol: "BTC/USD", qty: 0.01, price: 66900, result: "-$10" },
  ]);
}
