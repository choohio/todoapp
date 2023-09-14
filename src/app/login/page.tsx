'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false);
    



    const onLogin = async () => {
        try {
            const response = await axios.post('/api/users/login', user);
            console.log(response.data)
            toast.success('Cool');
            router.push('/profile')

        } catch (error: any) {
            console.log('Login failed', error.message)
        } finally {
            
        }

    }

    useEffect(() => {
        
    })
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-xl p-3">Login</h1>
            
                
                <label htmlFor="email">email 
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"/>
                
                <label htmlFor="password">password    
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="password" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"/>
                <button onClick={onLogin} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Login here</button>
            
            <Link href="/signup">Visit signup page</Link>

        </div>
    )
}