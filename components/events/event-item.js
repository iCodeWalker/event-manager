import React from "react";
import Link from "next/link";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const readableAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />

      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>DATE : {readableDate}</time>
          </div>
          <div>
            <address>{readableAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
