import { useAppSelector, useAppDispatch } from './state/hooks';
import { AccountState, fetchUserThunk } from './state/account/accountSlice';
import './index.css';

function App() {
    const loading = useAppSelector((state: AccountState) => state.loading);
    const name = useAppSelector((state: AccountState) => state.name);
    const email = useAppSelector((state: AccountState) => state.email);

    const dispatch = useAppDispatch();

    const handleGetUserInfo = () => {
        dispatch(fetchUserThunk());
    };

    return (
        <div className="App">
            <button className="getInfoBtn" onClick={handleGetUserInfo}>
                Get User Info
            </button>
            {loading ? (
                <p>loading...</p>
            ) : name && email ? (
                <>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </>
            ) : null}
        </div>
    );
}

export default App;
