const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/UserModel');
const Cache = require('../models/CacheModel');

// GET route for api/caches
// Get all users caches
// Private access
router.get('/', auth, async (req, res) => {
  try {
    const caches = await Cache.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(caches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST route for api/caches
// Add cache
// Private access
router.post(
  '/',
  [auth, [check('location', 'Location is required.').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { location, weapons, food, toiletpaper, trapped, notes } = req.body;
    try {
      const newCache = new Cache({
        location,
        weapons,
        food,
        toiletpaper,
        trapped,
        notes,
        user: req.user.id,
      });
      const cache = await newCache.save();
      res.json(cache);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// PUT route for api/caches/:id
// update cache
// Private access
router.put('/:id', auth, async (req, res) => {
  const { location, weapons, food, toiletpaper, trapped, notes } = req.body;

  const cacheFields = {};
  if (location) cacheFields.location = location;
  if (weapons) cacheFields.weapons = weapons;
  if (food) cacheFields.food = food;
  if (toiletpaper) cacheFields.toiletpaper = toiletpaper;
  if (trapped) cacheFields.trapped = trapped;
  if (notes) cacheFields.notes = notes;

  try {
    let cache = await Cache.findById(req.params.id);
    if (!cache) return res.status(404).json({ msg: 'Cache not found' });

    if (cache.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized.' });
    }
    cache = await Cache.findByIdAndUpdate(
      req.params.id,
      { $set: cacheFields },
      { new: true }
    );
    res.json(cache);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for api/caches/:id
// delete cache
// Private access
router.delete('/:id', auth, async (req, res) => {
  try {
    let cache = await Cache.findById(req.params.id);
    if (!cache) return res.status(404).json({ msg: 'Cache not found' });

    if (cache.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized.' });
    }
    await Cache.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Cache removed.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
