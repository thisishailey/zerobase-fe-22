import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
    const navigate = useNavigate();

    return (
        <>
            <button
                className="homeBtn"
                type="button"
                onClick={() => navigate('/')}
            >
                Home
            </button>
            <h1>BlogPage</h1>
        </>
    );
}
