module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!!!' });
    }

    next();//hey everithing is good, go with the next func()
};