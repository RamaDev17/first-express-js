const auth = (req, res, next) => {
    console.log('middleware auth');
    next();
}

export default auth