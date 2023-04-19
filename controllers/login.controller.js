const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({email});
    if (!userExist) return res.status(404).json('El usuario no existe');
    const verifyPass = bcrypt.compareSync(password, userExist.password);
    if (!verifyPass) return res.status(404).json('Verifica el email o la contraseña');

    const payload = {
      id: userExist._id,
      email: userExist.email,
      role: 'admin'
    };

    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: 60,
    });

    res.status(200).json({ msg: 'ingreso exitoso', token});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  login,
};
