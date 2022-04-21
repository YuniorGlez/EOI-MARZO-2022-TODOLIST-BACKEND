
const authModel = require('./auth.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = { login, create }

function login(req, res) {
    return authModel.findOne({ email: req.body.email })
        .then(userFound => {
            if (!userFound) {
                return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
            }
            if (!bcrypt.compareSync(req.body.password, userFound.password)) {
                return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
            }

            // Genera el token de autenticación
            let token = jwt.sign({ email: userFound.email, role: 'admin', userId : 2 }, "SECRET")
            return res.json(token)
        })
        .catch(err => {
            return res.status(500).send(err)
        })



}

function create(req, res) {
    const { email, password } = req.body;
    return authModel.create({
        email: email,
        password: bcrypt.hashSync(password, 4)
    })
        .then(newUser => {
            return res.send(newUser)
        })
}
