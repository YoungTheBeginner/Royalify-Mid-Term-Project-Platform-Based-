const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const productsRouter = require('./routes/products');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/products', productsRouter);

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
