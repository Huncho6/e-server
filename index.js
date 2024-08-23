const express = require("express");
const cors = require("cors");
const db = require("./db");
const nikeRoutes = require("./routes/nikeRoutes");
const nbRoutes = require("./routes/nbRoutes");
const yeezyRoutes = require("./routes/yeezyRoutes");
const shoesRoutes = require("./routes/shoesRoutes"); 
const app = express();

app.use(cors());
app.use(express.json());

db.on("error", (error) => console.log("DB connection error:", error));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api/v1", nikeRoutes);
app.use("/api/v1", nbRoutes);
app.use("/api/v1", yeezyRoutes)
app.use("/api/v1", shoesRoutes)