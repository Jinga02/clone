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
  async channel(id) {
    return this.apiClient
      .get("channels", { params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async related(id) {
    return this.apiClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoIt: id,
        },
      })
      .then((res) => res.data.items);
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
      .then((res) => res.data.items);
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
      .then((res) => res.data.items);
  }
}
