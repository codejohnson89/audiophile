import styles from './header.module.css';

export default function CategoryHeader(props) {
    return (
        <section className={styles.categoryHeader}>
            <h2 className='heading-h2'>{props.header}</h2>
        </section>
    )
} 