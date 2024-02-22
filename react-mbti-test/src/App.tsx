import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/MainPage';
import Test from './pages/TestPage';
import StartTest from './pages/test/StartTest';
import TakingTest from './pages/test/TakingTest';
import EndTest from './pages/test/EndTest';
import Result from './pages/ResultPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/test" element={<Test />}>
                    <Route index element={<StartTest />} />
                    <Route path="question" element={<TakingTest />} />
                    <Route path="end" element={<EndTest />} />
                </Route>
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
