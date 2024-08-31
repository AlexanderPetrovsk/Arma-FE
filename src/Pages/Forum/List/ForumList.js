import save from '../../../assets/icons/save.svg';
import message from '../../../assets/icons/message.svg';
import eye from '../../../assets/icons/eye.svg';
import heart from '../../../assets/icons/heart.svg';
import reply from '../../../assets/icons/reply.svg';
import { useState } from 'react';
import Pagination from '../../../components/Pagination/pagination';

function ForumList() {
    const tags = [
        'Lorem',
        'Lorem Ipsum',
        'Lorem',
        'Lorem',
        'Lorem',
        'Lorem Ipsum',
        'Lorem',
    ]

    const topics = [
        'Lorem Ipsum Dolor sit Amet Consecteteur',
        'Lorem Ipsum Dolor sit Amet Consecteteur',
        'Lorem Ipsum Dolor sit Amet Consecteteur',
        'Lorem Ipsum Dolor sit Amet Consecteteur',
        'Lorem Ipsum Dolor sit Amet Consecteteur',
    ]

    const forumPosts = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 2,
            views: 5
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Facilisis ac velit id massa ullamcorper congue.',
            user: `@Thorbrjon`,
            userImg: null,
            datePosted: new Date().toLocaleString(),
            nmComments: 0,
            views: 0
        }
    ];

    const handleChange = (currentPage) => {
        setCurrentPage(currentPage);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;

    const postsFrom = (currentPage - 1) * perPage;
    const postsTo = currentPage * perPage;

    return (
        <div className='forum-content-container'>
            <div className='forum-sidebar'>
                <div className='tags-container m-b-15'>
                    <div className='f-w-700 f-s-16'>TAGS</div>
                    <div className='tags-list d-flex flex-wrap'>
                        { tags.map((tag, index) => {
                            return (
                                <div className='tag' key={index}>{tag}</div>
                            )
                        })}
                    </div>
                </div>
                <div className='topics-container m-b-15'>
                    <div className='f-w-700 f-s-16 m-b-5'>Popular Topics</div>
                    <ol className='topics-list'>
                        {topics.map((topic, index) => {
                            return (
                                <li className='m-b-5 f-w-500' key={index}>
                                    {topic}
                                </li>
                            )
                        })}
                    </ol>
                </div>
                <div className='your-posts-container'>
                    <div className='f-w-700 f-s-16 m-b-5'>Your Discussions</div>
                        <ol className='topics-list'>
                            {topics.map((topic, index) => {
                                return (
                                    <li className='m-b-5 f-w-500' key={index}>
                                        {topic}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
            </div>
            <div className='forum-posts-container m-b-10'>
                <div className='forum-posts'>
                    { forumPosts.slice(postsFrom, postsTo).map((post, index) => {
                        return (
                            <div className='forum-post' key={index}>
                                <div className='forum-post-header'>
                                    <div className='d-flex f-basis-100'>
                                        <div className='forum-post-image'>
                                            { post.user.slice(1,2) }
                                        </div>
                                        <div className='flex-column'>
                                            <div className='forum-post-date'>
                                                { post.datePosted }
                                            </div>
                                            <div className='forum-post-username'>
                                                { post.user }
                                            </div>
                                        </div>
                                    </div>
                                    <img className='forum-post-save' src={save} alt='' />
                                </div>
                                <div className='forum-post-title'>{post.title}</div>
                                <div className='d-flex j-content-between a-items-center p-l-2 p-r-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex m-r-20'>
                                            <img className='forum-post-comments m-r-10' src={message} alt='' />
                                            <p className='f-s-16'>{post.nmComments}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <img className='forum-post-views m-r-10' src={eye} alt='' />
                                            <p className='f-s-16'>{post.views}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <img className='forum-post-like m-r-10' src={heart} alt='' />
                                        <img className='forum-post-reply' src={reply} alt='' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination perPage={perPage} items={forumPosts} onChange={(currentPage) => { handleChange(currentPage) }} />
            </div>
        </div>
    )
}

export default ForumList;