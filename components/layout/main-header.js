import React from "react";
import Link from "next/link";
import { moment } from "moment";

function MainHeader() {
  return (
    <header className="md:w-3/4 flex align-middle mt-10 justify-center">
      <div className="text-green-500 text-2xl uppercase mr-10 tracking-widest border-l-4 pl-3 border-green-500 max-h-10">
        <Link href="/">
          <span>
            Events
            <img
              src="/images/loading.gif"
              alt=""
              className="w-6 h-6 inline-block mb-1"
            />
          </span>
        </Link>
      </div>
      <nav>
        <ul>
          <li className="inline-block my-2 md:my-0">
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
          </li>
          <li className="inline-block my-3 md:my-0">
            <Link href="/events">
              <span className="nav-link">All Events</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
