const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const path = require('path');
const morgan = require('morgan');
const router = require('./router');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use('/bundles', router);
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});