import axios from "axios";
import { BASE_URL } from "./Commonapi";
export const Getproductsdataapi = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      const jsonData = response.json();
      if (jsonData === null) { return []; } 
      else {  return jsonData }
    } catch (error) {
      console.log('error occured')
    }
  };