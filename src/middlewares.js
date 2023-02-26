function validate (schema) {
    return function (req, res, next) {
        const { error } = schema.validate(req.body);
        if (!error) return next();
        res.status(400).json(error.message);
    };
}

function userIsLoggedIn (req, res, next) {
    if (req.session._id) return next();
    res.status(401).json();
}

function userLoggedInAsAdmin (req, res, next) {
    if (req.session.isAdmin) return next();
    res.status(403).json();
}

module.exports = { validate, userIsLoggedIn, userLoggedInAsAdmin }; 