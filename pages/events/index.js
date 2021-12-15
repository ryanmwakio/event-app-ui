import React from "react";
import path from "path";
import fs from "fs/promises";

import { getAllEvents } from "../../data/dummy-data";
import EventList from "./../../components/event-list";
import EventsSearch from "./events-search";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticProps(context) {
  const dataPath = path.join(process.cwd(), "data", "dummy-backend-data.json");
  const data = await fs.readFile(dataPath, { encoding: "utf-8" });
  const parsedData = JSON.parse(data);

  if (parsedData.products.length === 0 || !parsedData.products) {
    return { notFound: true };
  }
  return {
    props: {
      products: parsedData.products,
    },
    revalidate: 20,
    notFound: false,
  };
}

function AllEvents(props) {
  const router = useRouter();

  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <main className="my-5 mx-0 md:mx-20">
      <Head>
        <title>All Products</title>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </main>
  );
}

export default AllEvents;
