
import express from 'express';
const router = express.Router();

//this library throws the data in a much easier way, i don't know the problem why does my debounce is not working, so I needed some added functionality or another state to send
import  fs from 'fs';

import { getCountries } from '../controller/controller.js';



const dataRoute = './sample_data_fullstack.json';

router.get("/", getCountries);


export default router;