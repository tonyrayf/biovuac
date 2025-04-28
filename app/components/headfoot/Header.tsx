import styles from '@/app/styles/headfoot/Header.module.css';
import Title from './HeaderTitle';
import Button from './HeadFootButton';
import ProfileButton from './HeaderProfile';


export default function Header() {
    return (
        <div className={styles.header}>
            <Title />


            { /* Buttons */ }
            <div className={styles.buttons}>
                <Button name='Сдать' />
                <Button name='Арендовать' />
            </div>


            <ProfileButton />  
        </div>
    );
}