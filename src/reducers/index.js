
import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import posts from './postsReducer'
import post from './postReducer'
import categories from './categoriesReducer'
import coments from './comentsReducer'
import coment from './comentReducer'






const rootReducer = combineReducers({
    posts, 
    post,
    categories,
    coments,
    coment,
  })

  export default rootReducer
