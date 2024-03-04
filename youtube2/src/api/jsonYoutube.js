/** @format */

import axios from "axios";

export default class jsonYoutube {
  async search(keyword) {
    return keyword ? this._searchVideos() : this._popularVidoes();
  }

  async related(id) {
    return axios.get("/videos/related.json").then((res) => {
      return res.data.items;
    });
  }

  async _searchVideos() {
    return axios.get("/videos/search.json").then((res) => {
      return res.data.items;
    });
  }
  async _popularVidoes() {
    return axios.get("/videos/popular.json").then((res) => {
      return res.data.items;
    });
  }
}
