const express = require('express');
const Rating = require('../models/Rating');
const router = express.Router();

/*
    @route      GET api/ratings/:userLogin  
    @desc       Get all of user's ratings.
    @access     Public.
*/
router.get('/:userLogin', async (req, res) => {
  try {
    const ratings = await Rating.find({ userLogin: req.params.userLogin });
    res.json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route      GET api/ratings/:userId/:albumId
    @desc       Get user rating value for an album.
    @access     Public.
*/
router.get('/:userLogin/:albumId', async (req, res) => {
  try {
    const rating = await Rating.findOne({
      userLogin: req.params.userLogin,
      albumId: req.params.albumId,
    });

    if (rating != null) {
      res.json(rating.value);
    } else {
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route      POST api/ratings/
    @desc       Post a new rating.
    @access     Public.
*/
router.post('/:userLogin/:albumId/:value', async (req, res) => {
  try {
    const rating = await Rating.findOne({
      userLogin: req.params.userLogin,
      albumId: req.params.albumId,
    });
    if (rating) {
      res.send('Rating already exists...');
    } else {
      const newRating = new Rating({
        albumId: req.params.albumId,
        userLogin: req.params.userLogin,
        value: req.params.value,
      });
      await newRating.save();
      res.send(
        `Rating added album ${newRating.userLogin} // ${newRating.albumId} // ${newRating.value}`
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
