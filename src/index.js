import {createStore} from "redux";

document.getElementById('count').innerText = `0`;

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'inc':
        return state + 1;
        case 'dec':
            return state - 1;
        case 'ref':
            return state = 0;
        default:
            return state;
    }
}

const store = createStore(reducer, 0);

store.subscribe(() => {
    return document.getElementById('count').innerText = `${store.getState()}`;
});

document.getElementById('countPlus').addEventListener('click', () => store.dispatch({type: 'inc'}));
document.getElementById('countMinus').addEventListener('click', () => store.dispatch({type: 'dec'}));
document.getElementById('countRefresh').addEventListener('click', () => store.dispatch({type: 'ref'}));
