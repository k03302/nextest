"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function MenuBar() {
    let [categories, setCategories] = useState();
    const router = useRouter();

    return (
        <div className="menubar">

        </div>
    );
}