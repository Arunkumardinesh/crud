const userService = require('../../services/userService');
const crypto = require('crypto');

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const password = crypto.createHash('sha256').update(userData.password).digest('hex');
        userData.password = password;
        const response = await userService.createUser(userData);
        res.status(200).json({ message: 'Created the user' });
    } catch (error) {
        console.log('Error while creating user', error);
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        if (!req.body || !req.body.email) return res.status(400).json({ 'error': 'Missing email' });

        const userExist = await userService.checkUserExists({ email: req.body.email });
        if (!userExist) return res.status(400).json({ error: 'user does not exist' });

        const response = await userService.deleteUserWithEmailId({ email: req.body.email });
        if (response && response.acknowledged)
            res.status(200).json({ 'message': 'Deleted the user' })
    } catch (error) {
        console.log('Error while deleting user', error);
        res.status(500).json({ error: error.message });
    }
}