import axios from "axios";

export function axiosSetCall(uri, callback) {
    axios
      .get(uri)
      .then((res) => {
        callback(res.data)
      })
      .catch((err) => {
        callback(err);
      });
}