import Header from "./components/headfoot/Header";
import Footer from "./components/headfoot/Footer";

import SearchBar from "./components/SearchBar";

import HouseButton from "./components/HouseButton";

import localFont from "next/font/local";
import styles from "./styles/HomePage.module.css";

const font = localFont({ src: './fonts/Manrope.ttf' });


export default function HomePage() {
    return (
        <html>
            <body className={font.className} style={{margin: 0, padding: 0, fontSize: '22px'}}>
                <Header />

                <SearchBar />

                <div style={{margin: '20px 40px'}}>Рекомендации:</div>
                
                <div className={styles.houseButtons}>
                    <HouseButton id={0} />
                    <HouseButton id={1} />
                    <HouseButton id={2} />
                </div>

                <Footer />
            </body>
        </html>
    );
}