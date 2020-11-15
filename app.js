const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");
require("dotenv").config({path: 'keys'});

const users = require("./routes/api/users");
const reviews = require("./routes/api/reviews");
const attractions = require("./routes/api/attractions");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  // .catch(err => console.log(err));

app.get("/", (req, res) => {
  const user = new User({
    handle: "Lilly",
    email: "lilly@lilly.com",
    password: "123456"
  })
  user.save();
  res.send("MongoDB is working")
});

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.use("/api/users", users);
app.use("/api/reviews", reviews);
app.use("/api/attractions", attractions);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
