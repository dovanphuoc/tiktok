import { GrFacebookOption } from 'react-icons/gr'
import { IoIosMusicalNotes, IoLogoTwitter } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiLinksLine } from 'react-icons/ri'
import { BsMusicNoteBeamed, BsChevronRight } from 'react-icons/bs'
import { ImHeart } from 'react-icons/im'
import { FaCommentDots, FaShare, FaHeart } from 'react-icons/fa'

import Button from '../../assets/packages/phuocdv-button'
import { Route, Link } from 'react-router-dom'
import config from '../../assets/config'
import styles from './PostDetail.module.scss'
import logoTextDark from '../../assets/images/logoTextDark.svg'
import Modal from 'react-modal'
import pubg from '../../assets/images/pubg.jpg'
import image from '../../assets/images/avatar.jpeg'

function PostDetail({
    videoUrl = '',
    modalIsOpen = false,
    onClose = () => {}
}) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onClose}
        >
            <div className={styles.videoCardBig}>
                <div className={styles.videoCardContainer}>
                    <div className={styles.backgroundImage}>
                        <img src={pubg} alt={pubg} className={styles.thumbnail} />
                    </div>
                    <div className={styles.videoCardBrowse}>
                        <video src={videoUrl} controls className={styles.videoContainer} ></video>
                    </div>
                    <button onClick={onClose} className={styles.button}>
                        <GrClose className={styles.closeIcon} />
                    </button>
                    <button className={styles.buttonRight}>
                        <BsChevronRight className={styles.rightIcon} />
                    </button>
                    <img src={logoTextDark} alt="logo" />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.userInfoContainer}>
                        <div className={styles.userInfo}>
                            <Link to={`${config.routes.home}`}>
                                <img src={image} alt={image} className={styles.userAvatar} />
                            </Link>
                            <div className={styles.userInfoLink}>
                                <Link to={config.routes.home}>
                                    <h3>hotgirl2kk</h3>
                                </Link>
                                <Link to={config.routes.home}>
                                    <h3 className={styles.nameAvatar}>Xuyên Nhi</h3>
                                </Link>
                            </div>
                            <Button children="Follow" size="xs" type="border"></Button>
                        </div>
                    </div>
                    <div className={styles.videoInfosContainer}>
                        <h2 className={styles.musicInfo}>
                            <Link to={config.routes.home} className={styles.musicDescription}>
                                <IoIosMusicalNotes className={styles.iconMusic} />
                                Nhớ Người Hay Nhớ (Remix) - Châu Đăng Khoa, Sofia, Khói
                            </Link>
                        </h2>
                        <div className={styles.actionContainer}>
                            <div className={styles.actionLeft}>
                                <div className={styles.icon}>
                                    <div className={styles.iconBox}>
                                        <FaHeart />
                                    </div>
                                    <span className={styles.votes}>73.4K</span>
                                </div>
                                <div className={styles.icon}>
                                    <div className={styles.iconBox}>
                                        <FaCommentDots />
                                    </div>
                                    <span className={styles.votes}>13K</span>
                                </div>
                            </div>
                            <div className={styles.actionRight}>
                                <div className={styles.shareContainer}>
                                    <p>Chia sẻ với</p>
                                    <div className={styles.shareGroup}>
                                        <Link to={config.routes.home} className={`${styles.socialBox} ${styles.socialBoxGreen}`}>
                                            <AiOutlineWhatsApp className={styles.WhatsAppIcon} />
                                        </Link>
                                        <Link to={config.routes.home} className={`${styles.socialBox} ${styles.socialBoxBlue}`}>
                                            <GrFacebookOption className={styles.facebookIcon} />
                                        </Link>
                                        <Link to={config.routes.home} className={`${styles.socialBox} ${styles.socialBoxBlue1}`}>
                                            <IoLogoTwitter className={styles.twitterIcon} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.copyLinkContainer}>
                            <div className={styles.linkContainer}>
                                https://www.tiktok.com/@hotgirl2kk/video/6935011448917642498?_d=secCgYIASAHKAESMgowdzajyhG5V7RNRvWzq%2BZOgPJyV9xv%2FbWYP5M1tBaViG97vZyIRcCvX%2BK%2Fnd3ZM4p0GgA%3D&language=vi&sec_user_id=MS4wLjABAAAAc_Rh93HmB2MUplPNRzJkBNjGFJDuy6PZu0YBVlj4UnvfLSC7-RlqBQPyiIXUKIDj&share_app_name=tiktok&share_author_id=6936329232176169985&share_link_id=5365816b-dd38-452f-994a-6f39a184633a&timestamp=1616090219&u_code=dhgif85dhfecge&user_id=6941039616687080449&utm_campaign=client_share&utm_medium=android&utm_source=messenger&source=h5_t&lang=vi-VN&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6941572016953968130
                            </div>
                            <div className={styles.copyContainer}>
                                <RiLinksLine className={styles.RiLinksLineIcon} />
                                <p className={styles.wordLink}>Sao chép liên kết</p>
                            </div>
                        </div>
                        <div className={styles.commentContainer}>
                            <div className={styles.logoutContainer}>
                                <h3>Đăng nhập để xem bình luận</h3>
                                <p>Đăng nhập để xem bình luận và thích video.</p>
                                <Button children="Đăng nhập" type="primary" size="xl"></Button>
                                <p className={styles.signUp}>
                                    Bạn không có tài khoản?
                                        <span>Đăng ký</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PostDetail
