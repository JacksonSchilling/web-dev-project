import React, {useState} from "react"


export default function TrackSearchResult({track, chooseTrack, likeSong}) {

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
        console.log(trackLike)
        likeSong(track)
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
                        <div>{track.title}</div>
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