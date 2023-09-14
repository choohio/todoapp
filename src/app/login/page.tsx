'use client';
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })

    const onLogin = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-xl p-3">Login</h1>
            <form onSubmit={onLogin} className="flex flex-col items-center justify-center">
                
                <label htmlFor="email">email 
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"/>
                
                <label htmlFor="password">password    
                </label>
                <input className="p-2 m-2 border-gray-300 rounded-lg" id="password" type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"/>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Login here</button>
            </form>
            <Link href="/signup">Visit signup page</Link>

        </div>
    )
}