import _ from 'lodash'

import {
    GET_POST_BY_ID_SUCCESS,
    UPVOTE_POST_SUCCESS,
    DOWNVOTE_POST_SUCCESS
} from '../constantes/Post'



const post = (state = [], action) => {
  switch (action.type) {
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
    case GET_POST_BY_ID_SUCCESS:  {
      return action.post;
    }
    default:
      return state;
  }
}



export default post

