import React from "react";
import "./Sidebar.css";
import SidebarOption from "./sidebarChoice";
import { useStateValue } from "./StateProvider";
import {FaHome} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Sidebar() {


    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://th.bing.com/th/id/OIP.ZOG9HBGo1eJnhBXGJwqhFwHaFj?pid=ImgDet&rs=1"
                alt=""
            />
            <SidebarOption Icon = "" option="Home" />
           <SidebarOption Icon = ""  option="Search" />
            <SidebarOption Icon = ""  option="Your Library"/>
            <SidebarOption Icon = ""  option="Liked Songs"/>
            <br />
        </div>
    );
}

export default Sidebar;