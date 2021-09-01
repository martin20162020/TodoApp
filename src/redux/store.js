import { applyMiddleware, createStore, compose } from "redux";
import { saveState, loadState } from "./localStorage";
import thunk from "redux-thunk";
import RootReducer from './reducers';

const store = createStore(RootReducer, loadState(),
    compose(applyMiddleware(thunk)));


store.subscribe(()=>{
    saveState({
        todos: store.getState().todos
    })
})

export default store;