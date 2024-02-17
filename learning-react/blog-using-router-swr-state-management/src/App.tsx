import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './components/MainPage';
import TechPage from './components/TechPage';
import JavaScriptPage from './components/TechJSPage';
import JavaScriptPosts from './components/TechJSPostsPage';
import ReactPage from './components/TechReactPage';
import BlogPage from './components/BlogPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path={'tech'} element={<TechPage />}>
                    <Route path={'javascript'} element={<JavaScriptPage />} />
                    <Route
                        path={'javascript/:id'}
                        element={<JavaScriptPosts />}
                    />
                    <Route path={'react'} element={<ReactPage />} />
                </Route>
                <Route path={'blog'} element={<BlogPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
