const logRequest = (req, res, next) => {
    console.log(req.path);
    next();
}

export default logRequest