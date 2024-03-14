/** @format */

import React from "react";

export default function Link({ url, name, styleName, imageUrl }) {
  return (
    <a className={imageUrl ? "" : styleName} href={url}>
      {imageUrl ? (
        <img className={styleName} src={imageUrl} alt={name} />
      ) : (
        name
      )}
    </a>
  );
}
