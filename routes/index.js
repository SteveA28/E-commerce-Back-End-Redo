const router = require('express').Router();
const apiRoutes = require('./api');

// Setup API routes
router.use('/api', apiRoutes);

// Error handling for unknown routes
router.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});

module.exports = router;
