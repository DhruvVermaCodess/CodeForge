const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  image: { type: String, required: true },
  coursename: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  status: { type: String, enum: ['live batch', 'recorded video'], required: true },
  languages: { type: [String], required: true },
  real_price: { type: Number, required: true },
  discounted_price: { type: Number, required: true },
  discount: { type: String, required: true },
  completesyllabus: { type: [String], required: true },
  faqs: { type: [String], required: true },
  prerequistes: { type: [String], required: true },
  instructor: { type: String, required: true }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Course', courseSchema);
