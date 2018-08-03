
import {
  GET_ALL_COMMENTS,
  ADICIONA_COMMENT,
  GET_COMMENTS_BY_ID,
  EDIT_COMMENT_BY_ID,

 
} from '../constantes/Comment';

//funções actions  creators, especificam que ocorreu um evento e deve atualizar o estado.

export const getAllComments = () => ({
    type: GET_ALL_COMMENTS,
    
  })

  export const adicionaComment = comment  => ({
      type: ADICIONA_COMMENT,
      comment,
    })

    export const getCommentsById = id => ({
      type: GET_COMMENTS_BY_ID,
      id,
    });


    export const editCommentById = comment => ({
      type: EDIT_COMMENT_BY_ID,
      comment,
    });





