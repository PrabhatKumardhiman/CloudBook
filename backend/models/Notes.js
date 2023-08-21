const mongoose = require("mongoose");
const { Schema } = mongoose;


const notesSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true }, // String is shorthand for {type: String}
  description: { type: String, required: true },
  tag: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notes", notesSchema);
