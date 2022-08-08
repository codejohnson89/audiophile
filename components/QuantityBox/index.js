import { useState } from "react";
import { Button } from "react-bootstrap";

import styles from './styles.module.css';

export default function QuantityBox() {
    const [count, setCount] = useState(1)

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    }


    return (
        <div className={styles.quantityBox} id="quantityBox">
            <Button onClick={decrement} className={styles.btn}>-</Button>
            <span className="count">{count}</span>
            <Button onClick={increment} className={styles.btn}>+</Button>
        </div>
    )
}