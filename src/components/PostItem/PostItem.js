import styles from './PostItem.module.scss'
import { Route, Link } from 'react-router-dom'
import config from '../../assets/config'
import { BsMusicNoteBeamed, BsChevronRight } from 'react-icons/bs'
import { ImHeart } from 'react-icons/im'
import { FaCommentDots, FaShare, FaHeart } from 'react-icons/fa'
import Button from '../../assets/packages/phuocdv-button'
import React from 'react'

const defaultFn = () => {}

function PostItem({
    avatar = '',
    author = '',
    nickname = '',
    musicContent = '',
    video = '',
    likeCount = '',
    commentCount = '',
    shareCount = '',
    description = '',
    onLike = defaultFn,
    onComments = defaultFn,
    onShare = defaultFn,
    onFollow = defaultFn,
    onShow = defaultFn
    
}) {
    return (
        <div className={styles.postItem}>
            <div className={styles.postUser}>
                <Link to={`${config.routes.home}@${author}`}>
                    <img src={avatar} alt={nickname} className={styles.avatar} />
                </Link>
                <div className={styles.postContent}>
                    <div className={styles.postHeading}>
                        <div className={styles.authorInfo}>
                            <Route to={config.routes.home}>
                                <h4 className={styles.author}>{author}</h4>
                                <span className={styles.nickname}>{nickname}</span>
                            </Route>
                        </div>
                    </div>
                    <div className={styles.captionVideo}>
                        <strong className={styles.answer}>Trả lời</strong>
                        <Link to={config.routes.home} className={styles.targetUser}>@vy.yanghoklf</Link>
                        <strong className={styles.description}>{description}</strong>
                        <Route to={config.routes.home}>
                            <span className={styles.text}>#freefire</span>
                        </Route>
                    </div>
                    <div className={styles.musicContent}>
                        <Route to={config.routes.home}>
                            <BsMusicNoteBeamed className={styles.musicIcon} />
                            <span className={styles.musicDesc}>{musicContent}</span>
                        </Route>
                    </div>
                    <div className={styles.itemVideo}>
                        <video onClick={onShow} src={video} controls className={styles.video} />
                        <div className={styles.iconSocial}>
                            <div className={styles.iconItem}>
                                <div className={styles.boxIcon}>
                                    <ImHeart className={styles.icon} />
                                </div>
                                <span className={styles.votes}>{likeCount}</span>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.boxIcon}>
                                    <FaCommentDots className={styles.icon} />
                                </div>
                                <span className={styles.votes}>{commentCount}</span>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.boxIcon}>
                                    <FaShare className={styles.icon} />
                                </div>
                                <span className={styles.votes}>{shareCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.follow}>
                        <Button size="xs" type="border" children="Follow"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem