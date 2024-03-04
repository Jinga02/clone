/** @format */

import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  return (
    <header className="w-full flex p-4 text-2xl border-b boder-zinc-600 mb-4">
      <button
        className="flex"
        onClick={() => {
          navigate("/");
        }}
      >
        <FaYoutube />
        <h1>youtube</h1>
      </button>
      <form className="">
        <input type="text" placeholder="search..." />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
