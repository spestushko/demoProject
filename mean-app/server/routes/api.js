// Get dependancies
const express = require('express');
const router = express.Router();

// Dependancy for fake posts and data
const axios = require('axios');
const api = 'https://jsonplaceholder.typicode.com';

/* GET api listing */
router.get('/', (req, res) => {
  res.send('API works!');
})

/* GET mockup data listing */
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  axios.get(`${api}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
