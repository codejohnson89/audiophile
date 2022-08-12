import Link from 'next/link'
import style from './button.module.css'

/**
 * It returns a link with a classname of btn and the props.classname
 * @param props - {
 * @returns A link with a classname of btn and props.classname.
 */
export default function CustomButton (props) {
    return (
            <>
                <Link href={props.link}><a className={[style.btn, props.classname].join(' ')}>{props.text}</a></Link>
            </>
        )
}