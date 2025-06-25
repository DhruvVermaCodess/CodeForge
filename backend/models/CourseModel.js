const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  subtitle: {                                                                                                                                                                                           
    type: String 
  },
  icon: { 
    type: String // store as string or import path
  }, 
  duration: { 
    type: String 
  },
  students: { 
    type: String // or Number, based on how you want to handle it
  }, 
  rating: { 
    type: Number 
  },
  price: { 
    type: String 
  },
  originalPrice: { 
    type: String 
  },
  level: { 
    type: String, 
    enum: ['Beginner', 'Intermediate', 'Advanced'], 
    default: 'Beginner' 
  },
  description: { 
    type: String 
  },
  technologies: [{ 
    type: String 
  }],
  highlights: [{ 
    type: String 
  }],
  gradient: { 
    type: String 
  },
  bgGradient: { 
    type: String 
  },
  prerequisites: { 
    type: String 
  },
  isMain: {
    type: String, 
    enum: ['Yes', 'No'], 
    default: 'No'
  }, // for multiple flags
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  enrolledUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Course', courseSchema);