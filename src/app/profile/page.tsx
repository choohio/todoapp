'use client';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ProfilePage() {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')

        } catch (error: any) {
            console.log(error.message)
        }

    }
    return (
        <div className="flex flex-col">
            <h1>Profile</h1>
            <hr/>
            <p>Profile page</p>
            <button onClick={logout}>Log Out</button>

        </div>
    )
}