/** @format */

import React from "react";
import Videos from "../components/Videos";
import { useYoutubeApi } from "../context/YoutubeContextApi";

export default function MainPage() {
  return (
    <div>
      <Videos />
    </div>
  );
}
