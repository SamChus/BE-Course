const auth = (req, res, next) => {
    console.log("authenicating user....")
    next()
}

module.exports = auth