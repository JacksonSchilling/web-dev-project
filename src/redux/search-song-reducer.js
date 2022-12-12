import {createSlice} from "@reduxjs/toolkit";
import {likeSongThunk, getLikedSongsThunk} from "../services/songs-thunk";


const initialState = {
    songs: [],
    loading: false
}

const likedSongSlice = createSlice({
                                       name: 'likedSongs',
                                       initialState,
                                       extraReducers: {
                                           [likeSongThunk.pending]:
                                               (state) => {
                                                   state.loading = true
                                                   state.songs = []
                                               },
                                           [likeSongThunk.fulfilled]:
                                               (state, action) => {
                                                   state.loading = false
                                                   state.songs.push(
                                                       action.payload)
                                               },
                                           [likeSongThunk.rejected]:
                                               (state) => {
                                                   state.loading = false
                                               },
                                           [getLikedSongsThunk.fulfilled]:
                                               (state, {payload}) => {
                                                   state.loading = false
                                                   state.songs = payload
                                               },
                                       },

                                   })

export default likedSongSlice.reducer