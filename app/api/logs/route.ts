import connect from "@/lib/mongo_db/connect"
import Log from "@/lib/mongo_db/models/log";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { description, module } = await request.json();
  console.log(description, module)
  await connect();
  await Log.create({ module, description })

  return NextResponse.json({ message: "Log added!" });
}