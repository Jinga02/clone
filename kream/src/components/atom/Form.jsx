/** @format */

import React from "react";

export default function Form({ styleName, submit, children }) {
  return (
    <form className={styleName} onSubmit={submit}>
      {children}
    </form>
  );
}
