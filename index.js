import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './database/config.js';
import router  from "./routers/recipe.router.js";


dotenv.config();
const app = express();

connectDB();
app.use(express.json());

app.use("/recipes", router);


const PORT =  process.env.PORT || 4000;

app.get('/',(req,res) => {
    res.send('Recipes API is running...');
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})