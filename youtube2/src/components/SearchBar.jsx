import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <header className="w-full flex p-4 text-2xl border-b boder-zinc-600 mb-4">
      <div className="flex">
        <FaYoutube />
        <h1>youtube</h1>
      </div>
      <form className="">
        <input type="text" placeholder="search..." />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
