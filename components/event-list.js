import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;

  const [pageNumber, setPageNumber] = useState(0);
  const eventsPerPage = 3;
  const pagesVisited = pageNumber * eventsPerPage;
  const pageCount = Math.ceil(items.length / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayEvents = items
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      return (
        <>
          <EventItem
            key={items.id}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
          />
        </>
      );
    });

  return (
    <div>
      <ul>{displayEvents}</ul>
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          containerClassName="w-3/4 my-3 flex justify-center text-green-500 text-sm pagination bg-white py-3 px-4 rounded-md shadow-sm"
          previousLinkClassName="mx-1"
          nextLinkClassName="mx-1"
          disabledClassName="mx-1"
          activeLinkClassName=" border-b-2 border-green-500 mx-1"
          breakLabel={"..."}
          breakClassName={"mx-1"}
          subContainerClassName={"mx-1"}
          pageCount={pageCount}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}

export default EventList;
