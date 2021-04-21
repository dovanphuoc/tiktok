import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.pageWrapper}>
                <Link className={styles.navLink} to="/">Giới thiệu</Link>
                <Link className={styles.navLink} to="/">Bảng tin</Link>
                <Link className={styles.navLink} to="/">Liên hệ</Link>
                <Link className={styles.navLink} to="/">Sự nghiệp</Link>
                <Link className={styles.navLink} to="/">ByteDance</Link>
            </div>
            <div className={styles.programWrapper}>
                <Link className={styles.navLink} to="/">TikTok for Good</Link>
                <Link className={styles.navLink} to="/">Advertise</Link>
                <Link className={styles.navLink} to="/">Developers</Link>
                <Link className={styles.navLink} to="/">Transparency</Link>
            </div>
            <div className={styles.legalWrapper}>
                <Link className={styles.navLink} to="/">Trợ giúp</Link>
                <Link className={styles.navLink} to="/">An toàn</Link>
                <Link className={styles.navLink} to="/">Điều khoản</Link>
                <Link className={styles.navLink}to="/">Quyền riêng tư</Link>
                <Link className={styles.navLink} to="/">Creator Portal</Link>
                <Link className={styles.navLink} to="/">Hướng dẫn Cộng đồng</Link>
            </div>
            <div className={styles.moreWrapper}>More</div>
            <div className={styles.copyright}>© 2021 TikTok</div>
        </div>
    )
}

export default Footer;