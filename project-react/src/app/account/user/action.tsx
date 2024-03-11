'use server';

import { getSession, logout } from '../../../lib';
import { redirect } from 'next/navigation';

export async function getCurrentUser() {
    const user = await getSession();
    return user;
}

export async function handleLogout() {
    await logout();
    redirect('/account/login');
}
