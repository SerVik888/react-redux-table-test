import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { paginateReducer } from './reducers/paginateReducer'
import { postReducer } from './reducers/postReducer'

const rootReducer = combineReducers({ posts: postReducer, paginate: paginateReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk))
