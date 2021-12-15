import React from "react";
import { useRef } from "react";
import Button from "./../../components/ui/Button";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <div className="flex justify-center align-middle">
      <div className="search-area">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="cursor-pointer inline-block border border-gray-200 py-2 px-3 rounded-sm text-gray-700 text-sm capitalize mx-1 my-2 md:my-0">
              <label htmlFor="year" className="text-gray-600 font-semibold">
                Year
              </label>
              <select
                name=""
                id="year"
                className=" cursor-pointer"
                ref={yearInputRef}
              >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="inline-block border border-gray-200 py-2 px-3 rounded-sm text-gray-700 capitalize text-sm mx-1 my-2 md:my-0">
              <label htmlFor="month" className=" text-gray-600 font-semibold">
                Month
              </label>
              <select
                name=""
                id="month"
                className=" cursor-pointer"
                ref={monthInputRef}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <Button icon={icon} inline={true} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventsSearch;
