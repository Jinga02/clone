/** @format */

import { createContext, useContext } from "react";
import React from "react";
import Youtube from "../api/Youtube";
import jsonYoutube from "../api/jsonYoutube";

const YoutubeApiContext = createContext();

// const youtube = new Youtube();
const youtube = new jsonYoutube();

export default function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
