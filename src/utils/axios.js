import axios from "axios";

export default axios.create({
  baseURL: "https://api.mycoolkas.my.id",
  headers: {
    "Content-Type": "application/json",
  },
});
