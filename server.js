import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
