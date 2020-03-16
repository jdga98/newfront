import axios from "axios";
import environment from "./environment";

const hosts = {
  categories: environment.hostCategories
};

const Call = {
  get: function(host, serviceURI) {
    console.log(environment);
    return axios.get(`${hosts[host]}${serviceURI}`);
  },
  post: function(host, servicieURI, body, headers) {
    return axios.post(`${hosts[host]}${servicieURI}`, body, headers);
  },
  put: function(host, serviceURI, body, headers) {
    return axios.put(`${hosts[host]}${serviceURI}`, body, headers);
  },
  delete: function(host, serviceURI) {
    return axios.delete(`${hosts[host]}${serviceURI}`);
  }
};
export default Call;
