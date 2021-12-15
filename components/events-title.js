import React from "react";

function EventsTitle(props) {
  const { date } = props;
  console.log(date);

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="flex justify-center">
      <span className="text-gay-300 text-sm bg-gray-50 py-2 px-3 shadow-sm">
        Events in {humanReadableDate}
      </span>
    </div>
  );
}

export default EventsTitle;
