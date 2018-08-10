import _ from 'lodash'

import {
  GET_ALL_POSTS_SUCCESS,
  ADICIONA_POST_SUCCESS,
  EDIT_POST_BY_ID_SUCCESS,
} from '../constantes/Post'



const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS: 
    case ADICIONA_POST_SUCCESS: {
      return  action.posts
    }
    case EDIT_POST_BY_ID_SUCCESS: {
     
      return { ...state};
    }
    default:
      return state;
  }
}

export default posts

