import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import sidebarChoice from "./sidebarChoice";
import Sidebar from "./sidebar";
import Body from "./Body";
import Header_Liked from "./Header_Liked";
import SidebarChoice from "./sidebarChoice";
function App() {
  return (
    <div className="App">
        <div className="player">
            <div className="player_body">
        <Sidebar/>
        <Body/>
            </div>
        </div>

    </div>
  );
}

export default App;
