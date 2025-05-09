import styles from '@/app/styles/headfoot/Footer.module.css';
import Button from './HeadFootButton';


export default function Footer() {
    return (
        <div className={styles.footer}>
            { /* Buttons */ }
            <div className={styles.buttons}>
                <Button name='Про нас' url='/about' />
                <Button name='Наши контакты' url='' />
            </div>
        </div>
    );
}