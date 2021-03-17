const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

/*
    @route    POST /api/users
    @desc     Register a user.
    @access   Public.
*/
router.post('/', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(req.body);
    const newUser = new User({
      loggedIn: req.body.loggedIn,
      login: req.body.login,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ msg: 'User added' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: 'Bad request' });
  }
});

/*
    @route    PUT /api/users/:login/:newpassword
    @desc     Change user password.
    @access   Public.
*/
router.put('/:login/:newpassword', async (req, res) => {
  let user = await User.findOne({ login: req.params.login });
  const uid = user._id;
  console.log(`ID: ${uid}`);
  const salt = await bcrypt.genSalt();
  const newPassword = req.params.newpassword;
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  console.log(`New pass: ${newPassword}`);
  if (user) {
    us = await User.findOneAndUpdate(
      { _id: uid },
      { $set: { password: hashedPassword } },
      {
        new: true,
      }
    );
    res.send(`Password has been changed to ...+ ${hashedPassword}`);
  } else {
    res.send('Error...');
  }
});

/*
    @route    POST /api/users/login
    @desc     Logs in a user.
    @access   Public.
*/
router.post('/login', async (req, res) => {
  const user = await User.findOne({ login: req.body.login });
  if (user == null) res.send('No user found.');
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Logged in');
    } else {
      res.send('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

/*
    @route    DELETE /api/users/:login
    @desc     Deletes a user by id
    @access   Public
*/
router.delete('/:login', async (req, res) => {
  try {
    await User.findOneAndDelete({ login: req.params.login });
    res.send('User deleted.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route    GET /api/users
    @desc     Gets all users
    @access   Public
*/
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route    GET /api/users/:login
    @desc     Get user id by login
    @access   Public
*/
router.get('/:login', async (req, res) => {
  try {
    const user = await User.findOne({ login: req.params.login });
    res.json({ id: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
