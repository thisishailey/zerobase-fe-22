// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TakingTest() {
    return (
        <Wrap>
            <Question>This is a question.</Question>
            <AnswerOptions>
                <Answer>This is the answer A.</Answer>
                <Answer>This is the answer B.</Answer>
            </AnswerOptions>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    height: calc(100vh - 78px);
    padding: 20px;
    background-color: #ffffff;
`;

const Question = styled.h2`
    padding: 20px;
`;

const AnswerOptions = styled.div`
    display: flex;
    gap: 40px;
`;

const Answer = styled.button`
    width: 400px;
    height: 250px;
    border-radius: 24px;
    font-family: 'Anta', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    background-color: #ff8911;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #ffbb64;
    }
`;
