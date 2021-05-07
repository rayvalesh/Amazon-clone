import axios from "axios";

const instance = axios.create({
  baseURL: "...", //THE API(Cloud Function) URL
});

export default instance;
