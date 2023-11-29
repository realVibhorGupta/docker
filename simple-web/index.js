const express = require("express");
const redis = require("redis");
const app = express();
const process = require("process");
// const url = `redis://${process.env.redisHost}:${process.env.redisPort}`;

const redisClient = redis.createClient({
  // host: 'https://my-redis-server.com'
  socket: { host: "redis-server", port: 6389 },
});
client.set("visits", 0);

redisClient.connect();
redisClient.on("error", (err) => console.log("Redis error: ", err.message));
redisClient.on("connect", () => console.log("Connected to redis server"));
app.get("/", (req, res) => {
  process.exit(0);
  client.get("visits", (err, visits) => {
    res.send("Number of visits : " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
