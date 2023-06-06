import React, {useRef, useState} from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'полная поебота' },
		{ id: 2, title: 'Javascript', body: 'полная хуета' },
		{ id: 3, title: 'Javascript', body: 'полная дрочь' },
	])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	return (
		<div className='App'>
			<PostForm create={createPost}/>
			<PostList posts={posts} title={'Список помойки'} />
		</div>
	)
}

export default App
