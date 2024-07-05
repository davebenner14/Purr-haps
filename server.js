const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

// Log the paths being used
console.log(
  "Static files served from:",
  path.join(__dirname, "purr-haps-frontend", "build")
);
console.log(
  "Serving index.html from:",
  path.join(__dirname, "purr-haps-frontend", "build", "index.html")
);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "purr-haps-frontend", "build")));

// Catch-all handler to return the index.html file for any requests not handled by the static files
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "purr-haps-frontend", "build", "index.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
