"use client"

import styles from '../styles/HouseButton.module.css';
import localFont from 'next/font/local';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';


const font = localFont({ src: '../fonts/Manrope.ttf' });
const placeholderWidth = 266;


interface HouseProps {
    id : number,
    address : string,
    images : Array<string>,
    price : number
}


export default function HouseButton({id, size} : {id : number, size : number}) {
    const [message, setMessage] = useState<null | HouseProps>(null);
    const [loading, setLoading] = useState(true);


    // Getting house info
    async function getHouse() {
        setMessage(null);
        setLoading(true);

        const response = await fetch('/api/house', {
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

    useEffect(() => { getHouse(); }, [id]);

    
    // Clicking on house button
    function handleClick() {
        if (message) {
            localStorage.setItem('houseId', `${id}`);

            redirect(`/house/?id=${id}`);
        }
    }


    return (
        <div className={`${styles.container} ${font.className}`} style={{width: size, height: size}} onClick={handleClick}>
            <img
                className={styles.image}
                src={message ? message.images[0] : '/house.png'}
                width ={message ? size          : String(placeholderWidth)}
                height={message ? size*0.825    : String(placeholderWidth)}
                alt="House"
            />

            <div className={styles.title}>
                {loading ? <>Загрузка...</> : (message ? message : JSON.parse('{}')).address}
            </div>
        </div>
    );
}