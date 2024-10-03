"use client"
import axios from "axios"
import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react";

//import "@/styles/globals.css"

export default function Menubar({ setFoodCategory }: { setFoodCategory: Dispatch<SetStateAction<string | null>> }) {
    const categories = ["밥", "국", "반찬", "후식", "찌개"];
    let [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="menubar">
            {
                categories.map((categoryName, i) => (
                    <div key={i}
                        className={i === selected ? "selected" : ""}
                        onClick={() => {
                            setSelected(i);
                            setFoodCategory(categoryName);
                        }}>
                        <p>{categoryName}</p>
                    </div>
                ))
            }
        </div>
    );
}