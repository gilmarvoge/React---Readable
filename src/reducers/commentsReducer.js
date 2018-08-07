import _ from 'lodash'

import {
  SET_COMMENTS,
  ADICIONA_COMMENT_SUCCESS,
  EDIT_COMMENT_BY_ID_SUCCESS,
  GET_COMMENTS_BY_ID_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS
} from '../constantes/Comment'


const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_ID_SUCCESS: {
      return action.comments ;
    }
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS: {
      return { ...action.comments };
    }
    case EDIT_COMMENT_BY_ID_SUCCESS: {
     
      return { ...state};
    }
    default:
      return state;
  }
}

export default comments

