const router = require('express').Router();

// Import the API routes from the 'api' folder
const apiRoutes = require('./api');

// Middleware to use the API routes under the '/api' prefix
router.use('/api', apiRoutes);

// Simple route for the root URL ('/')
router.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Back End API!');
});

// Catch-all route for any request that doesn't match the above routes
router.use((req, res) => {
  res.status(404).send('404 Error! Page not found.');
});

module.exports = router;
