import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, logout, profile, deleteUser, updateUser} from "./users-service";
import * as service from "../../services/liked-song-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const profileThunk = createAsyncThunk(
    'profile',
    async (currentUser) => await profile(currentUser)
)
export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async (uid) => await deleteUser(uid)
)
export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (userDetails) => {
        const uid = userDetails[0]
        const userUpdates = userDetails[1]
        await updateUser(uid, userUpdates)

    }
)