const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log("received");
  res.send("Decide backend is running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
