import _ from 'lodash';

const idGenerate = () => {
  return s4() + s4() + s4() + s4()
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}



const PostsSorted = (posts, order) => {
  if (order === 'date') {
    return _.orderBy(posts, ['timestamp', 'voteScore'], ['desc', 'desc']);
  } else if (order === 'score') {
    return _.orderBy(posts, ['voteScore', 'timestamp'], ['desc', 'desc']);
  }
  return posts;
};

export { idGenerate, PostsSorted };




