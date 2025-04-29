'use client';

import Header from "./components/headfoot/Header";
import Footer from "./components/headfoot/Footer";

import SearchBar from "./components/SearchBar";

import HouseButton from "./components/HouseButton";

import localFont from "next/font/local";
import styles from "./styles/HomePage.module.css";

import { useState } from "react";
import NavigationButton from "./components/NavigationButton";


const font = localFont({ src: './fonts/Manrope.ttf' });


export default function HomePage() {
    const [currentPage, setPage] = useState<number>(0);
    

    function handleClick(page: number) {
        setPage(page);
    }
    

    return (
        <html>
            <body className={font.className} style={{margin: 0, padding: 0, fontSize: '22px'}}>
                <Header />


                <SearchBar />

                
                {/* Recommended houses */}
                <div style={{marginBottom: '20px', textAlign: 'center'}}>Рекомендации:</div>
                
                <div className={styles.houseButtons}>
                    <HouseButton id={0 + 3*currentPage} size={400}/>
                    <HouseButton id={1 + 3*currentPage} size={450}/>
                    <HouseButton id={2 + 3*currentPage} size={400}/>
                </div>


                {/* Navigation */}
                <div className={styles.navigation}>
                    <NavigationButton page={0} currentPage={currentPage} onClick={() => handleClick(0)} />
                    <NavigationButton page={1} currentPage={currentPage} onClick={() => handleClick(1)} />
                    <NavigationButton page={2} currentPage={currentPage} onClick={() => handleClick(2)} />
                </div>


                <Footer />
            </body>
        </html>
    );
}