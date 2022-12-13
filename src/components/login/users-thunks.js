import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, logout, profile, deleteUser, updateUser} from "./users-service";

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
    async (uid, userUpdates) => await updateUser(uid, userUpdates)
)