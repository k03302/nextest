import { create } from 'zustand';

interface FavState {
    favList: string[];
    setFavList: (_favList: string[]) => void;
}

export const useFavState = create<FavState>((set) => ({
    favList: [],
    setFavList: (_favList) => set({ favList: _favList }),
}));