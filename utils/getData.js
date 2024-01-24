import axios from "axios";
import { insertTradeinfo } from "../model/Tradeinfo.js";

export const getData = async (url) => {
  const response = await axios.get(url);
  const data = Object.values(response.data).slice(0, 10);
  data.forEach(({ name, last, buy, sell, volume, base_unit }) => {
    insertTradeinfo({ name, last, buy, sell, volume, base_unit });
  });
};
