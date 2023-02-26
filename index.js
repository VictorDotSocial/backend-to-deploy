require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "¡API respondiendo!",
  });
});

app.listen(process.env.APP_PORT || 3000, () => {
  console.log("Servidor rulando");
});
