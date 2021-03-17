const express = require('express');
const Album = require('../models/Album');
const router = express.Router();

/*
    @route      GET api/albums  
    @desc       Gets all albums.
    @access     Public.
*/
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route      POST api/albums/  
    @desc       Save an album.
    @access     Private.
*/
router.post('/', async (req, res) => {
  try {
    const newAlbum = new Album(req.body);
    await newAlbum.save();
    res.send(`Added album ${newAlbum.title}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route      DELETE api/albums/:id  
    @desc       Delete an album.
    @access     Private.
*/
router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    await Album.findByIdAndDelete(req.params.id);
    res.send('Album deleted.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route      PUT api/albums/:id  
    @desc       Update album info.
    @access     Private.
*/
router.put('/:id', async (req, res) => {
  try {
    if (req.body) await Album.findByIdAndUpdate(req.params.id, req.body);
    else res.status(401).send('Enter correct update parameters.');
    res.send('Album updated.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
