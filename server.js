const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'app/build')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'app/build/index.html'));
});

app.listen(process.env.PORT ?
  process.env.PORT : 5000, err => {
  if (err) console.log(err);
  console.log('Server listening on port 5000...');
});

