import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './liked-song-service'
import {deleteUser} from "../components/login/users-service";

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
        const serverTuit = await service.dislikeSong(user,id)
        return serverTuit
    });
