import axios from "axios";

export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   baseURL: "http://dummyjson.com",
  baseURL: "https://minor-production.up.railway.app/api",
  headers: {
    "Content-type": "application/json"
  }
});
// https://dummyjson.com/products