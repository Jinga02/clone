/** @format */

import React from "react";
import Videos from "../components/Videos";
import { useYoutubeApi } from "../context/YoutubeContextApi";

export default function MainPage() {
  const hi = useYoutubeApi();
  console.log(hi);
  return (
    <div>
      <Videos />
    </div>
  );
}
