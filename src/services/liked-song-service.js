import axios from "axios";

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
    //const uri = track.uri
    //const finId = uri.substring(14)
    const track1 = track._id
    console.log("This is the track id thats being tested " + track1)
    const finId = '4RYTi6AJnzLu6qYtkjZGvZ'
    console.log("THE FINAL USER ID BEING SENT IS " + uid)
    console.log("THE FINAL FINAL ID BEING SENT IS " + finId)
    const response = await axios.delete(`${SONGS_API}/${uid}/${finId}`)
    return response.data
}
export const likeSong = async (track) => {
    const response = await axios.post(SONGS_API, track)
    return response.data
}