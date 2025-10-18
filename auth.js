const express = require('express');
const router = express.Router();
const { auth } = require('../firebase');

router.post('/login', async (req, res) => {
  const { idToken } = req.body;
  try {
    const decoded = await auth.verifyIdToken(idToken);
    res.json({ uid: decoded.uid, role: decoded.role || 'student' });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;