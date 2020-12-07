import axios from "axios";
import { BEURL } from "../constants";

const getBeds = async (setHutData) => {
  const response = await axios.get(`${BEURL}/huts`, {
  params: {
    date: '2021-6-20T00:00:00.000Z',
    days: 3,
    people: 2
  }
});
  setHutData(response.data.data);
};

export default getBeds;
