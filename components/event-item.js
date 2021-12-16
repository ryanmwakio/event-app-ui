import moment from "moment";
import Image from "next/image";
import React from "react";

import Button from "./ui/Button";

function EventItem(props) {
  const { id, title, image, date, location } = props;

  const humanReadableDate = moment(new Date(date)).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <div className="flex justify-center align-middle">
      <li className="md:flex col-span-2 w-5/5 md:w-3/4 border border-gray-200 my-2 shadow-lg hover:shadow-xl rounded-md overflow-hidden">
        <Image
          src={"/" + image}
          width={350}
          height={160}
          className="w-full md:w-1/2 h-40 md:h-72 object-cover overflow-hidden"
          alt={title}
        />

        <div className="p-2 bg-white px-5">
          <div>
            <h2 className=" font-semibold tracking-widest text-md uppercase text-green-500 border-b border-gray-200 my-2 py-1">
              {title}
            </h2>
            <div className="text-green-500 text-sm border-b border-gray-200 my-2 py-1">
              <time>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mx-2 my-1"
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
                {humanReadableDate}
              </time>
            </div>
            <div className="text-green-500 text-sm border-b border-gray-200 my-2 py-1">
              <address>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mx-2 my-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {formattedAddress}
              </address>
            </div>
          </div>
          <div className="text-green-500 my-4">
            <Button text="Explore Event" to={exploreLink} />
          </div>
        </div>
      </li>
    </div>
  );
}

export default EventItem;
