import React from 'react'
import classes from './MyButton1.module.css'

const MyButton1 = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	)
}

export default MyButton1
