/** @format */

import React from "react";
import { RiArchiveFill } from "react-icons/ri";
import { RiArchiveLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { useParams } from "react-router-dom";

export default function SideBar() {
  const param = useParams();
  return (
    <div
      className={
        param.videoId ? "hidden" : "bg-gray-100 w-12 h-full fixed top-0 left-0 "
      }
    >
      <button className="absolute top-24 left-3 text-2xl">
        <RiArchiveLine />
        {/* <RiArchiveFill /> */}
      </button>
      <button className="absolute top-36 left-3 text-2xl">
        <FaRegHeart />
        {/* <FaHeart /> */}
      </button>
    </div>
  );
}
