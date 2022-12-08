import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";

const CombinedHome = () => {
    return(
        <div className='row'>
            <div className="col-3">
                <NavigationSidebar/>
            </div>
            <div className="col-9">
                <Routes>
                    <Route path="/*"    element={<HomeComponent/>}/>
                </Routes>
            </div>

        </div>
    );
};
export default CombinedHome;