import styles from '@/app/styles/NavigationButton.module.css';


interface Props {
    page: number,
    currentPage: number
    onClick: any
}

export default function NavigationButton({page, currentPage, onClick} : Props) {
    return (
        <img
            className={styles.navButton}
            onClick={onClick}
            src='/ellipse.png'
            width={page === currentPage ? 30: 22}
            height={page === currentPage ? 30: 22}
        />
    );
}