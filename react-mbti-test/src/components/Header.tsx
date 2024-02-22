import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    return (
        <NavHeader>
            <Link to={'/'}>
                <Heading>MeowBTI Test</Heading>
            </Link>
            <Nav>
                <Link to={'/test'}>
                    <NavItem>Test</NavItem>
                </Link>
                <Link to={'/result'}>
                    <NavItem>Result</NavItem>
                </Link>
            </Nav>
        </NavHeader>
    );
}

const NavHeader = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 54px;
    color: #fefbf6;
    background-color: #fba834;
`;

const Heading = styled.h1`
    font-family: 'Anta', sans-serif;
    font-size: 30px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 30px;
`;

const NavItem = styled.div`
    width: 110px;
    padding: 6px;
    border: 1.2px solid #ffffff;
    border-radius: 6px;
    font-family: 'Anta', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    transition: all 300ms;

    &:hover {
        border-color: #ffbb64;
        color: #ffbb64;
        background-color: #ffffff;
    }
`;
