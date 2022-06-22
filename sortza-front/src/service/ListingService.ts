import axios from "axios"

export const getListings = async() => {
  const req = await axios.get("http://localhost:3333/api/v1/listing/all", {withCredentials : true});
  return req.data;
}