import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getUser } from '../data/api';

export default function Home() {
    const navigate = useNavigate();

    const { isSuccess, data } = useSuspenseQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    return (
        <>
            <h1>{isSuccess ? `Welcome, ${data.nickname}!` : 'Welcome!'}</h1>
            <button onClick={() => navigate('/edit')}>Edit</button>
        </>
    );
}
