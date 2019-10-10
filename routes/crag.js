const express = require('express');
const cors = require('cors');
const _ = require('lodash');

const router = express.Router();
const corsOptions = cors({ origin: 'http://localhost:3000' });

const items = [
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

router.get('/', corsOptions, (req, res) => {
  res.json(items);
});

router.options('*', corsOptions, (req, res) => { // enable pre-flight request for DELETE
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.end();
});

let currentMaxId = 1;

router.post('/', corsOptions, (req, res) => {
  currentMaxId += 1;

  items.push({
    id: currentMaxId,
    ...req.body
  });

  res.status(201).end();
});

router.delete('/:id', corsOptions, (req, res) => {
  _.remove(items, c => c.id === Number(req.params.id));
  res.status(204).end();
});

module.exports = router;
