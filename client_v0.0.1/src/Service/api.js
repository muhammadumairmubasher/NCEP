import axios from 'axios';
const usersUrl = 'http://localhost:8000';
const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
};

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}
export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}
//user
export const registerUser = async (user) => {
    return await axios.post(`${usersUrl}/register`, user)
}
export const signIn = async (user) => {
    return await axios.post(`${usersUrl}/signin`, user, config)
}
export const editUserProfile = async (id, user) => {
    return await axios.put(`${usersUrl}/profile/${id}`, user)
}
export const getUserProfile = async (id, user) => {
    return await axios.get(`${usersUrl}/profile`, { withCredentials: true });
}
export const signout = async () => {
    return await axios.get(`${usersUrl}/signout`, { withCredentials: true })
}