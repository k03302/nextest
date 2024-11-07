"use client"
import { useRouter } from "next/navigation"

import Menubar from "@/components/Menubar"
import FoodDisplay from "@/components/FoodDisplay";
import { useState } from "react"

export default function Home() {
    let [foodCategory, setFoodCategory] = useState<string | null>(null);
    const router = useRouter();
    return (
        <div>
            <Menubar setFoodCategory={setFoodCategory}></Menubar>
            <FoodDisplay foodCategory={foodCategory}></FoodDisplay>
        </div>
    )
}