import  mongoose  from "mongoose";
import {app} from "./app.js";
import 'dotenv/config'; 

mongoose.connect(process.env.DB_URI);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});