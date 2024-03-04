/** @format */
import axios from "axios";

export default class Youtube {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(keyword) {
    return keyword ? this._searchVideos(keyword) : this._popularVideos();
  }
  async _popularVideos() {
    return this.apiClient
      .get("videos", {
        params: {
          chart: "mostPopular",
          maxResults: 25,
          part: "snippet",
        },
      })
      .then((res) => {
        return res.data.items;
      });
  }

  async _searchVideos(keyword) {
    return this.apiClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => {
        return res.data.items;
      });
  }
}
