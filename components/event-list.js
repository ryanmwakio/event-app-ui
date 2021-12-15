import React from "react";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;

  return (
    <div>
      <ul>
        {items.map((event) => {
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
        })}
      </ul>
    </div>
  );
}

export default EventList;
