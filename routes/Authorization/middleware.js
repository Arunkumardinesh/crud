const userService = require('../../services/userService');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.validateUserPassword = async (req, res, next) => {
    try {
        if (req.body) {
            const errors = [];
            if (!req.body.email) errors.push('Email is missing');
            if (!req.body.password) errors.push('Password is missing');

            if (errors.length) return res.status(400).json({ error: `${errors.join(',')}` });

            const user = await userService.getUser({ email: req.body.email });
            if (!user) return res.status(400).json({ error: 'user not found' });

            const hashedInputPassword = crypto.createHash('sha256').update(req.body.password).digest('hex');
            if (hashedInputPassword === user.password) {
                req.body.userId = user.__id;
                return next();
            }
        }

        return res.status(400).json({ error: 'missing user inputs' });
    } catch (error) {
        console.log('Error while validating user inputs', error);
        res.status(500).json({ error: error.message })
    }
};

exports.validateJwt = async (req, res, next) => {
    try {
        if (req.headers && req.headers['authorization']) {
            const token = req.headers['authorization'].split(' ')[1];
            if (!token) return res.status(401).json({ error: 'missing token' });

            const secret = "its@secret";
            const decoded = jwt.verify(token, secret);

            if (!decoded) return res.status(401).json({ error: 'Invalid token' })

            return res.status(200).json({ 'message': 'Token verification successful' })
        }

        return res.status(401).json({ error: 'token validation failed' })
    } catch (error) {
        console.log('Error while validating jwt', error);
        res.status(400).json({ 'error': error.message })
    }
}