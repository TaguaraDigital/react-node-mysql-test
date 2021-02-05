const express = require('express');
const router = express.Router();
const controller = require('../controllers/recibos.controller')

router.post('/api/v1/recibos/', controller.recibos);  //all recibos

/* Get all Restaurants
router.get("/api/v1/restaurants", controller.restaurants);

// Get a Restaurant by Id
router.get("/api/v1/restaurants/:id", controller.restaurantById);

// Add a Restaurant
router.post("/api/v1/restaurants", controller.createRestaurant);

// Update a Restaurant
router.put("/api/v1/restaurants/:id", controller.updateRestaurant);

// Delete a Restaurant
router.delete("/api/v1/restaurants/:id", controller.deleteRestaurant);
*/
module.exports = router;