const express = require('express');
const cors = require('cors');
const _ = require('lodash');

const router = express.Router();
const corsOptions = { origin: 'http://localhost:3000' };

const crags = [
  {
    id: 0,
    name: 'Örnberget',
    latitude: 1,
    longitude: 1
  }, {
    id: 1,
    name: 'Flaten',
    latitude: 1,
    longitude: 1
  }
];

router.get('/', cors(corsOptions), (req, res) => {
  res.json(crags);
});

router.options('*', cors(corsOptions), (req, res) => { // enable pre-flight request for DELETE
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.end();
});

router.delete('/:id', cors(corsOptions), (req, res) => {
  _.remove(crags, (c) => c.id === Number(req.params.id));
  res.status(204).end();
});

module.exports = router;
