import axios from "axios";

const baseUrl = "http://localhost:3007/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = newObject => {
  axios.post(baseUrl, newObject);
};

const remove = id => {
  axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, remove };
