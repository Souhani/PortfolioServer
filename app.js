import express from "express";;
import cors from "cors";
import {newForm} from "./controllers/newForm.js";

export const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
   res.json("its working");
});

app.post("/newForm", newForm);