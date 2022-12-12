import axios from "axios";

const SONGS_API = 'http://localhost:4000/api/like'


export const getLiked = async (user) => {
    const uid = user._id
    const response = await axios.get(`${SONGS_API}/${uid}`);
    const tracks = response.data;
    return tracks;
}


export const likeSong = async (track) => {
    const response = await axios.post(SONGS_API, track)
    return response.data
}

