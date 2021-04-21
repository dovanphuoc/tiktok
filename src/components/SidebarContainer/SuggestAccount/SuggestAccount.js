import styles from './SuggestAccount.module.scss'
import AccountItem from './AccountItem'
import { HiChevronDown } from 'react-icons/hi';

function SuggestAccount({
    heading = '',
    expandedTitle = 'See all',
    collapseTitle = 'See less',
    isExpanded = false,
    hideSeeBtn = false,
    data = [],
}) {
    return (
        <div className={styles.suggestAccount}>
            <p className={styles.heading}>Tài khoản được đề xuất</p>
            {data.map(account => (
                <AccountItem
                    key={account.id}
                    avatar={account.avatar}
                    nickname={account.nickname}
                    name={`${account.firstName} ${account.lastName}`}
                />
            ))}
            <div className={styles.seeAll}>
                <span className={styles.text}>Xem tất cả</span>
                <HiChevronDown className={styles.chervonDownIcon} />
            </div>
        </div>
    )
}

export default SuggestAccount;