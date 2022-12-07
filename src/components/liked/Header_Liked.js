import React from "react";
import "./Header_Liked.css";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function Header_Liked({userName}) {

    return(

        <div className = "header_liked">
        <div className="header_left">
            UserName
        </div>
        <div className="header_right">
            Test
        </div>
        </div>
    )

}

export default Header_Liked;
