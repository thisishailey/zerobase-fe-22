import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function BlogPage() {
    const navigate = useNavigate();
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const data = await res.json();
            return data;
        }

        fetchData().then(
            (data) => {
                setData(data);
            },
            (err) => console.error(err)
        );
    }, []);

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
