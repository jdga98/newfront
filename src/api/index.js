import axios from "axios";

export const GET_CATEGORYBAR = () => {
  axios
    .get("http://10.4.28.199:3001/categories")
    .then(res => {
      setState(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
