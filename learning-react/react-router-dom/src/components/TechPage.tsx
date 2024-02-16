import { Link, Outlet } from 'react-router-dom';

export default function TechPage() {
    return (
        <>
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
