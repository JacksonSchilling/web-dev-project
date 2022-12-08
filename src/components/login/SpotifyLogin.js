import React from "react";

const AUTH_URL = "https://accounts.spotify.com/authorize?"
    + "client_id=bb235ac85acd4799bac266127f244d7f"
    + "&response_type=code"
    + "&redirect_uri=http://localhost:3000"
    + "&scope=streaming%20user-read-email%20user-read-private%20"
    + "user-library-read%20user-library-modify%20"
    + "user-read-playback-state%20user-modify-playback-state"

export default function SpotifyLogin() {
    return (
        <div className="container">
            <a className='btn btn-success btn-lg' href={AUTH_URL}>
                Login With Spotify
            </a>
        </div>
    )
}