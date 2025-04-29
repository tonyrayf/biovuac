import styles from '@/app/styles/BiovuacMap.module.css';


export default function BivouacMap() {
    return (
        <div>
            <iframe
                src='Map/index.html'
                className={styles.map}
                title={"Game"}
            />
        </div>
    );
}