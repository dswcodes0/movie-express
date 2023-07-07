import express from 'express';
import { sequelize } from './database.js';
import { User, Post } from './models/index.js';

const app = express();

// FIXME Set up middleware, routes, etc. here

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });