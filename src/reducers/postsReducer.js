import _ from 'lodash'

import {
  SET_POSTS,
  ADICIONA_POST_SUCCESS,
  EDIT_POST_BY_ID_SUCCESS,
} from '../constantes/Post'



const posts = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS: {
      return action.posts
    }
    case ADICIONA_POST_SUCCESS: {
      
      return { ...state};
    }
    case EDIT_POST_BY_ID_SUCCESS: {
     
      return { ...state};
    }
    default:
      return state;
  }
}

export default posts

