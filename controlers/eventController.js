import ctrlWrapper from "../decorators/ctrlWraper.js";

import eventServices from "../services/EventServices.js";

const { findEvents} = eventServices;



export async function getEventList(req, res) {
    const eventsLists = await findEvents();
    console.log(eventsLists)
    res.status(200).json(eventsLists);
  };


  export default {
    getEventList:ctrlWrapper(getEventList),
  };