import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    max-width: 1180px;
    height: 7vh;
    margin: 0 auto;
`;

const NavLists = styled.ul`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
`;

const NavList = styled.li`
`;

const NavLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: black;
    font-weight: ${({ path }) => !path ? "bold" : "none"};
`;

function Navbar() {
    const homePath = useMatch("/");
    const repoPath = useMatch("/repos");

    return (
        <Header>
            <NavLists>
                <NavList>
                    <NavLink to="/" path={!homePath}> Home </NavLink>
                </NavList>
                <NavList>
                    <NavLink to="/repos" path={!repoPath}> Repositories </NavLink>
                </NavList>
            </NavLists>
        </Header>
    );
}

export default Navbar;