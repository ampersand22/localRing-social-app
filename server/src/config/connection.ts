const mongoose = require("mongoose");

mongoose.connect(
  process.env.DATABASE_URL || "mongodb://localhost/national-parks-spotter",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;