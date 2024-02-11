const jwt = require('jsonwebtoken');
const userService = require('../../services/userService');

exports.login = (req, res) => {
    try {
        const payload = { id: req.body.userId, email: req.body.email };
        const secret = "its@secret";
        const token = jwt.sign(payload, secret);
        res.status(200).json({ token });
    } catch (error) {
        console.log('Error in login', error);
        res.status(500).json({ error: error.message })
    }
};