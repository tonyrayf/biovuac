'use client';

import styles from '@/app/styles/SignIn.module.css';
import localFont from 'next/font/local';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const font = localFont({ src: "../fonts/Manrope.ttf" });


export default function SignIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();


        async function handleSubmit(event: any) {
            setMessage('');
            
            event.preventDefault();

            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });
            
            const data = await response.json();
            
            setMessage(data.message);

            if (response.ok) router.push('/');
        };
        

    return (
        <html>
            <body style={{ margin: 0, padding: 0}}>
                <div className={`${styles.container} ${font.className}`}>
                    <div className={styles.loginBox}>
                        <h1> Авторизация </h1>


                        {/* Форма логин/пароль */}
                        <form onSubmit={handleSubmit}>
                            <label className={styles.label} htmlFor="login"> </label>
                            <input
                                className={styles.input}
                                placeholder='Логин'
                                type="text"
                                id="login"
                                name="login"
                                value={login}
                                onChange={(event) => setLogin(event.target.value)}
                                required
                            />
                            

                            <label className={styles.label} htmlFor="password">  </label>
                            <input
                                className={styles.input}
                                placeholder='Пароль'
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            
                            <button className={styles.button} type="submit"> Войти </button>
                        </form>


                        <div style={{ color: 'red' }}> {message ? message : ''} </div>
                    </div>
                </div>
            </body>
        </html>
    );
}