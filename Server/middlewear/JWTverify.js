const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../Key');

const fetchUser = (req,res,next) => {
    const token = req.header('auth-token');
    if(!token) res.status(401).json("please verify using valid token")
    try {
        const data = jwt.verify(token,SECRET_KEY)
        req.userData = data;
        next();
    } catch (error) {
     console.log(error)   
     return res.json(error);
    }
}
module.exports = fetchUser;


