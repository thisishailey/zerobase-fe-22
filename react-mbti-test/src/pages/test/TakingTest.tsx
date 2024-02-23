import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Questions } from '../../data/questionaire';

interface TestProps {
    updateResult: (newResult: string) => void;
}

export default function TakingTest({ updateResult }: TestProps) {
    const data = Questions;
    const [question, setQuestion] = useState(data[0]);
    const [progress, setProgress] = useState(0);
    const answerRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();

    const handleAnswerClick = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.tagName !== 'BUTTON') return;

        if (target === answerRef.current) {
            updateResult(question.questionType[0]);
        } else {
            updateResult(question.questionType[1]);
        }

        setProgress(Math.round((question.id / data.length) * 100));

        if (question.id === data.length) {
            setTimeout(() => {
                navigate('/test/end');
            }, 1000);
        } else {
            setQuestion(data[question.id]);
        }
    };

    return (
        <Wrap>
            <ProgressBarWrap>
                <ProgressBar striped={true} animated={true} now={progress} />
            </ProgressBarWrap>
            <Question>{question.question}</Question>
            <AnswerOptions onClick={handleAnswerClick}>
                <Answer ref={answerRef}>{question.answerA}</Answer>
                <Answer>{question.answerB}</Answer>
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
    background-color: #fffdf5;
`;

const ProgressBarWrap = styled.div`
    position: absolute;
    top: 78px;
    width: 100%;
    height: 10px;
`;

const Question = styled.h2`
    padding: 20px 14%;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    color: #ff8911;
`;

const AnswerOptions = styled.div`
    display: flex;
    gap: 40px;
`;

const Answer = styled.button`
    width: 400px;
    height: 250px;
    padding: 30px;
    border-radius: 24px;
    font-family: 'Anta', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    background-color: #fba834;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #ff8911;
    }
`;
