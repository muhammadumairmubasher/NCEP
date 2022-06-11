import User from '../model/userSchema.js';

export const getUsers = async (request, response) => {
    try {
        let user = await User.find();
        response.json(user);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        response.json(newUser);
    } catch (error) {
        response.json({ message: error.message });
    }

}

export const getUserById = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        response.json(user);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const edittUser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;
    const ediitUser = new User(user);
    try {
        await User.updateOne({ _id: request.params.id }, ediitUser);
        response.json(ediitUser);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id });
        response.json("User deleted Successfully");
    } catch (error) {
        response.json({ message: error.message });
    }
}