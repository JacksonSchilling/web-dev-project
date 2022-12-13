import axios from "axios";
import * as util from "util";

const SONGS_API = 'http://localhost:4000/api/like'


export const getLiked = async (user) => {
    const uid = user._id
    const response = await axios.get(`${SONGS_API}/${uid}`);
    const tracks = response.data;
    return tracks;
}

export const dislikeSong = async (user,track) => {
    console.log("We have reached the dislike song ")
    const uid = user._id
    const response = await axios.delete(`${SONGS_API}/${uid}/${track}`)
    return response.data

}
export const likeSong = async (track) => {
    const response = await axios.post(SONGS_API, track)
    return response.data
}

