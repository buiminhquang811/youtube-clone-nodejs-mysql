const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const response = await User.findAll({
    where: {
      googleId: id,
    }
  })
  res.send(response)
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const googleId = req.body.googleId;
  const channelName = req.body.channelName;
  const profilePictureUrl = req.body.imageUrl;
  User.create({
    name: name,
    email: email,
    googleId: googleId,
    channelName: channelName,
    profilePictureUrl: profilePictureUrl,
  }).catch((err) => {
    console.log(err);
  });
  res.send('inserted into database')
});

module.exports = router;