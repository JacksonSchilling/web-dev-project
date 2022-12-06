import React from "react";
import {useNavigate} from "react-router";

const Details = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="row border">
                <img className="ps-0 col-4" src ="/images/whenigethome.png" alt={"album cover"}/>
                <div className="col-8 pt-5 mt-5 pb-0">
                    <div className="pt-5 align-bottom">
                        <p>Album</p>
                        <h1 className="fw-bolder">When I Get Home </h1>
                        <span className="fw-semibold"><img height="50" className="rounded-circle" src="/images/solange.webp" alt = "artist image"/> Solange</span>
                        <span>• 2019 • 19 songs, </span>
                        <span className="text-muted">39 min, 2 sec</span>
                    </div>
                </div>
              </div>
                <div className="row border">
                    <div className="col 1">
                        <span>Thing I Imagined</span>
                    </div>
                    <div className="col 1">
                        <span>1:59</span>
                    </div>
                    <div className="col 1">
                        <i className="fa fa-play"></i>
                        <i className="fa fa-pause"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
                <div className="row border">
                    <div className="col 1">
                        <span>Down With the Clique</span>
                    </div>
                    <div className="col 1">
                        <span>3:42</span>
                    </div>
                    <div className="col 1">
                        <i className="fa fa-play"></i>
                        <i className="fa fa-pause"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
                <div className="row border">
                    <div className="col 1">
                        <span>Way to the Show</span>
                    </div>
                    <div className="col 1">
                        <span>2:55</span>
                    </div>
                    <div className="col 1">
                        <i className="fa fa-play"></i>
                        <i className="fa fa-pause"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
        </div>
    )
}
export default Details