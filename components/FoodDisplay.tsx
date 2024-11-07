"use client"

import axios from "axios"
import { useState, useEffect } from "react"
import FoodApi from "@/src/FoodApi"
import FoodCard from "./FoodCard"

const foodApi = new FoodApi();
foodApi.pageSize = 3;

export default function FoodDisplay({ foodCategory }: { foodCategory: string | null }) {
    let [foodList, setFoodList] = useState<React.JSX.Element[]>([]);

    useEffect(() => {
        async function fetchAndSetBody() {
            if (foodCategory === null) {
                setFoodList([])
                return;
            }

            setFoodList([<p>loading recipes...</p>]);

            await foodApi.process({
                category: foodCategory,
            }, (data: any[]) => {
                setFoodList(data.map((item: any, idx: number) => {
                    let description = "";
                    for (let i = 1; i <= 20; i++) {
                        description += item["MANUAL" + (i < 10 ? "0" : "") + i];
                    }


                    return <FoodCard params={{
                        id: idx,
                        name: item.RCP_NM,
                        ingredients: item.RCP_PARTS_DTLS,
                        category: item.RCP_PAT2,
                        description: description,
                        mainImgsrc: item.ATT_FILE_NO_MAIN,
                    }}>

                    </FoodCard>
                }));
            });
        }

        fetchAndSetBody();
    }, [foodCategory]);


    return (
        <div className="food-display">
            {foodList}
        </div >
    );
}