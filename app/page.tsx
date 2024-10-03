"use client"

import Menubar from "@/components/Menubar"
import FoodDisplay from "@/components/FoodDisplay";
import { useState } from "react"

export default function Home() {
    let [foodCategory, setFoodCategory] = useState<string | null>(null);

    return (
        <div>
            <Menubar setFoodCategory={setFoodCategory}></Menubar>
            <FoodDisplay foodCategory={foodCategory}></FoodDisplay>
        </div>
    )
}