import React from "react";
import "./home.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">

            <Link to="/home" className={`list-group-item-dark  list-group-item ${active === 'home'?'active':''}`}>
                <FontAwesomeIcon icon={(faHome)} className='me-1 text-white' />
                Home
            </Link>

            <Link to="/search" className={`list-group-item-dark list-group-item ${active === 'search'?'active':''}`}>
                <FontAwesomeIcon icon={(faSearch)} className='me-1 text-white' />
                Search
            </Link>

            <Link to="/details" className={`list-group-item-dark list-group-item ${active === 'details'?'active':''}`}>
                <FontAwesomeIcon icon={(faList)} className='me-1 text-white' />
                Details
            </Link>

            <Link to="/profile" className={`list-group-item-dark list-group-item ${active === 'profile'?'active':''}`}>
                <FontAwesomeIcon icon={(faUser)} className='me-1 text-white' />
                Profile
            </Link>

            <Link to="/liked" className={`list-group-item-dark list-group-item ${active === 'liked'?'active':''}`}>
                <FontAwesomeIcon icon={(faStar)} className='me-1 text-white' />
                Liked
            </Link>

            <Link to="/login" className={`list-group-item-dark list-group-item ${active === 'login'?'active':''}`}>
                <FontAwesomeIcon icon={(faSignInAlt)} className='me-1 text-white' />
                Login
            </Link>
        </div>
    );
};
export default NavigationSidebar;