import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './pages/MainPage';
import Test from './pages/TestPage';
import Result from './pages/ResultPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="test" element={<Test />} />
                <Route path="result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
