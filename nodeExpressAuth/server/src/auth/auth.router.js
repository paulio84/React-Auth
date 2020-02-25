const express = require('express');
const authController = require('./controllers/auth.controller');
const authMiddleware = require('./middleware/auth.middleware');

const authRouter = express.Router();

authRouter
  // POST /auth/register
  .post('/register', [
    authMiddleware.hasValidAuthFields,
    authController.Register
  ]);

module.exports = authRouter;
