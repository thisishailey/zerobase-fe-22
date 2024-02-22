import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

export default function Main() {
    return (
        <Section className="mainPage">
            <Header />
            <Title>Find the cat of your destiny!</Title>
            <ImageBackground>
                <Image></Image>
            </ImageBackground>
            <Description>
                Discover the perfect cat that matches your personality <br />
                based on the MBTI(Myers–Briggs Type Indicator) personality
                types.
            </Description>
            <StartTest>
                <Link to={'test'}>
                    <StartTestButton>TAKE THE TEST NOW!</StartTestButton>
                </Link>
            </StartTest>
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
`;

const Title = styled.h2`
    width: 100%;
    padding: 60px 0;
    font-size: 48px;
    text-align: center;
    color: #ff8911;
    background-color: #ffffff;
`;

const ImageBackground = styled.div`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(#ffffff, #ffbb64);
`;

const Image = styled.div`
    width: 480px;
    height: 480px;
    border-radius: 240px;
    margin: 20px 0;
    background-image: url(/cat.png);
    background-position: 60% 40%;
`;

const Description = styled.div`
    width: 100%;
    padding: 100px;
    font-size: 30px;
    font-weight: 600;
    color: #fefbf6;
    background-color: #ffbb64;
`;

const StartTest = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 0 200px;
    background-color: #ffbb64;
`;

const StartTestButton = styled.button`
    width: 300px;
    height: 60px;
    border-radius: 12px;
    font-family: 'Anta', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #ffbb64;
    background-color: #ffffff;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #ff8911;
    }
`;
