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

export interface FoodApiParams {
    name?: string;
    ingredients?: string;
    category?: string;
}

export interface FoodCardParams {
    id: number;
    name: string;
    ingredients: string;
    category: string;
    description: string;
    mainImgsrc: string;
}