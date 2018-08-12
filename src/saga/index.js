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


import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_SUCCESS
} from '../constantes/Category';




function* getAllCategories() {
  const categories = yield call(readableAPI.getAllCategories)
  yield put({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories,
  });
}

function* getAllPosts() {
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

function* getPostById({ id }) { //entre chaves pega a ID e não o objeto
  console.log("idddd"+id)
    const post = yield call(readableAPI.getPostById, id);
  yield put({
    type: GET_POST_BY_ID_SUCCESS,
    post,
  });
}

function* getPostsByCategory(action) {
  const { category } = action
  const posts = yield call(readableAPI.getPostsByCategory, category)
  yield put({
    type: GET_ALL_POSTS_SUCCESS,
    posts,
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

function* voteUpPost({ id, option} ) {
  const post = yield call(readableAPI.voteUpDownPost, id, option);
  yield put({
    type: UPVOTE_POST_SUCCESS,
    post,
  });
  yield put({
    type: GET_POST_BY_ID_SUCCESS,
    post,
  });
}

function* downVotePost ({id, option }) {
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
  const comments = yield call(readableAPI.getAllCommentsByPost, {id:comment.parentId});
  yield put({
    type: GET_POST_BY_ID,
    id: comment.parentId,
  });
  yield put({
    type: GET_COMMENTS_BY_ID_SUCCESS,
    comments,
  });
}

function* upVoteComment( id, option ) {
  const comment = yield call(readableAPI.voteUpDownComment, id, option);
  yield put({
    type: UPVOTE_COMMENT_SUCCESS,
    comment,
  });
}

function* downVoteComment( id, option ) {
  const comment = yield call(readableAPI.voteUpDownComment, id, option);
  yield put({
    type: DOWNVOTE_COMMENT_SUCCESS,
    comment,
  });
}



export default function* rootSaga() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts)
  yield takeEvery(ADICIONA_POST, adicionaPost),
    yield takeEvery(EDIT_POST_BY_ID, updatePost),
    yield takeEvery(GET_POST_BY_ID, getPostById),
    yield takeEvery(GET_POSTS_BY_CATEGORY, getPostsByCategory),
    yield takeEvery(UPVOTE_POST, voteUpPost),
    yield takeEvery(DOWNVOTE_POST, downVotePost),
    yield takeEvery(GET_ALL_CATEGORIES, getAllCategories),
    yield takeEvery(GET_COMMENTS_BY_ID, getCommentsById),
    yield takeEvery(ADICIONA_COMMENT, adicionaComment),
    yield takeEvery(UPVOTE_COMMENT, upVoteComment),
    yield takeEvery(DOWNVOTE_COMMENT, downVoteComment)
 }


 // yield takeEvery(GET_ALL_POSTS_SUCCESS, fetchAllPosts)






