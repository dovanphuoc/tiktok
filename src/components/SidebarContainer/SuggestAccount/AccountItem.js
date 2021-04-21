import { Link } from 'react-router-dom'
import config from '../../../assets/config'
import styles from './SuggestAccount.module.scss'

function AccountItem({
    avatar = null,
    nickname = '',
    firstName = '',
    lastName = '',
    tick = false,
}) {
    return (
        <Link
            to={`${config.routes.home}@${nickname}`}
            className={styles.accountItem}
        >
            <img src={avatar} alt={nickname} className={styles.avatar} />
            <div className={styles.accountBody}>
                <h4 className={styles.nickname}>{nickname}</h4>
                <p className={styles.name}>{`${firstName} ${lastName}`}</p>
            </div>
        </Link>
    )
}

export default AccountItem