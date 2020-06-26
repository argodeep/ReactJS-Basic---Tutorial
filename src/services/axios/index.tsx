import axios from "axios";

const API = {
  backend: "https://randomuser.me/api/",
};

export const fetchUsers = async () => {
  let res = await axios.get(API.backend + '?inc=name,phone&results=20&nat=us');
  try {
    return res.data.results
  }
  catch(err) {
    console.log("Error", err);
    return []
  }
  finally {
    console.log('Request Successfull');
  }
}