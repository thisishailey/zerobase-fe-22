import { FetchUserRes } from './api';

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = ({ name, email }: FetchUserRes) => ({
    type: FETCH_USER_SUCCESS,
    payload: { name, email },
});

export const fetchUserFailure = () => ({
    type: FETCH_USER_FAILURE,
});

export const fetchUserThunk = () => {};

export interface Account {
    loading: boolean;
    name: string;
    email: string;
}

interface Action {
    type: string;
    payload?: FetchUserRes;
}

const initialState: Account = {
    loading: false,
    name: '',
    email: '',
};

export default function account(state = initialState, action: Action) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                name: action.payload?.name,
                email: action.payload?.email,
            };
        case FETCH_USER_FAILURE:
            return initialState;

        default:
            return state;
    }
}
