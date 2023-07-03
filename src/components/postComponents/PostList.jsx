import React from 'react'
import PostItem from './PostItem'
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const PostList = ({ posts, title, remove, limit, page}) => {

	if(!posts.length){
		return (
			<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
		)
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames="post">
						<PostItem remove = {remove} number = {limit*(page-1) + index +1} post={post} />
					</CSSTransition>

				))}
			</TransitionGroup>

		</div>
	)
}

export default PostList
