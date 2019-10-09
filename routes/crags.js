const express = require('express');
const cors = require('cors');

const router = express.Router();
const corsOptions = { origin: 'http://localhost:3000' };

router.options('/', cors(corsOptions)); // enable pre-flight request

const crags = [{
  id: 0,
  name: 'Örnberget',
  latitude: 1,
  longitude: 1
}];

router.get('/', cors(corsOptions), (req, res) => {
  res.json(crags);
});

module.exports = router;
