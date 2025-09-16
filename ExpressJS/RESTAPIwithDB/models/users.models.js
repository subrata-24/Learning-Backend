const { default: mongoose } = require("mongoose");

const useSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", useSchema);
