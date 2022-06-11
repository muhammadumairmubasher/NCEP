import JWT from "jsonwebtoken";
import UserProfile from '../model/profileSchema.js';

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.JsonWebToken;
        const verifyToken = JWT.verify(token, process.env.SECRET_KEY);
        const rootUser = await UserProfile.findOne({
            _id: verifyToken._id,
            "userTokens.token": token
        })
        if (!rootUser) { throw new Error("Not Found") }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id; 
        next();
    } catch (error) {
        res.clearCookie("JsonWebToken");
        res.status(401).send('Unauthorized: No token Provided')
    }
}
export default  Authenticate;
