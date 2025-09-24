const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let news = [
  { id: 1, title: "First News", content: "Hello from Render!" }
];

app.get("/news", (req, res) => {
  res.json(news);
});

app.listen(3000, () => console.log("Backend running"));
