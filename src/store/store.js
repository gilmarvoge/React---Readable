import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers'
import rootSaga from '../saga/index'
import { composeWithDevTools } from 'redux-devtools-extension'

/*
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
 return result
} 
*/

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware//,logger
    )
  )
)
//store.dispatch(setPosts())

sagaMiddleware.run(rootSaga)

export default store