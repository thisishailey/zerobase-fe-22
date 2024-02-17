import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, FetchUserRes } from './modules/account/api';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    Account,
} from './modules/account/account';
import './index.css';

function App() {
    const account = useSelector((state: { account: Account }) => state.account);
    const { loading, name, email } = account;
    const dispatch = useDispatch();

    const handleClick = async () => {
        dispatch(fetchUserRequest());
        try {
            const res = (await fetchUser()) as FetchUserRes;
            dispatch(fetchUserSuccess({ name: res.name, email: res.email }));
        } catch {
            dispatch(fetchUserFailure());
        }
    };

    return (
        <div className="App">
            <button className="getInfoBtn" onClick={handleClick}>
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
