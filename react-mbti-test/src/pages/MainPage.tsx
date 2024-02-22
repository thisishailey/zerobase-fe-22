import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
    return (
        <Section className="mainPage">
            <Header>
                <Link to={''}>
                    <Heading>MeowBTI Test</Heading>
                </Link>
                <Nav>
                    <Link to={'test'}>
                        <NavItem>Take the Test</NavItem>
                    </Link>
                    <Link to={'result'}>
                        <NavItem>View Result</NavItem>
                    </Link>
                </Nav>
            </Header>
            <Title>Find the cat of your destiny!</Title>
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 54px;
    color: #fefbf6;
    background: #fba834;
`;

const Heading = styled.h1`
    font-size: 30px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 36px;
    font-size: 20px;
    font-weight: 500;
`;

const NavItem = styled.span`
    padding: 10px;
`;

const Title = styled.h2`
    width: 100%;
    padding: 40px;
    font-size: 40px;
    text-align: center;
    color: #ff8911;
`;
