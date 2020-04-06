const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user.routes');
const symptomEntryRoutes = require('./routes/symptomEntry.routes');
const symptomLogRoutes = require('./routes/symptomLog.routes');
const healthInputLogRoutes = require('./routes/healthInputLog.routes');
const healthInputEntryRoutes = require('./routes/healthInputEntry.routes');
const errorMiddleware = require('./middleware/errors');
const authMiddleware = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 4000;
const logLevel = process.env.LOG_LEVEL || 'dev';

// Make connection to the db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/symptomTracer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Store the instance of db so we can listen to events.
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connection Successful!');
});

// Middleware - logs server requests to console
app.use(logger(logLevel));

// Middleware - parses incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ************************************
// ROUTE-HANDLING MIDDLEWARE FUNCTIONS
// ************************************

// This tells us where to look for different requests 
// app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/symptomEntry', authMiddleware, symptomEntryRoutes);
app.use('/api/symptomLog', authMiddleware, symptomLogRoutes);
app.use('/api/healthInputEntry', authMiddleware, healthInputEntryRoutes);
app.use('/api/healthInputLog', authMiddleware, healthInputLogRoutes);

// Handle 404 requests
app.use(errorMiddleware.error404);

// Handle 500 requests
// applies mostly to live services
app.use(errorMiddleware.error500);

// listen on server port
app.listen(port, function() {
  console.log(`Running on port: ${port}...`);
});