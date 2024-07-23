exports.ensureAuthenticated = (req, res, next) => {
    const secretKey = req.body;

    if (!secretKey) {
        return res.status(401).json({
            message: "Unauthorized!"
        });
    } else if (secretKey !== process.env.SECRET_KEY) {
        return res.status(401).json({
            message: "Unauthorized!"
        });
    } 

    next();
}