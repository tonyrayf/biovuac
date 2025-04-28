import styles from '@/app/styles/headfoot/HeaderButton.module.css';
import localFont from 'next/font/local';


const font = localFont({ src : '../../fonts/Manrope.ttf' });


interface Props
{
    name: string
}

export default function Button({name} : Props) {
    return (
        <div className={`${styles.button} ${font.className}`}>
            {name}
        </div>
    );
}