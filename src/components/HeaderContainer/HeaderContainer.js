import styles from './HeaderContainer.module.scss'
import { Grid } from '@mycv/mycv-grid'
import config from '../../assets/config'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoMusic.svg'
import logoTextDark from '../../assets/images/logoTextDark.svg'
import Button from '../../assets/packages/phuocdv-button'
import { FaSearch } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs'

function HeaderContainer() {
    return (
        <div className={styles.HeaderContainer}>
            <Grid type="wide" maxWidth={config.mainWidth} className={styles.navbarContainer}>
                <Link to={config.routes.home}>
                    <img src={logo} alt={logo} />
                    <img src={logoTextDark} alt={logoTextDark} />
                </Link>
                <div className={styles.searchContainer}>
                    <input className={styles.inputBox} placeholder="Tìm kiếm tài khoản" />
                    <button className={styles.searchButton}>
                        <FaSearch className={styles.searchIcon} />
                    </button>
                </div>
                <div className={styles.navbarRight}>
                    <Button type="default" underline children="Tải lên"></Button>
                    <Button type="primary" children="Đăng nhập"></Button>
                    <Button type="default">
                        <BsThreeDotsVertical className={styles.ellipsIcon} />
                    </Button>
                </div>
            </Grid>
        </div>
    )
}

export default HeaderContainer;