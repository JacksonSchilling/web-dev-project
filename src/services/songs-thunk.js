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

