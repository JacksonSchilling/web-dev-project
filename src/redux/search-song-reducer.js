import {createSlice} from "@reduxjs/toolkit";
import {likeSongThunk, getLikedSongsThunk,dislikeSongThunk} from "../services/songs-thunk";


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
                                               [dislikeSongThunk.fulfilled]:
                                                   (state, { payload }) => {
                                                       state.loading = false
                                                       state.songs = state.songs.filter(t => t.trackId !== payload)

                                                       const js = JSON.stringify(state.songs)
                                                       console.log("The state.songs is equal to " + js)

                                                       const output = JSON.stringify(payload)
                                                       console.log("Payload is equal to " + output)

                                                   }
                                           },
                                           reducers: {
                                               dislikeSong(state, action) {
                                                   const index = state.findIndex(song => song.trackId === action.payload);
                                                   console.log("The index is " + index)
                                                   state.splice(index, 1);
                                               }
                                           }
                                   });
export const {dislikeSong} = likedSongSlice.actions;
export default likedSongSlice.reducer