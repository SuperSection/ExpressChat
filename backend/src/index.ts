import express, { Application, json } from "express";
import cors from "cors";

const app: Application = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(json());

// Security middleware
app.use(cors());

const contextPath = "/api/v1";

app.use(contextPath, (req, res) => {
  res.send("ExpressChat backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
