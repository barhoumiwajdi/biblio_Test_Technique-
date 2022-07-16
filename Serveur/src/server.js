import 'dotenv/config';
import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';
import connectDB from './db';

const app = new Express();
const apiTimeout = 12 * 60 * 1000;
app.use((req, res, next) => {
  // Set the timeout for all HTTP requests
  req.setTimeout(apiTimeout, () => {
    let err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });
  // Set the server response timeout for all HTTP requests
  res.setTimeout(apiTimeout, () => {
    let err = new Error('Service Unavailable');
    err.status = 503;
    next(err);
  });
  next();
});


app.use(cors());
app.use(bodyParser.json({ limit: '5000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5000mb' }));

routes.forEach((route) => app.use(route));
connectDB();
app.listen(process.env.PORT || 3900, () => {
  console.log(`connected  on ${process.env.PORT}`);
});

