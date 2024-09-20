import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const participantsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
  heard_from: {
    type: String,
    enum: ['Friend', 'Social Media', 'Found myself'],
    required: true
  },
  reg_event:{
    type: Schema.Types.ObjectId,
    ref:"events",
    required: true
  }
});

participantsSchema.post("save", handleSaveError);

participantsSchema.pre("findOneAndUpdate", setUpdateSettings);

participantsSchema.post("findOneAndUpdate", handleSaveError);

const Participant = model("participants", participantsSchema);

export default Participant;