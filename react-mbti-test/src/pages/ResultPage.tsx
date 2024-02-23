import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import KakaoShareButton from '../components/KakaoShareButton';
import { CatMBTI, MBTI } from '../data/result';

interface ResultProps {
    result: MBTI;
    isResult: boolean;
    resetResult: () => void;
}

export default function Result({ result, isResult, resetResult }: ResultProps) {
    const matchingCat = CatMBTI[result];
    const navigate = useNavigate();

    const handleTestClick = () => {
        navigate('/test/question');
        resetResult();
    };

    return (
        <Section className="resultPage">
            <Header />
            {isResult ? (
                <Wrap>
                    <Title>Your purrfect match is:</Title>
                    <Cat>{matchingCat}</Cat>
                    <ButtonWrap>
                        <RetryButton onClick={handleTestClick}>
                            Retry
                        </RetryButton>
                        <KakaoShareButton result={matchingCat} />
                    </ButtonWrap>
                </Wrap>
            ) : (
                <Wrap>
                    <Title>
                        Uh-oh... You need to take the test first to see the
                        result!
                    </Title>
                    <StartButton onClick={handleTestClick}>
                        Start Test
                    </StartButton>
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

const Button = styled.button`
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

const ButtonWrap = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 80px;
`;

const RetryButton = styled(Button)`
    width: 200px;
`;

export const ShareButton = styled(Button)`
    width: 200px;
`;

const StartButton = styled(Button)``;
