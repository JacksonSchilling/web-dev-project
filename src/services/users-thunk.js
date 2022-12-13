import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./users-service"

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findUsers()
)
export const deleteUsersThunk = createAsyncThunk(
    'users/deleteUsers',
    async (userId) => {
        await service.deleteUsers(userId)
        return userId
    })
export const createUsersThunk = createAsyncThunk(
    'users/createUser',
    async (thunkAPI) => {
        await service.createUser(thunkAPI)
        return thunkAPI
    })
export const updateUsersThunk =
    createAsyncThunk(
        'users/updateUser',
        async (user) =>
            await service.updateUsers(user)
    )