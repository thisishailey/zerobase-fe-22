import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../data/api';

export default function Home() {
    const navigate = useNavigate();

    const { isPending, isSuccess, data } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    return (
        <>
            {isPending ? (
                <section className="loading">
                    <span>Loading...</span>
                </section>
            ) : (
                <>
                    <h1>
                        {isSuccess ? `Welcome, ${data.nickname}!` : 'Welcome!'}
                    </h1>
                    <button onClick={() => navigate('/edit')}>Edit</button>
                </>
            )}
        </>
    );
}
