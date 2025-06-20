import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
  // Lista de estrategias predefinidas
  const strategies = [
    { id: "ema-crossover", name: "EMA Crossover" },
    { id: "rsi-extreme", name: "Extreme RSI" },
    { id: "marea-dorada", name: "Marea Dorada" },
    { id: "custom-pine", name: "Custom Pine Script" }
  ];
  return Response.json(strategies);
}
