const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ndubuisideborah2001:GUWvgk6li9iRdmSs@cluster0.gziap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(9000, () => {
  console.log("server is running");
});
