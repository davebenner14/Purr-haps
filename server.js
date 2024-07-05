const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "purr-haps-frontend")));

// Catch-all handler to return the index.html file for any requests not handled by the static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "purr-haps-frontend", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
