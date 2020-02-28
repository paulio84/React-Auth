const express = require('express');
const authController = require('./controllers/auth.controller');
const authMiddleware = require('./middleware/auth.middleware');

const authRouter = express.Router();

authRouter
  .all('*', [authMiddleware.hasValidAuthFields])
  // POST /auth/register
  .post('/register', [
    authController.Register
  ])
  // POST /auth/login
  .post('/login', [
    authController.login
  ]);

module.exports = authRouter;
