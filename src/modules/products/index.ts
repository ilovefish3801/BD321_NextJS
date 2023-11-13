import { BASE_URL } from "@/constants";

export class Products {
  baseURL: string = BASE_URL;
  constructor() {}
  public async getData(endpoint: string) {
    return await fetch(`${this.baseURL}/${endpoint}`)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  }
}
