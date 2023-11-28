import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";
import redisConfig from "./config/redis";

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());
app.post("/users", UserController.store);

app.use("/admin/queues", BullBoard.UI);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Running on ${port}...`);
  console.log(`For the UI, open http://localhost:${port}/admin/queues`);
  console.log(
    `Make sure Redis is running on port ${redisConfig.port} by default`
  );
});
