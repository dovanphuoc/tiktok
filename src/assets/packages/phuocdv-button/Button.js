import './Button.module.scss'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
import '../../styles/base.css'

function Button({
    type = 'primary',
    size = 'm',
    to = '',
    href = '',
    children = null,
    openNewTab = false,
    underline = false,
    onClick = () => {}
}) {
    const classNames = [
        styles.wrapper,
        styles[type],
        styles[size],
        underline ? styles.underline : ''
    ]
    const props = {}
    let Component = 'button'
    if (href) {
        Component = 'a'
        props.href = href
        if (openNewTab) {
            props.target = '_blank'
        }
    }
    if (to) {
        Component = Link
        props.to = to
    }
    return (
        <Component
            {...props}
            className={classNames.join(' ')}
            onClick={onClick}
        >
            <span>{children}</span>
        </Component>
    )
}

export default Button;