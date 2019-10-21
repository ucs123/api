// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/customer", { useNewUrlParser: true });
// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   // we're connected!
//   console.log("connection done...");
// });

const mongoose = require("mongoose");

const dbURI =
  //"mongodb+srv://username:Passwors@cluster0-vb95k.gcp.mongodb.net/LN?retryWrites=true&w=majority";
  "mongodb+srv://umesh:V3JC7p61jNe12ZG9@cluster0-vb95k.gcp.mongodb.net/LN?retryWrites=true&w=majority";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useFindAndModify: false 
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
