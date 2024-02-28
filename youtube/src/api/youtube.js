/** @format */
// real data

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this._searchByKeyword(keyword) : this._mostPopular();
  }

  async _searchByKeyword(keyword) {
    return this.apiClient
      .search({
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
    return this.apiClient
      .videos({
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
