import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        title: 'Post 1',
    },
    {
        id: 2,
        title: 'Post 2',
    },
    {
        id: 3,
        title: 'Post 3',
    },
];

export default function JavaScriptPage() {
    return (
        <>
            <hr />
            <h2>JavaScriptPage</h2>
            <ul>
                {data.map((e) => (
                    <li key={e.id}>
                        <Link to={e.id.toString()}>{e.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
