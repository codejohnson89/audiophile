import styles from './styles.module.css';

export default function BackButton () {
    return (
        <button className={styles.back} type="button" onClick={() => router.back()}>go back</button>
    )
}