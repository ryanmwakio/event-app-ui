import React from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../data/dummy-data";
import EventDetailComp from "./../../components/event-detail/event-detail";

function EventDetail() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  return (
    <div className="mx-5 md:mx-20 my-10 w-full flex justify-center align-middle">
      {!event && <h1 className="text-red-500">No event found!</h1>}
      {event && <EventDetailComp event={event} />}
    </div>
  );
}

export default EventDetail;
