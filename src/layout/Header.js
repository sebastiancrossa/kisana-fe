import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = styled.nav`
    background-color: #FFF;
    box-shadow: 0px -7px 50px rgba(119, 119, 119, 0.4);
    height: 65px;
`;

const Title = styled(Link)`
    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 20px;
    color: #222B3E;
`;

const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 5px 0;
`;

const NavbarUl = styled.ul`
    display: flex;
`;

const NavBarUlLi = styled(Link)`
    list-style: none;
    margin: 0 10px;

    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 15px;
    color: #222B3E;
`;

const Header = (props) => {
    const { branding } = props;

    return (
        <Navbar>
            <Container>
                <Title to="/">{branding}</Title>
                <div>
                    <NavbarUl>
                        <NavBarUlLi to="/">IMAGE</NavBarUlLi>
                        <NavBarUlLi to="/">Sebastian Crossa</NavBarUlLi>
                    </NavbarUl>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;