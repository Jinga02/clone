/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "./../components/ChannelInfo";

export default function DetailPage() {
  const {
    state: { prop },
  } = useLocation();
  console.log(prop);
  const { title, description } = prop.snippet;
  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="15%"
          // allow="autoplay"
          allowfullscreen="true"
          src={`http://www.youtube.com/embed/${prop.id}`}
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
    </section>
  );
}
