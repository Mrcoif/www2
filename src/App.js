import React, {useRef, useState} from 'react'
import PostList from './components/PostList'
import './styles/App.css'
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: 'полная поебота'},
        {id: 2, title: 'ff', body: 'полная хуета'},
        {id: 3, title: 'bb', body: 'полная дрочь'},
    ])

	const [selectedSort, setSelectedSort] = useState('')
	const sortPosts = (sort) => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
	}

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App'>
            <PostForm create={createPost}/>
			<hr style={{margin: '15px 0'}}/>
            <div>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Выберите сортировку"
					option={[
						{value: 'title', name: 'По названию'},
						{value: 'body', name: 'По описанию'},
					]}
				/>
            </div>
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title={'Список помойки'}/>
                :
                <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }

        </div>
    )
}

export default App
