import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

function EventDetailComp(props) {
  const { id, title, description, location, date, image, isFeatured } =
    props.event;

  return (
    <main className="md:w-3/4">
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" grid md:grid-cols-2 shadow-md rounded-md overflow-hidden my-3">
        <div>
          <img
            src={`/${image}`}
            alt="event image"
            className="h-96 w-full object-cover"
          />
        </div>
        <div className="p-3">
          <div className="p-3 border border-gray-100 rounded-md">
            <h2 className="text-green-500 uppercase font-semibold tracking-widest">
              {title}
            </h2>
            <p className="my-4 text-sm text-green-500">{description}</p>
            <p className="text-sm text-green-500">
              Location:{" "}
              <span className=" underline pb-1 text-green-300">{location}</span>
            </p>
            <hr className="my-3" />
            <span className="text-sm text-green-100 bg-green-400 w-auto px-3 py-2 flex justify-center align-middle">
              {date}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EventDetailComp;
