import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import './index.css';
import Home from './pages/Home';
import Edit from './pages/Edit';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            gcTime: 24 * (60 * 60),
        },
    },
});

function Pending() {
    return (
        <section className="loading">
            <span>Loading...</span>
        </section>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Pending />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="edit" element={<Edit />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
