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
    //const uri = track.uri
    //const finId = uri.substring(14)
    const track1 = track._id

    const stringifyAttempt = JSON.stringify(track);

    console.log("The stringifyAttempt is " + JSON.stringify(track))

    console.log("The insepction is as follows ")
    console.log(util.inspect(track, false, null));


    console.log("Track._id attempt is " + track1)

    console.log("track attempt is " + track)

    console.log("THE FINAL USER ID BEING SENT IS " + uid)
    console.log("THE FINAL FINAL ID BEING SENT IS " + track)

    const response = await axios.delete(`${SONGS_API}/${uid}/${track}`)
    //location.reload()
    return response.data

}
export const likeSong = async (track) => {
    const response = await axios.post(SONGS_API, track)
    return response.data
}

