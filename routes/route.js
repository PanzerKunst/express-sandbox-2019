const express = require('express');
const cors = require('cors');
const _ = require('lodash');

const router = express.Router();
const corsOptions = cors({ origin: 'http://localhost:3000' });

const items = [
  {
    id: 0,
    name: 'Sator',
    grade: '8a',
    cragId: 0
  }, {
    id: 1,
    name: 'I\'ll Be Back',
    grade: '8a',
    cragId: 0
  }, {
    id: 2,
    name: 'Panta Rei',
    grade: '7a',
    cragId: 0
  }, {
    id: 3,
    name: 'Baretta',
    grade: '8a',
    cragId: 1
  }
];

router.get('/', corsOptions, (req, res) => {
  res.json(items);
});

router.options('*', corsOptions, (req, res) => { // enable pre-flight request for DELETE
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.end();
});

let currentMaxId = 3;

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

router.delete('/', corsOptions, (req, res) => {
  _.remove(items, c => c.cragId === Number(req.query.cragId));
  res.status(204).end();
});

module.exports = router;
