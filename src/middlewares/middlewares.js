//MIDDLEWARES

//middleware för validering
function validate (schema) {
    return function (req, res, next) {
        const { error } = schema.validate(req.body);
        if (!error) return next();
        res.status(400).json(error.message);
    };
}


//middleware för att kolla om användaren är inloggad
function userIsLoggedIn (req, res, next) {
    if (req.session._id) return next();
    res.status(401).json();
}


//middleware för att kolla om användaren är inloggad som admin
function userLoggedInAsAdmin (req, res, next) {
    if (req.session.isAdmin) return next();
    res.status(403).json();
}

module.exports = { validate, userIsLoggedIn, userLoggedInAsAdmin }; 