import styles from '@/app/styles/headfoot/HeaderProfile.module.css';
import Link from 'next/link';


export default function ProfileButton() {
    return (
        <Link href="/profile" className={styles.button}>
            <img src='/profile.png' alt='Profile button' />
        </Link>
    );
}