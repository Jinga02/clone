/** @format */

import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${text}`);
  };

  useEffect(() => {
    setText(keyword ? keyword : "");
  }, [keyword]);

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
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
