import axios from "axios";

const apiKey = "cp4hm8hr01qnnlpbbft0cp4hm8hr01qnnlpbbftg";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  headers: {
    "Content-type": "application/json",
  },
  params: {
    token: apiKey,
  },
});
