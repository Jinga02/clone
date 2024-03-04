/** @format */

import axios from "axios";

export default class jsonYoutube {
  async search(keyword) {
    return keyword ? this._searchVideos() : this._popularVidoes();
  }
  async _searchVideos() {
    return axios.get("/videos/related.json").then((res) => res.data.items);
  }
  async _popularVidoes() {
    return axios.get("/videos/popular.json").then((res) => res.data.items);
  }
}
