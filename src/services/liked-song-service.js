import axios from "axios";

const SONGS_API = 'http://localhost:4000/api/like'


export const getLiked = async () => {
    const response = await axios.get(SONGS_API);
    const tracks = response.data;
    return tracks;
}


export const likeSong = async (track) => {
    console.log("reached service level")
    const response = await axios.post(SONGS_API, track)
    return response.data
}

