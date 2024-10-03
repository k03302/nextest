"use client"

import { Food, FoodCardParams } from "@/types/types"

export default function FoodCard({ params }: { params: FoodCardParams }) {
    return (<div key={params.id}>
        <h3>{params.name}</h3>
        <p>재료: {params.ingredients}</p>
        <p>매뉴얼: {params.description}</p>
        <img src={params.mainImgsrc} alt="" />
    </div>)
}