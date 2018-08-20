import { idGenerate } from './helpers'
const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random.toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'token'
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const adicionaPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
      'timestamp': Date.now(),
      'id': idGenerate()
    })
  }).then(res => res.json())

export const getPostById = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())


export const updatePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: post.author,
      title: post.title,
      body: post.body,
    })
  }).then(res => res.json())


export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const voteUpDownPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())



export const getAllCommentsByPost = ({ id }) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())

export const addComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...comment,
      'timestamp': Date.now(),
      'id': idGenerate(),

    })
  }).then(res => res.json())

export const getCommentById = (comment) =>
  fetch(`${api}/comments/${comment.id}`)
    .then(res => res.json())


export const voteUpDownComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())


export const updateComment = ({ comment }) => 
   fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: comment.author,
      body: comment.body,
    })
  }).then(res => res.json())
    
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
