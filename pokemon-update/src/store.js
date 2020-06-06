import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import pokemon from './ducks/pokemon.js';

const middlewareEnhancer = applyMiddleware(promise)

export default createStore(pokemon, undefined, middlewareEnhancer);