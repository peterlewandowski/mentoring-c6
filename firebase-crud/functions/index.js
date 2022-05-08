import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { router } from "./src/routes/saturdayclass.routes.js";

const app = express();
app.use(cors());
app.use(express.json())
app.use(router)


export const api = functions.https.onRequest(app)