const express = require('express');
const router = express.Router();
const View = require('../models/View');

// POST /api/views/increment
// Increments the global view count by 1 and returns the updated count
router.post('/increment', async (req, res) => {
  try {
    // find one document and increment count atomically, create if not exists
    const doc = await View.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ).lean();

    return res.json({ count: doc.count });
  } catch (err) {
    console.error('Increment view error:', err);
    return res.status(500).json({ error: 'Failed to increment view count' });
  }
});

// GET /api/views
// Returns the current view count (0 if no document exists)
router.get('/', async (req, res) => {
  try {
    const doc = await View.findOne({}).lean();
    const count = doc ? doc.count : 0;
    return res.json({ count });
  } catch (err) {
    console.error('Get view error:', err);
    return res.status(500).json({ error: 'Failed to get view count' });
  }
});

module.exports = router;
