'use client';

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from 'react-hot-toast';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: '',
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);


    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log('Signup success', response.data);
            toast.success('cool')
            router.push('/login');
        } catch (error: any) {
            console.log("Signup failed", error.message)
            toast.error(error.message);
        } finally {
            setLoading(false);        }

    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [user]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-xl p-3">{loading ? "Processing" : "SignUp"}</h1>
            
                <label htmlFor="username">username 
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="username" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="username"/>
                
                <label htmlFor="email">email 
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"/>
                
                <label htmlFor="password">password    
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="password" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"/>
                <button onClick={onSignup} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">{buttonDisabled ? "No signup" : "SignUp"}</button>
            <Link href="/login">Visit login page</Link>

        </div>
    )
}