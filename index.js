import db from "./model/db-setup.js";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { getData } from "./utils/getData.js";
import { getTradeinfo } from "./model/Tradeinfo.js";

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const url = process.env.API_URL;

// use cjs view
app.set("view engine", ejs);
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "static")));

getData(url);

app.get("/", async (_req, res) => {
  const response = await getTradeinfo();
  res.render("index.ejs", { response });
});

// serve the app
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
