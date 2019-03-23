import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Navbar = styled.nav`
    background-color: #FFF;
    height: 65px;
`;

const Title = styled(Link)`
    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 25px;
    color: #222B3E;
`;

const Container = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;

    align-items: center;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
`;

const NavbarUl = styled.ul`
    display: flex;
    padding-left: 0px;
    margin-top: 18px;
    margin-right: 0px;
`;

const NavBarUlLi = styled(Link)`
    list-style: none;
    margin: 0 10px;

    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 15px;
    color: #333;
`;

const LoginButton = styled.button`
    background-color: #00aced;
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    color: white;

    display: block;
    margin: 0 auto;
`;

const LoginHeader = () => {
    return (
        <Navbar>
            <Container>
                <Title to="/login">Kisana</Title>
                <div>
                    <NavbarUl>
                        <NavBarUlLi>
                            <LoginButton>Sign in with Twitter</LoginButton>
                        </NavBarUlLi>
                    </NavbarUl>
                </div>
            </Container>
        </Navbar>
    )
}

export default LoginHeader;