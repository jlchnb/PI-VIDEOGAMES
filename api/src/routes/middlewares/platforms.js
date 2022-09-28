const express = require('express');
const {API_KEY} = require('../../db');
const router = express.Router();
const axios = require('axios');

//Search all videogames platforms
router.get('/', async (req, res) => {  
    const apiresult = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`)
    const apivgplat = apiresult.data.results.map(p => p.name)
    res.send(apivgplat)
})


module.exports = router;