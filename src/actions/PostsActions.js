import {
  GET_ALL_POSTS,
  ADICIONA_POST,
  GET_POST_BY_ID,
  EDIT_POST_BY_ID,
  GET_ALL_POSTS_SUCCESS,
  UPVOTE_POST,
  DOWNVOTE_POST,
 
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
  
    export const upVotePost = id => ({
      type: UPVOTE_POST,
      id,
      option: 'upVote',
    });
    
    export const downVotePost = id => ({
      type: DOWNVOTE_POST,
      id,
      option: 'downVote',
    });

 /* 
 export const setPosts = (posts) => ({
    type: GET_ALL_POSTS_SUCCESS,
    posts
  
  })
  */




