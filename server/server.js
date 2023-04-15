// Dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// Config and middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers
const recipesController = require('./controllers/recipes_controller');
app.use('/api/recipes', recipesController);

// Listen
app.listen(9001, () => {
  console.log(`PORT: ${9001}`);
});
