/** @format */

import { createContext, useContext } from "react";
import React from "react";

const YoutubeApiContext = createContext();

export default function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value="hi">
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
