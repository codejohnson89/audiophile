import styles from './styles.module.css';

export default function BackButton () {
    return (
        <div className={styles.backButton}>
            <button className={[styles.back, 'backbtn'].join(' ')} type="button" onClick={() => router.back()}>go back</button>
        </div>
    )
}