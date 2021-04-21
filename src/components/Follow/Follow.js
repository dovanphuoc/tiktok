import styles from './Follow.module.scss'
import SidebarContainer from '../SidebarContainer'
import { Row, Column } from '@mycv/mycv-grid'
import CardVideoItem from './CardVideoItem'

function Follow() {
    const cards = [
        {
            id: 1,
            thumb: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4dc83d33af6539f4a94c15c4d2d74364.jpeg?x-expires=1618556400&x-signature=6kegCtFcgxL9y07G4a5DSHOT0D0%3D',
            author: 'Gấm Kami',
            nickname: 'gamkami'
        },
        {
            id: 2,
            thumb: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7bc5ac1c4fa9db30e7dd8fda7987be2b.jpeg?x-expires=1618556400&x-signature=p6c127LoV1fwLRC6mS8TU%2BeBCxk%3D',
            author: 'Gấm Kami',
            nickname: 'gamkami'
        },
        {
            id: 3,
            thumb: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0edcc73fc60e5bc27f375845a08f2889.jpeg?x-expires=1618556400&x-signature=RPNDROfsQcVeQAAdtJJBMV1RWpA%3D',
            author: 'Gấm Kami',
            nickname: 'gamkami'
        },
        {
            id: 4,
            thumb: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4ea7f35d693d384a75c35063c181a95f.jpeg?x-expires=1618556400&x-signature=l8%2BNHnvj2Vpf9pfp%2BwcjFgI6sUY%3D',
            author: 'Gấm Kami',
            nickname: 'gamkami'
        },
        {
            id: 5,
            thumb: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7b605876d0d65978474b3ee59ab54dea.jpeg?x-expires=1618556400&x-signature=%2FLJZf2deN5wjySDrq1jCGK41lIY%3D',
            author: 'Gấm Kami',
            nickname: 'gamkami'
        },
        {
            id: 6,
            thumb: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/645ba025d676e6cb4f24d3f6057ae41c.jpeg?x-expires=1618556400&x-signature=Xh0AmMf%2FYsRcNXWc8WLBrqsXgic%3D',
            author: 'Gấm Kami',
            nickname: 'gamkami'
        },
    ]
    return (
        <Row>
            <Column sizeDesktop={3}>
                <SidebarContainer />
            </Column>
            <Column sizeDesktop={9}>
                <div className={styles.cardVideoContainer}>
                    {cards.map(card => (
                        <CardVideoItem
                            key={card.id}
                            thumb={card.thumb}
                            author={card.author}
                            nickname={card.nickname}
                        />
                    ))}
                </div>
            </Column>
        </Row>
    )
}

export default Follow;