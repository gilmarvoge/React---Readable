import {
  GET_ALL_POSTS,
  ADICIONA_POST,
  GET_POST_BY_ID,
  EDIT_POST_BY_ID,
  SET_POSTS,
 
} from '../constantes/Post';

//funções actions  creators, especificam que ocorreu um evento e deve atualizar o estado.

export const getAllPosts = () => ({
    type: GET_ALL_POSTS,
    
  })

  export const adicionaPost = post  => ({
      type: ADICIONA_POST,
      post,
    })

    export const getPostById = id => ({
      type: GET_POST_BY_ID,
      id,
    });

    export const editPostById = post => ({
      type: EDIT_POST_BY_ID,
      post,
    });
  
 /* 
 export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
  
  })
  */




