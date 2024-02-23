import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/MainPage';
import Test from './pages/TestPage';
import StartTest from './pages/test/StartTest';
import TakingTest from './pages/test/TakingTest';
import EndTest from './pages/test/EndTest';
import Result from './pages/ResultPage';
import { listMBTI, MBTI } from './data/result';

export default function App() {
    const [result, setResult] = useState('');
    const [isResult, setIsResult] = useState(false);

    const handleStartClick = () => {
        setResult('');
        setIsResult(false);
    };
    const handleAnswerClick = (newResult: string) => {
        setResult(result + newResult);
    };

    useEffect(() => {
        if (listMBTI.includes(result)) setIsResult(true);
    }, [result]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/test" element={<Test />}>
                    <Route
                        index
                        element={<StartTest resetResult={handleStartClick} />}
                    />
                    <Route
                        path="question"
                        element={
                            <TakingTest updateResult={handleAnswerClick} />
                        }
                    />
                    <Route path="end" element={<EndTest />} />
                </Route>
                <Route
                    path="/result"
                    element={
                        <Result
                            result={result as MBTI}
                            isResult={isResult}
                            resetResult={handleStartClick}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
