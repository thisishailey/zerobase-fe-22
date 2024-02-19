import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Home from './pages/Home';
import Edit from './pages/Edit';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="edit" element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
