require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  console.log("Petición a TEST");
  res.json({
    success: true,
    message: "¡API respondiendo!",
  });
});

app.listen(process.env.APP_PORT || 3000, () => {
  console.log("Servidor rulando");
});
