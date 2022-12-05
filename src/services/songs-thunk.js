import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './liked-song-service'

export const getLikedSongsThunk = createAsyncThunk(
    'songs/getLiked',
    async () => await service.getLiked());



export const likeSongThunk = createAsyncThunk(
    'songs/like',
    async (track) => {
        console.log("reached thunk level")
        const serverTuit = await service.likeSong(track)
        return serverTuit
    });

