import "dotenv/config";
import express, { Express } from "express";
import userRoutes from "./routes/user.route";
import { corsMiddleware } from "./middleware/cors";

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.disable("x-powered-by");
app.use(corsMiddleware());

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listen on PORT: ${PORT}`);
});
