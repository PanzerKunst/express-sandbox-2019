const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
  console.log('ID:', req.params.id); // eslint-disable-line no-console
  next();
}, (req, res) => {
  res.json({ 'User ID': req.params.id });
});

module.exports = router;
