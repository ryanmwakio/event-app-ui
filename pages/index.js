import React from "react";
import Head from "next/head";

import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "./../components/event-list";

export async function getStaticProps(context) {
  return { props: {} };
}

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className="mx-0 md:mx-20 my-5">
      <Head>
        <title>Events | welcome</title>
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
