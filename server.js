/* === Dependencies === */
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes/index');

/* === Set the PORT to work with deployment environment === */
const PORT = process.env.PORT || 3001; 
/* === Call Express as app === */
const app = express();

/* === Middleware === */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Serve up static assets (usually on heroku) */
if (process.env.NODE_ENV === "production") {
  app.use(express.static('./client/build'));
};

/* === Routing === */
app.use(routes);

/* === Mongoose Connection === */
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/addressBook');

/* === Telling Express to Listen === */
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
