require("dotenv").config();
const express = require("express");
const ConnectDB = require("./utils/db");
const app = express();
const router = require("./router/index");
const cors = require("cors");

const corsOptions = {
  origin: process.env.ClIENT_URL,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD",
  credentials: true,
};
PORT = 5000;
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });
});
