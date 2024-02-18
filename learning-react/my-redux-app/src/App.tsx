import { useAppSelector, useAppDispatch } from './state/hooks';
import { AccountState, fetchUserThunk } from './state/account/accountSlice';
import './index.css';

function App() {
    const account = useAppSelector((state: AccountState) => state);
    const dispatch = useAppDispatch();

    const handleGetUserInfo = () => {
        dispatch(fetchUserThunk());
    };

    return (
        <div className="App">
            <button className="getInfoBtn" onClick={handleGetUserInfo}>
                Get User Info
            </button>
            {account.loading ? (
                <p>loading...</p>
            ) : account.name && account.email ? (
                <>
                    <p>Name: {account.name}</p>
                    <p>Email: {account.email}</p>
                </>
            ) : null}
        </div>
    );
}

export default App;
