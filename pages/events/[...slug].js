import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "./../../data/dummy-data";
import EventList from "./../../components/event-list";
import EventsTitle from "./../../components/events-title";
import { toast } from "react-toastify";
import Head from "next/head";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return (
      <p className="text-green-500 capitalize flex justify-center w-3/4 my-5">
        Loading...
      </p>
    );
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1 ||
    numYear < 1
  ) {
    const message = "Invalid query input";
    toast.error(message, { position: toast.POSITION.BOTTOM_RIGHT });
    return (
      <p className="text-red-300 uppercase tracking-wider flex justify-center w-3/4 my-5">
        {message}
      </p>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    const message = "No events found";
    toast.info(message, { position: toast.POSITION.BOTTOM_RIGHT });
    return (
      <div className="flex justify-center rounded-md">
        <p className="text-green-500 uppercase tracking-wider flex justify-center w-3/4 my-5 bg-white p-5 border border-gray-200 rounded-md">
          {message}
        </p>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  console.log(filteredEvents);

  return (
    <main className="my-5">
      <Head>
        <title>
          {filteredEvents.length > 1
            ? `${filteredEvents.length} events`
            : `${filteredEvents.length} event`}
        </title>
      </Head>
      <EventsTitle date={date} />
      <EventList items={filteredEvents} />
    </main>
  );
}

export default FilteredEventsPage;
