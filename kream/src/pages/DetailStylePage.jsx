/** @format */

import DetailStyleContent from "components/organisms/content/DetailStyleContent";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailStylePage() {
  return (
    <div className="w-full flex justify-center items-center">
      <DetailStyleContent />
    </div>
  );
}
