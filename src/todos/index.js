import {createStore, combineReducers} from "redux"
import {reducer as todoReducer} from "./todos/"

const finalReducer = combineReducers({
	"todos": todoReducer,
})

export default createStore(finalReducer)