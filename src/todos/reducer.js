import {ADD_TODO} from "./actionTypes"

export default (previousState=[], action) => {
	switch(action.type){
		case ADD_TODO:{
			console.log(`${action.type} ${action.text} ${action.id}`)
			return [
				{
					"text": action.text,
					"id": action.id,
					"finished": action.finished
				},
				...previousState
			]
		}

	}
}