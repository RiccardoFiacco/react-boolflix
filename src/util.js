import axios from "axios";

export function axiosCall(uri, callback) {
    axios
      .get(uri)
      .then((res) => {
        callback(res.data)
      })
      .catch((err) => {
        callback(err);
      });
}