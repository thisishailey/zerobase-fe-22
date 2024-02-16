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
    const [data, setData] = useState<Data[]>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(url, { signal: controller.signal })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => setError(err))
            .finally(() => controller.abort());
    }, [url]);

    return { data, error };
}

export default function BlogPage() {
    const navigate = useNavigate();
    const [data, setData] = useState<Data[]>();
    const [error, setError] = useState<string>('');

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });
    }, []);

    // const { data, error } = useFetch(
    //     'https://jsonplaceholder.typicode.com/posts'
    // );

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
                {data ? (
                    data.map((e) => (
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
                    ))
                ) : (
                    <div>{error}</div>
                )}
            </div>
        </>
    );
}
