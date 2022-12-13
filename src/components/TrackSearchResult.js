import React, {useState} from "react"
import "./TrackSearchResult.css"



export default function TrackSearchResult({track, chooseTrack, likeSong, dislikeSong}) {

    track = {
        ...track,
        liked: false

    }

    const [trackLike, setTrackLike] = useState(false)

    function handlePlay() {
        chooseTrack(track)
    }

    const handleLike = () => {

        setTrackLike(!trackLike)
        track.liked = trackLike
        // console.log(trackLike)
        if (track.liked === false) {
            likeSong(track)
        } else {
            // console.log("Disliking the song with track info: ")
            console.log("Dislike the song now")
            // console.log(track)
            dislikeSong(track)
        }
    }

    const getLike = () => {
        console.log("The liked status for track ")
        console.log(track)
        console.log(track.liked)
    }

    return (
        <div className="row">
            <div className="col-10">
                <div
                    className="d-flex m-2 align-items-center"
                    style={{cursor: "pointer"}}
                    onClick={handlePlay}
                >
                    <img src={track.albumUrl}
                         style={{height: "64px", width: "64px"}}/>
                    <div className="ml-3">
                        <div className="white-text">{track.title}</div>
                        <div className="text-muted">{track.artist}</div>
                    </div>
                </div>
            </div>
            <div className="col">
                {
                    !trackLike &&
                    <i className="bi bi-heart" onClick={handleLike}></i>
                }
                {
                    trackLike &&
                    <i className="bi bi-heart-fill" onClick={handleLike}></i>
                }
            </div>
        </div>

    )
}
