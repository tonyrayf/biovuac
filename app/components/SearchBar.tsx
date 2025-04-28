'use client'


import { useState } from 'react';
import styles from '@/app/styles/SearchBar.module.css';
import localFont from 'next/font/local';


const font = localFont({ src : '../fonts/Manrope.ttf' });


export default function SearchBar() {
    const [location, setLocation]   = useState<string>('');
    const [date, setDate]           = useState<string>('');
  
    
    function handleSearch() {
        console.log(`Searching for ${location} on ${date}`);
    };
    

    return (
        <div className={`${styles.searchBar} ${font.className}`}>
            <div className={styles.container} />


             {/* Куда */}
            <img src='/map.png' width='45px' height='45px' />
            
            <div style={{margin: 'auto 0px'}}> Куда </div>

            <input
                type='text'
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className={styles.inputWhere}
            />


            {/* Когда */}
            <img src='/table.png' width='45px' height='45px' />
            
            <div style={{margin: 'auto 0px'}}> Когда </div>

            <input
                type='date'
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className={styles.inputWhen}
            />


            {/* Искать */}
            <button onClick={handleSearch} className={`${styles.button} ${font.className}`}>
                Искать
            </button>
        </div>
    );
  };