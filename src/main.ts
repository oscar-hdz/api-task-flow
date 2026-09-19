import "dotenv/config";
import express, { Express } from "express";

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log(`Server listen on PORT: ${PORT}`);
});
