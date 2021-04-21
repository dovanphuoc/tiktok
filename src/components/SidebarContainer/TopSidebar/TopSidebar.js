import styles from './TopSidebar.module.scss'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUsers } from 'react-icons/fa';
import Button from '../../../assets/packages/phuocdv-button'
import config from '../../../assets/config'

function TopSidebar() {
    return (
        <div className={styles.topSidebar}>
            <NavLink
                to={config.routes.home}
                exact
                activeStyle={{
                    color: "#fe2c55",
                }}
                className={styles.navLink}
            >
                <FaHome className={styles.iconHome} />
                <span>Dành cho bạn</span>
            </NavLink>
            <NavLink
                to={config.routes.follow}
                exact
                activeStyle={{
                    color: "#161823",
                }}
                className={styles.navLink}
            >
                <FaUsers className={styles.iconUsers} />
                <span>Đang Follow</span>
            </NavLink>
            <div className={styles.loginWrapper}>
                <span className={styles.desc}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</span>
                <Button size="l" type="border" children="Đăng nhập"></Button>
            </div>
        </div>
    )
}

export default TopSidebar