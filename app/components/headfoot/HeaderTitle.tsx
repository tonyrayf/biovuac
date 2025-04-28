import localFont from 'next/font/local';
import styles from '@/app/styles/headfoot/HeaderTitle.module.css';
import Link from 'next/link';


const titleFont = localFont({ src: '../../fonts/MateSC-Regular.ttf' });

const title = `${titleFont.className} ${styles.title}`;


export default function Title() {
    return (
        <Link href="/" className={title}>
            Bivouac
        </Link>
    );
}