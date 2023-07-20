"use server"

import connect from "@/lib/mongo_db/connect";
import Log from "@/lib/mongo_db/models/log";

const logger = async (module: string = "Home", description?: string) => {
  await connect();
  Log.create({
    module,
    description: description ?? "Visited your website"
  })
}

export default logger;