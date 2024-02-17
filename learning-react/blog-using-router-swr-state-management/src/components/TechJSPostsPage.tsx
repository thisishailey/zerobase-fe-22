import { useParams } from 'react-router-dom';

export default function JavaScriptPosts() {
    const params = useParams();

    return (
        <>
            <hr />
            <h3>JavaScript Post {params.id}</h3>
        </>
    );
}
