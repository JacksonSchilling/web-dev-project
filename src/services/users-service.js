import axios from 'axios';
const USER_API = 'http://localhost:4000/api/users'

export const createUser = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data;
}


export const findUsers = async () => {
    const response = await axios.get(USER_API);
    const users = response.data;
    return users;
}

export const deleteUsers = async (uid) => {
    const response = await axios
        .delete(`${USER_API}/${uid}`)
    return response.data
}

export const updateUsers = async (user) => {
    const response = await axios
        .put(`${USER_API}/${user._id}`, user);
    return user;
}