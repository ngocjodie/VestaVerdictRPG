const mongoose = require("mongoose");

const FactSchema = new mongoose.Schema({
  playthroughs: Number,
  awards: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("fact", FactSchema);