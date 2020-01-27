
const express = require('express');
const massive = require('massive');

massive({
  host: 'localhost',
  port: 5435,
  database: 'handraiser',
  user: 'postgres',
  password: 'handraiser',
}).then(db => {
  const app = express();

  app.set('db', db);

  app.use(express.json());

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});