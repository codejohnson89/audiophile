import style from './button.module.css'

export default function CustomButton (props) {
    return (
            <>
                <a className={[style.btn, props.classname].join(' ')}>{props.text}</a>
            </>
        )
}