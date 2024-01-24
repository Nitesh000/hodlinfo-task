import { DataTypes } from "sequelize";
import sequelize from "./db-setup.js";

const Tradeinfo = sequelize.define("Tradeinfo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  last: {
    type: DataTypes.FLOAT,
  },
  buy: {
    type: DataTypes.FLOAT,
  },
  sell: {
    type: DataTypes.FLOAT,
  },
  volume: {
    type: DataTypes.FLOAT,
  },
  base_unit: {
    type: DataTypes.STRING,
  },
});

(async () => {
  await Tradeinfo.sync({ force: true });
})();

export const insertTradeinfo = async (data) => {
  await Tradeinfo.create({
    name: data.name,
    last: data.last,
    buy: data.buy,
    sell: data.sell,
    volume: data.volume,
    base_unit: data.base_unit,
  });
};

export const getTradeinfo = () => {
  return Tradeinfo.findAll({
    raw: true,
  });
};

export default Tradeinfo;
