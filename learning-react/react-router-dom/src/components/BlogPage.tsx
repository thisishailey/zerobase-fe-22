import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const toggleBody = (body: string, id: number) => {
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
};

export default function BlogPage() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const navigate = useNavigate();
    // const [data, setData] = useState<Data[]>();
    // const [error, setError] = useState<string>('');

    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then((res) => {
    //             setData(res.data);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             setError(err.message);
    //         });
    // }, []);

    const { data, error, isLoading } = useSWR(URL, fetcher);

    if (error)
        return (
            <>
                <h1>Failed To Load</h1>
                <p style={{ marginBottom: '30px' }}>{error.message}</p>
                <div className="errorBtn">
                    <button
                        className="homeBtn"
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        Home
                    </button>
                    <button
                        className="reloadBtn"
                        type="button"
                        onClick={() => location.reload()}
                    >
                        Reload
                    </button>
                </div>
            </>
        );

    if (isLoading)
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );

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
                    data.map((e: Data) => (
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
                    <div>Posts not found.</div>
                )}
            </div>
        </>
    );
}
