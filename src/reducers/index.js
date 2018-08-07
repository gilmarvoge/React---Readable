
import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import posts from './postsReducer'
import post from './postReducer'
import categories from './categoriesReducer'
import comments from './commentsReducer'
//import comment from './commentReducer'






const rootReducer = combineReducers({
  categories,  
  posts, 
  comments,
  post,
   
  })

  export default rootReducer
