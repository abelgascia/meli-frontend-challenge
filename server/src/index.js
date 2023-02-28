import "dotenv/config";
import express from "express";
import cors from "cors";

import routes from "./routes/Product.js";

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use("/api/items", routes);

app.listen(4000, () => console.log("Servidor escuchando en el puerto", PORT));
