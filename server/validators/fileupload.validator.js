const { body, validationResult } = require('express-validator');

exports.validationBodyRules = [
    body('login', 'login is required').exists(),
    body('login', 'login is required').notEmpty()
];

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};