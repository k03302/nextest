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