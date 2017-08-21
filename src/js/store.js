import { createStore,applyMiddleware } from 'redux'
import allReducers  from './reducers/index'
import stateData from './../initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        allReducers,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState
    )

export default storeFactory