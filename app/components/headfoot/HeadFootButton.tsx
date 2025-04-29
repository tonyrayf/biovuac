import styles from '@/app/styles/headfoot/HeadFootButton.module.css';
import localFont from 'next/font/local';
import Link from 'next/link';


const font = localFont({ src : '../../fonts/Manrope.ttf' });


interface Props
{
    name: string
    url: string
}

export default function Button({name, url} : Props) {
    return (
        <Link href={url} className={`${styles.button} ${font.className}`}>
            {name}
        </Link>
    );
}