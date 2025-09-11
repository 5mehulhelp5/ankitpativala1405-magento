import { createStore } from 'redux'
import counterReducer from './counterreducer'

const store = createStore(counterReducer)

export default store