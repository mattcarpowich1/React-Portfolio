const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/app/build/')));

app.get('*', (req, res) => {
  res.sendFile('index.html')
});

app.listen(5000, () => {
  console.log('Server listening on port 5000...')
});

