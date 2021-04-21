import { useState } from 'react'
import { Row, Column } from '@mycv/mycv-grid'
import SidebarContainer from '../../components/SidebarContainer/SidebarContainer'
import PostItem from '../../components/PostItem'
import PostDetail from '../../components/PostDetail'

function Home() {
    const [isShowModal, setIsShowModal] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')

    const posts = [
        {
            id: 1,
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6bdad19d9b5b1695426632ff4473331d.jpeg?x-expires=1618466400&x-signature=qkfyoLxswggqxlGTWKi4AwTnVFY%3D',
            author: 'beoxaokek3',
            nickname: 'BeoK3Nè❤️',
            musicContent: 'nhạc nền - Chill Music 🍀 - 𝘾𝙝𝙞𝙡𝙡 𝙈𝙪𝙨𝙞𝙘 🌈',
            video: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/7cd7ad077a05407f8c54d67004764fcb/?a=1988&br=2692&bt=1346&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1618486078&l=2021041505274601011515103604498985&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=anZtNWV1OzU0MzMzPDgzM0ApZmlpNGY1NGVmNzM5Z2g8PGcvLTBgL2BwbHNgLS01LzRzc2NhLmEuY2IvMC0zXy0vM2E6Yw%3D%3D&signature=44342d12ae968b2d26994b4db859a9a3&tk=tt_webid_v2&vl=&vr=',
            description: 'invisK phiên bản mobile nút bắn bên trái mà',
            likeCount: '37.4K',
            commentCount: 2080,
            shareCount: 100,
        },
        {
            id: 2,
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c8c2b5b30ee430ec26c786c823606a57.jpeg?x-expires=1618466400&x-signature=CMaFhlA6qrBDulREKYWG5ZahFsE%3D',
            author: 'nguyenvietanhh1',
            nickname: 'NGUYEN VIET ANH',
            musicContent: 'nhạc nền  - Bay Phòng 888',
            video: 'https://v9-vn.tiktokcdn.com/cf3f62923b59fd613ee707c198ef950b/6076e3ce/video/tos/alisg/tos-alisg-pve-0037/faa49fe02c174bf98c996c33e60ef953/?a=1180&br=1462&bt=731&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20210414064446010234087043555E4273&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzo7ZnZpbnI8NDMzaDgzM0ApZzZkODo5NGVoN2ZlOTg8NGdeZDFiNG9jNmVgLS0vLzRzc2EuYzIuYy0wXjE1NDE2XjQ6Yw%3D%3D&vl=&vr=',
            description: 'chúc mừng em nha , anh cũng vừa nhận 170 cụ khoai tuần này, ai mún kiếm 3 lít-5 lít/ ngày cmt mk chỉ nha ☺️',
            likeCount: '209.8K',
            commentCount: 1115,
            shareCount: 1818,
        },
        {
            id: 3,
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/0892fe2ad92599e7dce4c423a87e7c60.jpeg?x-expires=1618477200&x-signature=5syE%2FxSjBjSVkwRW3OlsIR4zwyg%3D',
            author: 'huanhoahong',
            nickname: 'huangalang',
            musicContent: 'nhac dj',
            video: 'https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037/65a34382acfd4460b50ace946dfe17c2/?a=1988&br=4948&bt=2474&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1618414817&l=2021041409395501023410513341054E25&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=MzV2ZmlxOjlrNDMzODgzM0ApOjZnZmg1NGU5N2Y6ZTU6M2dzcWRgYGNyaWxgLS1kLzRzcy1gLzReYzAyNjZiMTZeMGM6Yw%3D%3D&signature=8119e8a113112174dd3595bcc1de1039&tk=tt_webid_v2&vl=&vr=',
            description: 'anh huấn lấy vợ',
            likeCount: '13K',
            commentCount: 84,
            shareCount: 50,
        },
    ]
    return (
        <Row>
            <Column size={0} sizeTablet={4} sizeDesktop={3}>
                <SidebarContainer />
            </Column>
            <Column size={12} sizeTablet={8} sizeDesktop={9}>
                {posts.map(post => (
                    <PostItem
                        key={post.id}
                        avatar={post.avatar}
                        author={post.author}
                        nickname={post.nickname}
                        musicContent={post.musicContent}
                        video={post.video}
                        description={post.description}
                        likeCount={post.likeCount}
                        commentCount={post.commentCount}
                        shareCount={post.shareCount}
                        onShow={() => {
                            setVideoUrl(post.video)
                            setIsShowModal(true)
                        }}
                    />
                ))}
            </Column>

            <PostDetail
                modalIsOpen={isShowModal}
                videoUrl={videoUrl}
                onClose={() => {
                    setIsShowModal(false)
                }}
            />
        </Row>
    )
}

export default Home