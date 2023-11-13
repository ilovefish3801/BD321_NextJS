import { BASE_URL } from "@/constants";

export class News {
  baseURL: string = BASE_URL;
  constructor() {}
  public async getData(endpoint: string) {
    return await fetch(`${this.baseURL}/${endpoint}`)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }
}
