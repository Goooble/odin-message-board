import express from "express";
import process from "process";
import "dotenv/config";
const PORT = parseInt(process.env.PORT) || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});
console.log(typeof PORT)
app.listen(PORT, () => {
  console.log(`server is open at port: ${PORT}`);
});
