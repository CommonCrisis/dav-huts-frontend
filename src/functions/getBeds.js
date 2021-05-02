import axios from "axios";
import { BEURL } from "../constants";
import dateFormat from "dateformat";


const getBeds = async (setHutData, date, days, people, countries) => {
  const response = await axios.get(`${BEURL}/huts`, {
  headers: { 
    'Access-Control-Allow-Origin' : '*',
      },
  params: {
    start_date: dateFormat(date, "yyyy-mm-dd"),
    days: days,
    people: people,
    countries: ['Germany']
  }
});
  setHutData(response.data.data);
};

export default getBeds;
