const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  
const config = require('./config/config.js');
const middleware = require('./middleware/middleware.js');
const connectDb = require('./config/db');
//database connection
connectDb();
app.use(middleware);

app.listen(port, () => console.log(`url-shortener listening on port ${config.port}!`));