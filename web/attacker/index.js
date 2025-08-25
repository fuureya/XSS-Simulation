const express = require("express");
const app = express();
const PORT = 3000;

let lastParam = null; // penyimpanan sementara

// Root route
app.get("/", (req, res) => {
  if (lastParam) {
    res.send(`Last param: ${lastParam}`);
  } else {
    res.send("Hello");
  }
});

// Cookies route with param
app.get("/cookies/:param", (req, res) => {
  const { param } = req.params;
  lastParam = param; // simpan untuk dipakai di "/"
  res.send(`You sent: ${param}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
