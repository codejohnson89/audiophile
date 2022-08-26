import { useState } from "react";
import { Button } from "react-bootstrap";

import styles from './styles.module.css';

/**
 * It returns a div with a button that decrements the count, a span with the count, and a button that
 * increments the count
 */
export default function QuantityBox(props) {
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