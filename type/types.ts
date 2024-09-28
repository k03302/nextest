export interface Category {
    id: number;
    name: string;
}

export interface Food {
    id: number;
    name: string;
    category: Category;
}

export interface Recipe {
    id: number;
    name: string;
    food: Food
}