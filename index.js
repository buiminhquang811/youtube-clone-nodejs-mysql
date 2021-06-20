const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3001;

const db = require('./models');

app.use(express.json());
app.use(cors());

const userRoute = require('./routes/User');
app.use('/user', userRoute);

const uploadRoute = require('./routes/Upload');
app.use('/upload', uploadRoute);

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
  });
})



