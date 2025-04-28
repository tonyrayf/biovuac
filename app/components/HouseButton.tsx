"use client";

import styles from '../styles/HouseButton.module.css';
import localFont from 'next/font/local';
import { useState, useEffect } from 'react';
import getImageWidth from './GetImageWidth';


const font = localFont({ src: '../fonts/Manrope.ttf' });
const placeholderWidth = getImageWidth('/house.png');


interface HouseProps {
    id : number,
    address : string,
    image : string,
    price : number
}


export default function HouseButton({ id }: { id: number }) {
    const [message, setMessage] = useState<null | HouseProps>(null);
    const [loading, setLoading] = useState(true);


    // Getting house info
    async function getHouse() {
        const response = await fetch('http://localhost:3000/api/house', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const data = await response.json();
        setMessage(JSON.parse(data.message));

        
        if (response.ok) setLoading(false);
    }

    useEffect(() => { getHouse(); }, []);

    
    // Clicking on house button



    return (
        <div className={`${styles.container} ${font.className}`}>
            <div className={styles.button}>
                <img
                    src={message ? message.image : '/house.png'}
                    height={message ? 400 : Number(placeholderWidth)}
                    alt="House"
                />
            </div>

            {loading ? <>Загрузка...</> : (message ? message : JSON.parse('{}')).address}
        </div>
    );
}