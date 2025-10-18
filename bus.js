const express = require('express');
const router = express.Router();

// Example: Store buses in-memory for demo
let busLocations = [
  { busId: '1', latitude: 12.9716, longitude: 77.5946, route: 'A' },
];

// Get all bus locations
router.get('/locations', (req, res) => {
  res.json({ buses: busLocations });
});

// Update bus location (driver posts location)
router.post('/location', (req, res) => {
  const { busId, latitude, longitude } = req.body;
  let bus = busLocations.find(b => b.busId === busId);
  if (bus) {
    bus.latitude = latitude;
    bus.longitude = longitude;
  } else {
    busLocations.push({ busId, latitude, longitude, route: 'A' });
  }
  res.json({ success: true });
});

module.exports = router;