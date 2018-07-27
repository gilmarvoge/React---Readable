import _ from 'lodash'

import {
    GET_COMENTS_BY_ID_SUCCESS,
} from '../constantes/Coment'




const coment = (state = [], action) => {
  switch (action.type) {
    case GET_COMENTS_BY_ID_SUCCESS:  {
      return { ...action.coment };
    }
    default:
      return state;
  }
}

export default coment

