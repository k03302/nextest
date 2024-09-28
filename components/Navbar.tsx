"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Navbar() {
    // useEffect(() => {
    //     window.addEventListener("scroll", (checkslide) => {
    //         console.log(checkslide);
    //         //debounce(checkslide);
    //     });
    // }, []);

    const router = useRouter();

    return (
        <div className="navbar">
            <img src="" alt="go back" onClick={() => { router.back(); }} />
            <p onClick={() => { router.push("/"); }}>MyRecipe</p>
            <p onClick={() => { router.push("/login"); }}>Login</p>
        </div>
    );
}