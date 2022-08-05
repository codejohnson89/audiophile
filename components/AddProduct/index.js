import { Button } from "react-bootstrap";

import styles from './styles.module.css';

export default function AddProduct () {
    return (
        <div>
            <Button className={['btn-custom-orange', styles.btn].join(' ')}>Add To Cart</Button>
        </div>
    )
}