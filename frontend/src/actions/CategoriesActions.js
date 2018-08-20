

import {

  GET_ALL_CATEGORIES,
  GET_POSTS_BY_CATEGORY
 
} from '../constantes/Category';

//funções actions  creators, especificam que ocorreu um evento e deve atualizar o estado.

export const getAllCategories = () => ({
    type: GET_ALL_CATEGORIES
})

export const getPostsByCategory = (category) => ({
  type: GET_POSTS_BY_CATEGORY,
  category,
})



