import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import ListItem from "./listItem"

/**
 * @param {PropTypes.array} todos：在这里的todos应该是经过筛选的
 */
const TodoList = ({todos}) => {
	return (
		<ul>
		{
		todos.map((todo) => {
			return (
				<ListItem 
					key={todo.id}
					value={todo.text} 
					finished={todo.finished}
				/>
			)
		})
		}
		</ul>
	)
}

TodoList.propTypes = {
	"todos": PropTypes.array.isRequired,
}




export default TodoList