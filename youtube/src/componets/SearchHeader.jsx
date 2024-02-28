/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams(); // react-router 경로랑 이름이 동일해야 함
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword ? keyword : "");
  }, [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b boder-zinc-600 mb-4">
      <div>
        <Link to={"/videos"} className="flex items-center">
          <BsYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">YouTube</h1>
        </Link>
      </div>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black tex-gra-50"
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="bg-zinc-600 p-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
