"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect, useCallback } from "react";
import { Category } from "@/type/types"

export default function Menubar() {
    let [categories, setCategories] = useState<Category[] | null>(null);
    let [selected, setSelected] = useState<Category | null>(null);

    useEffect(() => {

    }, [selected]);

    const handleClick = useCallback((category: Category) => {
        setSelected(category);

    }, []);

    return (
        <div className="menubar">
            {
                categories && (categories.length > 0) ? (
                    categories.map((category) => (
                        <div key={category.id}
                            className={selected && category.id == selected.id ? "selected" : ""}
                            onClick={() => { setSelected(category); }}>
                            <p>{category.name}</p>
                        </div>
                    ))
                ) : (
                    <p>wait for a sec...</p>
                )
            }
        </div>
    );
}