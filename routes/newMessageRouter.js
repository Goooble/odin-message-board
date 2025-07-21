import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
  console.log(req.body);
  res.send("message received");
});

export default newMessageRouter;
