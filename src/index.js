import express from "express";
import { connect } from "./config/database.js";
import TweetService from "./services/tweet-service.js";

const app = express();

app.listen(3000, async () => {
  console.log("Server Started...");
  await connect();
  console.log("MongoDB Connected");

  const service = new TweetService();
  const response = await service.create({
    content: "Done with the #refactor",
  });

  console.log(response);
});
