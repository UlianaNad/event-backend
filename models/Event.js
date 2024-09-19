import { Schema, model } from "mongoose";

const EventSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      event_date: {
        type: String,
        required: true,
      },
      organaizer: {
        type: String,
        required: true,
      },
    },
  );
  

const Event = model("events", EventSchema);

export default Event;