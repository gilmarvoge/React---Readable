
import {
  GET_ALL_COMENTS,
  ADICIONA_COMENT,
  GET_COMENTS_BY_ID,
  EDIT_COMENT_BY_ID,
  SET_COMENTS,
 
} from '../constantes/Coment';

//funções actions  creators, especificam que ocorreu um evento e deve atualizar o estado.

export const getAllComents = () => ({
    type: GET_ALL_COMENTS,
    
  })

  export const adicionaComent = coment  => ({
      type: ADICIONA_COMENT,
      coment,
    })

    export const getComentsById = id => ({
      type: GET_COMENTS_BY_ID,
      id,
    });

    export const editComentById = coment => ({
      type: EDIT_COMENT_BY_ID,
      coment,
    });





