import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './liked-song-service'

export const getLikedSongsThunk = createAsyncThunk(
    'songs/getLiked',
    async () => {  const songs = await service.getLiked()
        console.log(songs)
        return songs
    }
);



export const likeSongThunk = createAsyncThunk(
    'songs/like',
    async (track) => {
        console.log("reached thunk level")
        const serverTuit = await service.likeSong(track)
        return serverTuit
    });

