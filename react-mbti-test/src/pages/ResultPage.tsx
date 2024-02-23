import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { CatMBTI, MBTI } from '../data/result';

interface ResultProps {
    result: MBTI;
    isResult: boolean;
    resetResult: () => void;
}

export default function Result({ result, isResult, resetResult }: ResultProps) {
    const matchingCat = CatMBTI[result];
    return (
        <Section className="resultPage">
            <Header />
            {isResult ? (
                <Wrap>
                    <Title>Your purrfect match is:</Title>
                    <Cat>{matchingCat}</Cat>
                </Wrap>
            ) : (
                <Wrap>
                    <Title>
                        Uh-oh... You need to take the test first to see the
                        result!
                    </Title>
                    <Link to={'/test/question'}>
                        <StartButton onClick={resetResult}>
                            Start Test
                        </StartButton>
                    </Link>
                </Wrap>
            )}
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    width: 100%;
    padding: 80px 0;
    font-size: 36px;
    text-align: center;
    color: #ffffff;
`;

const Cat = styled.h3`
    width: 100%;
    padding: 40px 0;
    font-family: 'Anta', sans-serif;
    font-size: 48px;
    text-align: center;
    color: #ffffff;
`;

const StartButton = styled.button`
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
