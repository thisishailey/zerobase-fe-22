import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function TechPage() {
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
            <Link to={''}>
                <h1>TechPage</h1>
            </Link>
            <ul>
                <Link to={'javascript'}>
                    <li>JavaScript</li>
                </Link>
                <Link to={'react'}>
                    <li>React</li>
                </Link>
            </ul>
            <Outlet />
        </>
    );
}
