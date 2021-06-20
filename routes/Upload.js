const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { Upload } = require('../models');

const storage = multer.diskStorage({
  destination: './Videos',
  filename: (req, file, cb) => {
    cb(null, "VIDEO-" + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({
  storage: storage,
}).single('video')

router.post('/video', upload, (req, res) => {
  res.send("Hey, you just uploaded a new Video")
});

router.post('/', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const channelName = req.body.channelName;
  const thumbUrl = req.body.thumbnailUrl;
  const videoPathname = req.body.videoPathname;
  Upload.create({
    title: title,
    description: description,
    channel: channelName,
    thumbnailUrl: thumbUrl,
    videoPathname: videoPathname,
  }).catch((err) => {
    console.log(err);
  });
  res.send("Hey, you just uploaded a new Video")
  // router.post('/video', upload, (req, res) => {
  //  

  // });
})

module.exports = router;
