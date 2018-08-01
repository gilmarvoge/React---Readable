import _ from 'lodash'

import {
  SET_COMMENTS,
  ADICIONA_COMMENT_SUCCESS,
  EDIT_COMMENT_BY_ID_SUCCESS,
  GET_COMMENTS_BY_ID_SUCCESS,
} from '../constantes/Comment'


const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_ID_SUCCESS: {
      return action.comments ;
    }
    case ADICIONA_COMMENT_SUCCESS: {
      
      return { ...state};
    }
    case EDIT_COMMENT_BY_ID_SUCCESS: {
     
      return { ...state};
    }
    default:
      return state;
  }
}

export default comments

