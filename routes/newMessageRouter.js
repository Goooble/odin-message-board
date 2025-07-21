import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.send("Send a message!");
});


export default newMessageRouter;