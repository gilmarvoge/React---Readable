import { GET_ALL_CATEGORIES, SET_CATEGORIES } from "../constantes/Post";

const categories = (state = {}, action) => {
    switch (action.type) {
      case SET_CATEGORIES: {
        return action.categories
      }
      default:
        return state;
    }
  }
  

export default categories


