import mongoose, { Schema } from "mongoose";

const logSchema = new Schema({
  module: String,
  description: String,
}, {
  timestamps: true
})

const Log = mongoose.models.Log || mongoose.model("Log", logSchema);

export default Log;