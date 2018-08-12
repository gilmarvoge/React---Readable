import { GET_ALL_CATEGORIES_SUCCESS } from "../constantes/Category";

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS: {
      return action.categories
    }
    default:
      return state;
  }
}

export default categories


