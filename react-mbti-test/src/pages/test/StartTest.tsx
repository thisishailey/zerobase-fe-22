import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StartProps {
    resetResult: () => void;
}

export default function StartTest({ resetResult }: StartProps) {
    return (
        <Wrap>
            <Link to={'question'}>
                <StartButton onClick={resetResult}>Start Test</StartButton>
            </Link>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20% 0;
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
