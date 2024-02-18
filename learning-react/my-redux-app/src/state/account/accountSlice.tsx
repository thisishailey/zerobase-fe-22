import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { FetchUserPayload, fetchUser } from './api';

export interface AccountState {
    loading: boolean;
    name: string;
    email: string;
}

const initialState: AccountState = {
    loading: false,
    name: '',
    email: '',
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        fetchUserRequest: (state) => {
            state.loading = true;
        },
        fetchUserSuccess: (state, action: PayloadAction<FetchUserPayload>) => {
            state.loading = false;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        fetchUserFailure: (state) => {
            state;
        },
    },
});

const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
    accountSlice.actions;

export function fetchUserThunk() {
    return async (dispatch: Dispatch) => {
        dispatch(fetchUserRequest());
        try {
            const res = (await fetchUser()) as FetchUserPayload;
            dispatch(fetchUserSuccess({ name: res.name, email: res.email }));
        } catch {
            dispatch(fetchUserFailure());
        }
    };
}

export default accountSlice.reducer;
