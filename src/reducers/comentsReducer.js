import _ from 'lodash'

import {
  SET_COMENTS,
  ADICIONA_COMENT_SUCCESS,
  EDIT_COMENT_BY_ID_SUCCESS,
  GET_COMENTS_BY_ID_SUCCESS,
} from '../constantes/Coment'

/*
const coments = (state = {}, action) => {
  switch (action.type) {
    case SET_COMENTS:
      return action.state

    default:
      return state
  }
}*/

/*
const coments = (state = {}, action) => {
  switch (action.type){
    case SET_COMENTS:{
      const coments = action
      return {...coments}
    }
    default:
      return state;
  }
}*/


const coments = (state = [], action) => {
  switch (action.type) {
    case GET_COMENTS_BY_ID_SUCCESS: {
      return action.coments
    }
    case ADICIONA_COMENT_SUCCESS: {
      
      return { ...state};
    }
    case EDIT_COMENT_BY_ID_SUCCESS: {
     
      return { ...state};
    }
    default:
      return state;
  }
}

export default coments

