import {ADD_TODO} from "./actionTypes"

let num = 0

export const addTodo = text => ({
	"type": ADD_TODO,
	"text": text,
	"id": num++,
	"finished": false
})
