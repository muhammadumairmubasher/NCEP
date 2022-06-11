import UserProfile from '../model/profileSchema.js';
import bcryptjs from 'bcryptjs';
import JWT from 'jsonwebtoken';


export const getAll = async (request, response) => {
    try {
        let userProf = await UserProfile.find();
        response.json(userProf);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const registerNewUser = async (request, response) => {
    const { name, email, password, cpassword } = request.body;
    if (!name || !email || !password || !cpassword) {
        return response.status(422).json({ message: 'Please Filled all Fields' })
    }
    try {
        const userExist = await UserProfile.findOne({ email: email });
        if (userExist) {
            return response.status(409).json({ error: "Email Already Registered" })
        } else if (password != cpassword) {
            return response.status(422).json({ error: "Password are not Matching" })
        } else {
            const newUser = new UserProfile(request.body);
            //  DO Hashing
            const newRegisterdUser = await newUser.save();
            if (newRegisterdUser) {
                response.status(200).json({ message: "User registered successfully" })
            } else {
                response.status(500).json({ message: "Failed to registered" })
            }
        }
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const logInUser = async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).json({ error: 'Please Fill All Fields' })
    }
    try {
        const userLogin = await UserProfile.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcryptjs.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            response.cookie("JsonWebToken", token, {
                expires: new Date(Date.now + 25892000000),
                httpOnly: true,
                path: '/'
            });
            if (isMatch) {
                response.status(200).json({ message: "Successfully SignIn" })
            } else {
                response.status(401).json(({ message: "Invalid Credentials!" }))
            }
        } else {
            response.status(401).json(({ message: "Invalid Credentials!" }))
        }
    } catch (error) {
        response.json({ message: error.message });
    }
}
export const getUserProfile = async (request, response) => {
    response.send(request.rootUser);
}
export const setUserProfile = async (request, response) => {
    let user = await UserProfile.findById(request.params.id);
    user = request.body;
    const editUser = new UserProfile(user);
    try {
        await UserProfile.updateOne({ _id: request.params.id }, editUser);
        response.json(editUser);
    } catch (error) {
        response.json({ message: error.message });
    }
}
export const signOutUser = async (request, response) => {
    try {
        await response.status(200).clearCookie("JsonWebToken", { path: '/' });
        request.rootUser.userTokens=request.rootUser.userTokens.filter((item)=>{       
            return item.token != request.token 
        })
        request.rootUser.save();
        response.send("logout Successfully!");
    } catch (error) {
        response.json({ message: error.message });
    }
}