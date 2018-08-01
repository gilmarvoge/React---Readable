/*import { all } from 'redux-saga/effects';
import PostsSaga from './PostsSaga';

export default function* SagaRedux() {
  yield all([...PostsSaga]);
}
*/

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as readableAPI from '../utils/readableAPI'

import {
  GET_ALL_POSTS,
  SET_POSTS,
  ADICIONA_POST,
  ADICIONA_POST_SUCCESS,
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_CATEGORIES,
  SET_CATEGORIES,
  EDIT_POST_BY_ID,
  EDIT_POST_BY_ID_SUCCESS
} from '../constantes/Post';

import {
  GET_COMMENTS_BY_ID,
  GET_COMMENTS_BY_ID_SUCCESS

} from '../constantes/Comment';



function* fetchAllPosts() {
  const posts = yield call(readableAPI.getAllPosts)
  yield put({
    type: SET_POSTS,
    posts,
  });
}

function* adicionaPost(action) {
  const { post } = action
  const adicionaPost = yield call(readableAPI.adicionaPost, post);
  yield put({
    type: ADICIONA_POST_SUCCESS,
    adicionaPost,
  });
}


function* fetchAllCategories() {
  const categories = yield call(readableAPI.getAllCategories)
  yield put({
    type: SET_CATEGORIES,
    categories,
  });
}

function* getPostById({ id }) {
  const post = yield call(readableAPI.getPostById, id);
  yield put({
    type: GET_POST_BY_ID_SUCCESS,
    post,
  });
}

function* updatePost(action) {
  const { post } = action
  const Updatepost = yield call(readableAPI.updatePost, post)
  yield put({
    type: EDIT_POST_BY_ID_SUCCESS,
    Updatepost,
  });
}

function* getCommentsById( postId ) {

  const comments = yield call(readableAPI.getAllCommentsByPost, postId)
  yield put({
    type: GET_COMMENTS_BY_ID_SUCCESS,
   comments,
      });
}







export default function* rootSaga() {
  yield takeEvery(GET_ALL_POSTS, fetchAllPosts)
  yield takeLatest(ADICIONA_POST, adicionaPost),
  yield takeLatest(EDIT_POST_BY_ID, updatePost),
  yield takeLatest(GET_POST_BY_ID, getPostById),
  yield takeEvery(GET_ALL_CATEGORIES, fetchAllCategories),
  yield takeLatest(GET_COMMENTS_BY_ID,  getCommentsById)


  // yield takeEvery(SET_POSTS, fetchAllPosts)
}





