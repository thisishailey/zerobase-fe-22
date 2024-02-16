import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function useFetch(url: string) {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setSuccess(true);
                setData(res.data);
            })
            .catch((err) => setError(err));
    }, [url]);

    return { success, data, error };
}

export default function BlogPage() {
    const navigate = useNavigate();
    const [data, setData] = useState<Data[]>([]);

    // useEffect(() => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             setData(res.data);
    //         })
    //         .catch((err) => console.error(err));
    // }, []);

    const fetchInfo = useFetch('https://jsonplaceholder.typicode.com/posts');

    fetchInfo.success
        ? setData(fetchInfo.data!)
        : console.error(fetchInfo.error);

    function toggleBody(body: string, id: number) {
        const postElement = document.getElementById('post' + id.toString());
        let postBody = postElement?.querySelector('.postBody');
        if (postBody) {
            postElement!.removeChild(postBody);
        } else {
            postBody = document.createElement('p');
            postBody.classList.add('postBody');
            postBody.innerHTML = body;
            postElement?.appendChild(postBody);
        }
    }

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
            <div className="postWrap">
                {data.map((e) => (
                    <div
                        className="post"
                        id={'post' + e.id.toString()}
                        key={e.id}
                    >
                        <div
                            className="postTitle"
                            onClick={() => toggleBody(e.body, e.id)}
                        >
                            <span>{e.id}</span>
                            <h2>{e.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
