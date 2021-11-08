

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const my_json_file = require("../sample_data_fullstack.json")

export const getCountries = (req,res)=>{
    


    res.status(200).json({
        success: true,
        countries: my_json_file
      });

}