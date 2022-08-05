import { Button } from "react-bootstrap";

import styles from './styles.module.css';

export default function QuantityBox() {
    return (
        <div className={styles.quantityBox} id="quantityBox">
            <Button className={styles.btn}>-</Button>
            <span className="count">1</span>
            <Button className={styles.btn}>+</Button>
        </div>
    )
}