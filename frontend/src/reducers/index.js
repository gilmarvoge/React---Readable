
import { combineReducers } from 'redux'
import posts from './postsReducer'
import post from './postReducer'
import categories from './categoriesReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  categories,
  posts,
  comments,
  post,
})

export default rootReducer
