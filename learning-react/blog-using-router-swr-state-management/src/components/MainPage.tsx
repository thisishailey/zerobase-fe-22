import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <>
            <h1>MainPage</h1>
            <div className="links">
                <Link to={'blog'}>Blog</Link> | <Link to={'tech'}>Tech</Link>
            </div>
        </>
    );
}
