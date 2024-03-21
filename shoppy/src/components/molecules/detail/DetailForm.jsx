/** @format */

import Button from "components/atom/Button";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function DetailForm() {
  const { options } = useLocation()?.state.product;
  const [selected, setSelected] = useState(options && options[0]);
  const handelSelected = (e) => setSelected(e.target.value);
  const handeSubmit = (e) => {};
  return (
    <form className="flex flex-col">
      <div className="flex items-center">
        <label className="text-red-400 font-bold" htmlFor="select">
          옵션
        </label>
        <select
          id="select"
          className="p-1 m-4 flex-1 border-2 border-dashed border-red-400"
          onChange={handelSelected}
          value={selected}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <Button
        styleName="w-full py-2 mx-0 my-2 bg-red-400 text-white rounded-lg hover:brightness-110"
        onClick={handeSubmit}
      >
        장바구니 추가
      </Button>
    </form>
  );
}
