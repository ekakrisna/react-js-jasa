import axios from "axios";

export default axios.create({
  baseURL: "https://60cb2f6921337e0017e440a0.mockapi.io",
  headers: {
    "Content-type": "application/json",
  },
});
