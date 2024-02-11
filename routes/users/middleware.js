exports.checkNecessaryFields = async (req, res, next) => {
    try {
        const errors = [];
        if (req.body) {
            if (!req.body.firstName) errors.push('First name is missing');
            if (!req.body.lastName) errors.push('Last name is missing');
            if (!req.body.email) errors.push('email is missing');
            if (!req.body.password) errors.push('password is missing');

            if (errors.length) return res.status(400).json({ 'error': `${errors.join(',')}` })

            return next();
        }

        return res.status(400).json({ 'error': 'missing fields' });
    } catch (error) {
        console.log('Error in checkNecessaryFields', error);
        res.status(500).json({ 'error': error.message });
    }
};