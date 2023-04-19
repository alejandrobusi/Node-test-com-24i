const express = require('express');
const app = express();
require('dotenv/config');
require('../dataBase/dbConnection');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('../routes/user.route');
const loginAuth = require('../routes/login.route');
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', loginAuth);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
