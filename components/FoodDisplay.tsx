"use client"

import axios from "axios"
import { useState, useEffect } from "react"
import FoodApi from "@/utils/foodapi"

const foodApi = new FoodApi();
foodApi.pageSize = 3;

export default function FoodDisplay({ foodCategory }: { foodCategory: string | null }) {
    let [body, setBody] = useState(<></>);

    useEffect(() => {
        if (foodCategory === null) return;

        foodApi.process({
            category: foodCategory,
        }, (data: JSON) => {

        });
    }, [foodCategory]);


    return (
        <div className="food-display">
            {body}
        </div >
    );
}