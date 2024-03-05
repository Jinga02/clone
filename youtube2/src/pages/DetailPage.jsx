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
  console.log(prop);
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
        <div className="p-5">
          <h2 className=" font-bold">{title}</h2>
          <ChannelInfo prop={prop.snippet} />
          <details>
            <summary className="channel cursor-pointer ">
              more video information...
            </summary>
            <pre className=" whitespace-pre-wrap">{description}</pre>
          </details>
        </div>
      </article>
      <aside className="basis-2/6">
        <RelatedVideo id={id} />
      </aside>
    </section>
  );
}
