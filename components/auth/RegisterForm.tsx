'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';

export default function LoginForm() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [pwConfirm, setPwConfirm] = useState<string>('');

    const router = useRouter();
    const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

    const initForm = () => {
        setUsername("");
        setPassword("");
        setPwConfirm("");
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (password !== pwConfirm) {
            alert("비밀번호 불일치");
            initForm();
            return;
        }

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            setIsLoggedIn(true); // Update the login state
            router.push('/page');
        } else {
            alert('회원가입 실패');
            initForm();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>회원가입</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={pwConfirm}
                onChange={(e) => setPwConfirm(e.target.value)}
                required
            />
            <button type="submit">회원가입</button>
        </form>
    );
}