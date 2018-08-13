import _ from 'lodash'

import {
  SET_COMMENTS,
  ADICIONA_COMMENT_SUCCESS,
  EDIT_COMMENT_BY_ID_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  GET_COMMENTS_BY_ID_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS
} from '../constantes/Comment'


const comments = (state = [], action) => {
  switch (action.type) {

    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
    case EDIT_COMMENT_BY_ID_SUCCESS:
    case DELETE_COMMENT_SUCCESS:{
      const newState = state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment;
        }
        return comment;
      });
      return [...newState];
    }

    case GET_COMMENTS_BY_ID_SUCCESS:
      {
        return action.comments;
      }
    default:
      return state;
  }
}

export default comments

