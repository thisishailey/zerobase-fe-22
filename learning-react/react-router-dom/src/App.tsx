import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './components/MainPage';
import TechPage from './components/TechPage';
import JavaScriptPage from './components/TechJSPage';
import ReactPage from './components/TechReactPage';
import BlogPage from './components/BlogPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'tech'} element={<TechPage />}>
                    <Route path={'javascript'} element={<JavaScriptPage />} />
                    <Route path={'react'} element={<ReactPage />} />
                </Route>
                <Route path={'blog'} element={<BlogPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
