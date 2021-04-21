import styles from './CardVideoItem.module.scss'
import Button from '../../../assets/packages/phuocdv-button'

function CardVideoItem({
    thumb = '',
    author = '',
    nickname = ''
}) {
    return (
        <div className={`${styles.cardItem}`} >
            <img className={styles.thumb} src={thumb} alt="avatar" />
            <div className={styles.cardContent}>
                <h5>{author}</h5>
                <h6>{nickname}</h6>
                <Button size="xxl" children="Follow" type="primary"></Button>
            </div>
        </div>
    )
}

export default CardVideoItem;