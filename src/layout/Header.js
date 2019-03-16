import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { branding } = props;

    return (
        <nav>
            <div className="container">
                <Link to="/" className="navbar-branding">{branding}</Link>
            </div>
        </nav>
    );
}

export default Header;