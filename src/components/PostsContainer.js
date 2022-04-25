import {useAppContext} from '../context/appContext'
import {useEffect} from 'react'
import Loading from './Loading'
import Post from './Post'
import Wrapper from '../assets/wrappers/PostsContainer'

const PostsContainer = () => {
    const {getPosts, posts, isLoading, page, totalPosts} = useAppContext()

    useEffect(() => {
        getPosts()
    }, [])

    if (posts.length === 0) {
        return (<Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }


    return (
        <Wrapper>
            <h5>{totalPosts} post {posts.length > 1} found</h5>
            <div className="posts">
                {posts.map((post)=> {
                    return <Post key={post._id}{...post} />
                })}
            </div>
        </Wrapper>
    )
}

export default PostsContainer
