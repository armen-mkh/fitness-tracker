const express = require('express');
const mongoose = require('mongoose');
const routes = require('./apiRoutes');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json());

mongoose.connect("mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, ()=>console.log('listening on port '+PORT))



