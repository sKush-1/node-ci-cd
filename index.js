import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "server is up and running!",
  });
});

app.listen(3421, () => {
  console.log("Server is running on port 3421");
});
