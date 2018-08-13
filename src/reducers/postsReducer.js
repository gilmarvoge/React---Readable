import _ from 'lodash'

import {
  GET_ALL_POSTS_SUCCESS,
  ADICIONA_POST_SUCCESS,
  EDIT_POST_BY_ID_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS
} from '../constantes/Post'



const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
    case ADICIONA_POST_SUCCESS:
    case DELETE_POST_SUCCESS: {
      return action.posts
    }
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS: {
      const newState = state.map(post => {
        if (post.id === action.post.id) {
          return action.post;
        }
        return post;
      });
      return [...newState];
    }
    case EDIT_POST_BY_ID_SUCCESS: {
      return { ...state };
    }
    default:
      return state;
  }
}

export default posts

