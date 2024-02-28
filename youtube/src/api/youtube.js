/** @format */
// real data

import axios from "axios";
export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this._searchByKeyword(keyword) : this._mostPopular();
  }

  async _searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async _mostPopular() {
    return this.httpClient
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

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDtwi-LToptozhKGxI-_IgVTH-2XQ8aRh8
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular
