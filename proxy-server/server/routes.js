const express = require('express');
const request = require('request');
const port = require('./ports.js')

const router = express.Router();


router.route('/:id/:service')
  .get((req, res) =>  request({  
    url: `http://localhost:${port[req.params.service]}/item${req.url}`,
    method: "GET"
  }).pipe(res)); 

module.exports = router;
