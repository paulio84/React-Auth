const express = require('express');
const debug = require('debug')('places:router');
const placesController = require('./controllers/places.controller');

const placesRouter = express.Router();

placesRouter
  // GET /api/places/
  .get('/', [placesController.GetAllPlaces])
  // GET /api/places/:placeId
  .get('/:placeId', async (req, res) => {

  })
  // POST /api/places/
  .post('/', (req, res) => {

  })
  // DELETE /api/places/:placeId
  .delete('/:placeId', (req, res) => {

  });

module.exports = placesRouter;
