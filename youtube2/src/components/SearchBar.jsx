/** @format */

import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { useYoutubeApi } from "../context/YoutubeContextApi";

export default function SearchBar() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const { handleTheme } = useYoutubeApi();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return alert("검색어를 입력해주세요!");
    }
    navigate(`search/${text}`);
  };

  useEffect(() => {
    setText(keyword ? keyword : "");
  }, [keyword]);

  return (
    <header className=" bg-bgLight dark:bg-bgDark w-full top-0 h-20 ml-12 flex p-4 text-2xl border-b boder-zinc-600 fixed z-10 ">
      <Link to={"/"} className="flex items-center">
        <FaYoutube className="text-4xl text-red-500" />
        <h1 className="font-bold ml-3 text-3xl">youtube</h1>
      </Link>
      <form className="w-full flex ml-20" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-7/12 bg-gray-100 p-2 px-5"
          placeholder="search..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button className="bg-gray-300 p-3 text-gray-600">
          <FaSearch />
        </button>
      </form>
      <button className="absolute top-8 right-20" onClick={handleTheme}>
        {localStorage.getItem("theme") === "dark" ? (
          <FaRegSun />
        ) : (
          <FaRegMoon />
        )}
      </button>
    </header>
  );
}
