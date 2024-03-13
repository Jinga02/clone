/** @format */

import axios from "axios";

export default class JsonStyles {
  async getStylesData() {
    return axios
      .get("asset/style/styles.json")
      .then((res) => res.data.styles)
      .catch((err) => {
        console.log(`ERROR 발생 : ${err}`);
        throw err; // 에러를 상위로 다시 던집니다.
      });
  }
}
