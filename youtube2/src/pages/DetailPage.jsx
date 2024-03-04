/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "./../components/ChannelInfo";
import RelatedVideo from "../components/RelatedVideo";

export default function DetailPage() {
  const {
    state: { prop },
  } = useLocation();
  const id = prop.id.videoId ? prop.id.videoId : prop.id;

  const { title, description } = prop.snippet;
  return (
    <section className="flex">
      <article className="basis-4/6 p-1">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="500px"
          allowFullScreen={true}
          src={`http://www.youtube.com/embed/${id}`}
        ></iframe>
        <div className="p-4">
          <h2>{title}</h2>
          <ChannelInfo />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <aside className="basis-2/6">
        <RelatedVideo id={id} />
      </aside>
    </section>
  );
}
