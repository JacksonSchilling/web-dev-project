import React from "react";
import './home.css';
import userList from "./user-list";

const Home = () => {
    return (
        <>
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
            <userList/>
        </>
    )
};

export default Home;