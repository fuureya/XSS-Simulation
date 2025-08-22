const express = require("express");
const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Cookies route with param
app.get("/cookies/:param", (req, res) => {
  const { param } = req.params;
  res.send(`You sent: ${param}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
