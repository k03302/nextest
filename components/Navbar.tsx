"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState, useCallback, FormEvent } from "react";
import { useAuthStore } from '@/stores/useAuthStore';


export default function Navbar() {
    // useEffect(() => {
    //     window.addEventListener("scroll", (checkslide) => {
    //         console.log(checkslide);
    //         //debounce(checkslide);
    //     });
    // }, []);

    const router = useRouter();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

    const handleLogin = useCallback(() => {
        router.push('/login');
    }, []);

    const handleLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    const handleEnterFavorites = useCallback(() => {
        if (isLoggedIn) {
            router.push("/favorites");
        }
        else {
            router.push("/login");
        }
    }, [isLoggedIn])

    return (
        <div className="navbar">
            <img src="" alt="go back" onClick={() => { router.back(); }} />
            <p onClick={handleEnterFavorites}>즐겨찾기</p>
            {
                isLoggedIn ?
                    <p onClick={handleLogout}>Logout</p>
                    :
                    <p onClick={handleLogin}>Login</p>
            }
        </div >
    );
}