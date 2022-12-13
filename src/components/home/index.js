import React from "react";
import './home.css';
import userList from "./user-list";
import userItem from "./user-item";

const Home = () => {
    return (
        <>
        <div>
            <h3>Popular songs</h3>
                <div className="mt-3 float-left">
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

            <div className="mt-3 float-left position-relative ms-5">
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
            <div className="mt-3 float-left position-relative ms-5">
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
            <div className="mt-3 float-left position-relative ms-5">
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
            <div className="float-left position-relative ms-5 mt-3">
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
                <div className='float-start position-relative mt-3'>

                    <h3>System Users</h3>
                </div>
            <userItem/>
        </div>
        </>
    )
};

export default Home;