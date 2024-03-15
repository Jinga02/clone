/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import JsonStyles from "apis/JsonStyles";
import { setStyles } from "../redux/slice/StyleSlice";
import StyleTemplates from "components/templates/StyleTemplates";

const jsonStyles = new JsonStyles();

export default function StylePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const stylesData = await jsonStyles.getStylesData();
        dispatch(setStyles(stylesData));
      } catch (error) {
        console.error("Error fetching styles:", error);
      }
    };

    fetchStyles();
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <StyleTemplates />
    </div>
  );
}
