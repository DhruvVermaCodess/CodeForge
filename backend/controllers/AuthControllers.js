const jwt = require('jsonwebtoken');
const User = require('../models/AuthModel');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  try {
    const {name, email, password } = req.body;

    if (!name, !email || !password) {
      return res.status(400).json({ err: 'All fields required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ err: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      
      {
        userId: newUser._id,
        userName: newUser.name,
        userRole: newUser.role,
        userEmail: newUser.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '7d' }
    );

    res.status(201).json({ message: 'Signup Successful', token });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ err: 'All fields required' });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ err: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ err: 'Invalid password' });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        userName: existingUser.name,
        userRole: existingUser.role,
        userEmail: existingUser.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '7d' }
    );

    res.status(200).json({ message: 'Login Successful', token });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
