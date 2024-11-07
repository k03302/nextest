import { useAuthStore } from '@/stores/useAuthStore';
const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
export default function FavButton() {
    return (
        <></>
    )
}