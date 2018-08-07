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
  GET_ALL_POSTS_SUCCESS,
  ADICIONA_POST,
  ADICIONA_POST_SUCCESS,
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  UPVOTE_POST,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST,
  DOWNVOTE_POST_SUCCESS,
  GET_ALL_CATEGORIES,
  SET_CATEGORIES,
  EDIT_POST_BY_ID,
  EDIT_POST_BY_ID_SUCCESS

} from '../constantes/Post';

import {
  GET_COMMENTS_BY_ID,
  GET_COMMENTS_BY_ID_SUCCESS,
  ADICIONA_COMMENT,
  UPVOTE_COMMENT,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT,
  DOWNVOTE_COMMENT_SUCCESS,

} from '../constantes/Comment';


function* fetchAllCategories() {
  const categories = yield call(readableAPI.getAllCategories)
  yield put({
    type: SET_CATEGORIES,
    categories,
  });
}

function* fetchAllPosts() {
  const posts = yield call(readableAPI.getAllPosts)
  yield put({
    type: GET_ALL_POSTS_SUCCESS,
    posts,
  });
}

function* adicionaPost(action) {
  const post = yield call(readableAPI.adicionaPost, action.post);
  yield put({
    type: ADICIONA_POST_SUCCESS,
    post,
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

function* voteUpPost({ id, option }) {
  const post = yield call(readableAPI.voteUpDownPost, id, option);
  yield put({
    type: UPVOTE_POST_SUCCESS,
    post,
  });
}

function* downVotePost({ id, option }) {
  const post = yield call(readableAPI.voteUpDownPost, id, option);
  yield put({
    type: DOWNVOTE_POST_SUCCESS,
    post,
  });
}


function* getCommentsById(postId) {
  const comments = yield call(readableAPI.getAllCommentsByPost, postId)
  yield put({
    type: GET_COMMENTS_BY_ID_SUCCESS,
    comments,
  });
}

function* adicionaComment(action) {
  const comment = yield call(readableAPI.addComment, action.comment);
  const comments = yield call(readableAPI.getAllCommentsByPost, comment.parentId);
  yield put({
    type: GET_POST_BY_ID,
    id: comment.parentId,
  });
  yield put({
    type: GET_COMMENTS_BY_ID_SUCCESS,
    comments,
  });
}

function* upVoteComment({ id, option }) {
  const comment = yield call(readableAPI.voteUpDownComment, id, option);
  yield put({
    type: UPVOTE_COMMENT_SUCCESS,
    comment,
  });
}

function* downVoteComment({ id, option }) {
  const comment = yield call(readableAPI.voteUpDownComment, id, option);
  yield put({
    type: DOWNVOTE_COMMENT_SUCCESS,
    comment,
  });
}



export default function* rootSaga() {
  yield takeEvery(GET_ALL_POSTS, fetchAllPosts)
  yield takeEvery(ADICIONA_POST, adicionaPost),
    yield takeEvery(EDIT_POST_BY_ID, updatePost),
    yield takeEvery(GET_POST_BY_ID, getPostById),
    yield takeEvery(UPVOTE_POST, voteUpPost),
    yield takeEvery(DOWNVOTE_POST, downVotePost),
    yield takeEvery(GET_ALL_CATEGORIES, fetchAllCategories),
    yield takeEvery(GET_COMMENTS_BY_ID, getCommentsById),
    yield takeEvery(ADICIONA_COMMENT, adicionaComment),
    yield takeEvery(UPVOTE_COMMENT, upVoteComment),
    yield takeEvery(DOWNVOTE_COMMENT, downVoteComment)
  }


 // yield takeEvery(GET_ALL_POSTS_SUCCESS, fetchAllPosts)






