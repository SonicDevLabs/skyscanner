import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import session from 'express-session';

const config = require('./_config');

const app = module.exports = express();
const port = config.port;

//middleware
app.use(bodyParser.json());
var corsOptions = {
   origin: 'http://localhost:9000'
};
app.use(cors(corsOptions));
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}));
app.use(express.static(__dirname + '/../../../dist'));  //serve all of our static front-end files from our server.

const skyscanner = require('./api/skyscanner.js');

app.post('/api/skyscanner/from/', skyscanner.flightsFrom);

app.listen(port, function() {
   console.log('Listening on port ', port);
})
