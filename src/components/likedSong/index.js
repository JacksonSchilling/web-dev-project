import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {dislikeSongThunk, getLikedSongsThunk} from "../../services/songs-thunk";
import TrackSearchResult from "../TrackSearchResult";
import {spotifyApi} from "../Dashboard";
import {useNavigate} from "react-router";
import axios from "axios";
import {dislikeSong, likeSong} from "../../services/liked-song-service";
import TrackLikedSong from "../TrackLikedSong";
import './home.css';

const LikedSong = () => {
    const {songs, loading} = useSelector(
        state => state.likedSong)

    const {currentUser} = useSelector((state) => state.users)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [album, setAlbum] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        dispatch(getLikedSongsThunk(currentUser)) //eslint-disable-line
                                                  // react-hooks/exhaustive-deps
    }, [songs])

    const dislikeSongCall = (track) => {
        const uri = track.uri
        const id = uri.substring(14)
        spotifyApi.getTrack(id)
            .then(function (data) {
                console.log(currentUser);
                const dislikeSongDetails = {
                    ...data.body,
                    user: currentUser
                }
                console.log('Track information for dislike method', data.body);
                //console.log("We are doing the initial sending the id of ",
                // id);
                const data1 = [currentUser, id]

                dispatch(dislikeSongThunk(data1))

                //LikedSong()

            }, function (err) {
                console.error(err);
            });

    }

    const viewDetailsOfTrack = (track) => {
        const albumId = track.albumId
        const albumImgUrl = track.albumUrl
        const albumTracks = []
        spotifyApi.getAlbumTracks(albumId, {})
            .then(function (data) {
                const album = data.body.items
                const numOfSongs = album.length
                album.map((item) => {
                    const artistName = item.artists[0].name
                    const type = item.artists[0].type
                    const songTitle = item.name
                    const trackId = item.id
                    const millis = item.duration_ms
                    const minutes = Math.floor(millis / 60000);
                    const seconds = ((millis % 60000) / 1000).toFixed(0);

                    albumTracks.push({
                                         'artistName': artistName,
                                         'type': type,
                                         'songTitle': songTitle,
                                         'trackId': trackId,
                                         'numOfSongsInAlbum': numOfSongs,
                                         'albumImg': albumImgUrl,
                                         'duration': minutes + ":" + (seconds
                                                                      < 10 ? '0'
                                                                           : '')
                                                     + seconds,
                                     })
                    console.log(type + " " + artistName + " " + songTitle + " ")
                    setAlbum(albumTracks)
                    setClicked(true)

                })
            }, function (err) {
                console.log('Something went wrong while fetching album!', err);
            });
    }

    const handleCloseDetails = () => {
        setAlbum([])
        setClicked(false)
        navigate('/api/liked-song')
        // window.location.reload()
    }

    return (
        currentUser !== null ?
        <div className="container">
            {!clicked && (
                <div className="row">
                    <div className="col-md-4 px-0">
                        <img src="/images/liked-song-logo.png" alt="liked logo"
                             className="img-fluid "/>
                    </div>
                    <div className="col">
                        <strong>PLAYLIST</strong>
                        <h2>Liked Songs</h2>
                        <p>Collection of Liked Songs</p>
                    </div>
                </div>
            )
            }
            <div>

                <div>
                    {
                        clicked && (
                                    <div className="row mb-4 mt-4">
                                        <div className="col-10">
                                            <h3>Details - Songs in this Album</h3>
                                        </div>
                                        <div className="col">
                                            <i className="bi bi-x-lg"
                                               onClick={handleCloseDetails}></i>
                                        </div>
                                        <div className="row border">
                                            <img className="ps-0 col-4"
                                                 src={album[0].albumImg}
                                                 alt={"album cover"}/>
                                            <div className="col-8 pt-5 mt-5 pb-0">
                                                <div className="pt-5 align-bottom">
                                                    <p>{album[0].type.toUpperCase()}</p>
                                                    <h1 className="fw-bolder">{album[0].artistName}</h1>
                                                    <span>{album[0].numOfSongsInAlbum} songs </span>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            clicked && album !== [] ? album.map((track) => (
                                                <div className="row border">
                                                    <div className="col 1">
                                                        <span>{track.songTitle}</span>
                                                    </div>
                                                    <div className="col 1">
                                                        <span>{track.duration}</span>
                                                    </div>
                                                    <div className="col 1">
                                                        <i className="bi bi-play-circle"></i>
                                                    </div>

                                                </div>

                                            )) : songs.map(track => (
                                                <TrackSearchResult
                                                    track={track}
                                                    key={track.uri}
                                                    chooseTrack={null}
                                                    likeSong={null}
                                                    chooseTrack={viewDetailsOfTrack}
                                                />
                                            ))
                                        }

                                    </div>

                                )
                    }

                    {clicked &&
                     album !== [] ? album.map((track) => (
                        <div className="row">

                        </div>
                    )) : songs.map(track => (
                        <TrackLikedSong
                            track={track}
                            key={track.uri}
                            chooseTrack={null}
                            likeSong={likeSong}
                            dislikeSong={dislikeSongCall}
                            chooseTrack={viewDetailsOfTrack}
                        />

                    ))}

                </div>


            </div>


        </div> :
        <div>
            <div className="mt-3 float-left move-left">
                <h3>Popular songs</h3>
                <div>
                    <img width={170} alt={''} src="../images/sos-album.jpeg"/>
                </div>

                <div className="text-white fw-bold mt-2">
                    Nobody Gets Me
                </div>

                <div className="fg-grey mt-2">
                    SZA
                </div>
            </div>

            <div className="mt-5 float-left position-relative ms-5 move-album-down">
                <div>
                    <img width={170} alt={''} src="../images/midnights-album.jpg"/>
                </div>

                <div className="text-white fw-bold mt-2">
                    Anti-Hero
                </div>

                <div className="fg-grey mt-2">
                    Taylor Swift
                </div>
            </div>
            <div className="mt-5 float-left position-relative ms-5 move-album-down">
                <div>
                    <img width={170} alt={''} src="../images/unholy-album.png"/>
                </div>

                <div className="text-white fw-bold mt-2">
                    Unholy (feat. Kim Petras)
                </div>

                <div className="fg-grey mt-2">
                    Sam Smith, Kim Petras
                </div>
            </div>
            <div className="mt-5 float-left position-relative ms-3 move-album-down">
                <div>
                    <img width={170} alt={''} src="../images/cuff-it-album.png"/>
                </div>

                <div className="text-white fw-bold mt-2">
                    CUFF IT
                </div>

                <div className="fg-grey mt-2">
                    Beyoncé
                </div>
            </div>
            <div className="float-end position-relative ms-5 mt-4 move-album-up move-album-right">
                <div>
                    <img width={170} alt={''} src="../images/creepin-album.jpg"/>
                </div>

                <div className="text-white fw-bold mt-2">
                    Creepin'
                </div>

                <div className="fg-grey mt-2">
                    Metro Boomin
                </div>
            </div>
        </div>
    )
}

export default LikedSong