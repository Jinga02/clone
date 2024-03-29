/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../componets/ChannelInfo";
import RelatedVideos from "../componets/RelatedVideos";

export default function DetailVideo() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="15%"
          src={`http://www.youtube.com/embed/${video.id}`}
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <aside className="basis-2/6 ">
        <RelatedVideos id={video.id} />
      </aside>
    </section>
  );
}
