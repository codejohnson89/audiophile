import Link from 'next/link'
import style from './button.module.css'

export default function CustomButton (props) {
    return (
            <>
                <Link href={props.link}><a className={[style.btn, props.classname].join(' ')}>{props.text}</a></Link>
            </>
        )
}