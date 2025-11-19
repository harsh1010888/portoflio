require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const viewsRouter = require('./routes/views');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS: allow specific origin if provided in env, otherwise allow all
const corsOrigin = process.env.CORS_ORIGIN && process.env.CORS_ORIGIN.length > 0 ? process.env.CORS_ORIGIN : '*';
app.use(cors({ origin: corsOrigin }));
app.use(express.json());

// Connect to MongoDB Atlas
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('MONGODB_URI is not set in environment. See .env.example');
  process.exit(1);
}

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/views', viewsRouter);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Generic error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
