const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

dotenv.config();

const app = express();
const cors = require('cors');
app.use(cors());


app.use(helmet());
app.use(compression());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected'))
  .catch((err) => console.error('DB connection error:', err));
const userRoute = require('./routes/userData');
app.use('/api', userRoute);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
