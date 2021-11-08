
import express from 'express';
const app = express();
import cors from 'cors';

import countryRoutes from './routes/country.js';

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

app.use(express.json());
app.use("/api/country",countryRoutes);

app.listen(process.env.PORT||5000,()=>{
    console.log("background server is running")
});