import './Starter.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import sidebarChoice from "./sidebarChoice";
import Sidebar from "./sidebar";
import Body from "./Body";
function Starter() {
    return (
        <div className="starter">
            <div className="player">
                <div className="player_body">

                    {/*<Sidebar/>*/}
                    <Body/>
            </div>
                </div>
        </div>

    );
}
export default Starter;