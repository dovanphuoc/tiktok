import styles from './SidebarContainer.module.scss'
import TopSidebar from './TopSidebar'
import SuggestAccount from './SuggestAccount'
import Footer from './Footer'

function SidebarContainer() {
    const users = [
        {
            id: 1,
            nickname: 'gamkami',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4dc83d33af6539f4a94c15c4d2d74364.jpeg?x-expires=1618466400&x-signature=P6IxFaN6n%2B4L2aq5gDJD1LcYUWE%3D',
            firstName: 'phuoc',
            lastname: 'dv'
        },
        {
            id: 2,
            nickname: 'vietphuongthoa98',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7bc5ac1c4fa9db30e7dd8fda7987be2b.jpeg?x-expires=1618466400&x-signature=xj2Uw1MEd9s3oiezA19xx%2FNxnTM%3D',
            firstName: 'phuoc',
            lastname: 'dv1'
        },
        {
            id: 3,
            nickname: 'vangiau.07',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4ea7f35d693d384a75c35063c181a95f.jpeg?x-expires=1618466400&x-signature=YKb3iwP3CmFsOIPCH%2F6GUQZ5WcM%3D',
            firstName: 'phuoc',
            lastname: 'dv1'
        },
        {
            id: 4,
            nickname: 'dinhtrangthao',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0edcc73fc60e5bc27f375845a08f2889.jpeg?x-expires=1618466400&x-signature=SwWh2P8GoFJdO7Zt%2FRXL%2BIoDQcs%3D',
            firstName: 'phuoc',
            lastname: 'dv1'
        },
        {
            id: 5,
            nickname: 'cuongjin08',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7b605876d0d65978474b3ee59ab54dea.jpeg?x-expires=1618466400&x-signature=zVB2XD9WnKTwU1x31fBuARsI4hw%3D',
            firstName: 'phuoc',
            lastname: 'dv1'
        },
    ]
    let render = users.map(user => {
        console.log(user)
        return user

    })
    return (
        <div className={styles.SidebarContainer}>
            <TopSidebar />
            <SuggestAccount
                data={render}
            />
            <Footer />
        </div>
    )
}

export default SidebarContainer;