const express = require("express");
const app = express();
let path = require('path');
let bodyParser= require('body-parser');

//Include all routes
let personRoute = require("./routes/person");
let customerRoute = require("./routes/customer");
let navRoute = require("./routes/nav");
let indexDataRoute = require("./routes/indexdata");
let weatherRoute = require("./routes/weather");


app.use(bodyParser.json());

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

//middlewere

app.use((req, res, next) => {
  console.log(`Requested Date is ${new Date().toString()} => ${req.originalUrl}`);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(navRoute);
app.use(indexDataRoute);
app.use(weatherRoute);


app.use(express.static("public"));

//404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'))
});

//500
app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/500.html'))
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});



