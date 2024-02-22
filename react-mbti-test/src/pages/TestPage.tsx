import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

export default function Test() {
    return (
        <Section className="testPage">
            <Header />
            <Outlet />
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
`;
