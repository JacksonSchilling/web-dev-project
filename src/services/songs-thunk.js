import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './liked-song-service'

export const getLikedSongsThunk = createAsyncThunk(
    'songs/getLiked',
    async (user) => {  const songs = await service.getLiked(user)
        return songs
    }
);


export const likeSongThunk = createAsyncThunk(
    'songs/like',
    async (track) => {
        const serverTuit = await service.likeSong(track)
        return serverTuit
    });

export const dislikeSongThunk = createAsyncThunk(
    'songs/dislike',
    async (data) => {
        const user = data[0]
        const id = data[1]
        console.log("reached thunk level - dislike Song")
        console.log("The id that thunk recieved is " + id)

        console.log("The user that thunk recieved is " + user)

        const userJson = JSON.stringify(user)

        const idJson = JSON.stringify(id)

        console.log("The userJson is " + userJson)

        console.log("The idJson is " + idJson)



        const serverTuit = await service.dislikeSong(user,id)
        return serverTuit
    });
