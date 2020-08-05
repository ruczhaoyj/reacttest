import React from "react"
import PropTypes from "prop-types"

const ListItem = ({value, finished}) => {
	return (
		<li>
			
			<span style={{"textDecoration": finished ? "line-through" : "none"}}>{value}</span>
			
		</li>
	)
}

ListItem.propTypes = {
	"value": PropTypes.string.isRequired,
	"finished": PropTypes.bool.isRequired,
}

export default ListItem
