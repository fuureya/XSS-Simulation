const express = require("express");
const app = express();
const PORT = 3000;

let lastParam = null;

app.get("/", (req, res) => {
  if (lastParam) {
    res.send(`Last param: ${lastParam}`);
  } else {
    res.send("Hello");
  }
});

app.get("/cookies/:param", (req, res) => {
  const { param } = req.params;
  lastParam = param;
  res.send(`You sent: ${param}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
