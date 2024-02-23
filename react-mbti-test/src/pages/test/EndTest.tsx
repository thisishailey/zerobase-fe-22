import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../index.css';

export default function EndTest() {
    const navigate = useNavigate();
    const loaderRef = useRef<HTMLDivElement>(null);

    const handleResultClick = (event: React.MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        target.style.display = 'none';
        loaderRef.current!.style.display = 'flex';
        setTimeout(() => {
            navigate('/result');
        }, 3000);
    };

    return (
        <Wrap>
            <EndButton onClick={handleResultClick}>View the Result!</EndButton>
            <Loader ref={loaderRef}>
                Loading...
                <span className="loader"></span>
            </Loader>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20% 0;
`;

const EndButton = styled.button`
    width: 300px;
    height: 60px;
    border-radius: 12px;
    font-family: 'Anta', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #ffbb64;
    background-color: #ffffff;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #ff8911;
    }
`;

const Loader = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    width: 100%;
    font-family: 'Anta', sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: #ffffff;
`;
