//this file shows the basics of redux and is run using node
// to run: node then the file name.
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// reducer
// note you only ever have one root reducer
// the reducer is the only thing that can update the state
// the reducer is simply a function
// takes the current state and an action as paramenters and returns the updated state.
// do not mutate the original state
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        // copy original state with spread operator
        return {
            ...state,
            // then overwrite the property you want to change
            counter: state.counter + 1
        };
    }
    if (action.type === 'INC_COUNTER') {
        // copy original state with spread operator
        return {
            ...state,
            // then overwrite the property you want to change
            counter: state.counter + action.value
        };
    }
    return state;
};


//store
// takes a reducer as the parameter
const store = createStore(rootReducer);
console.log(store.getState());


// subscription
// subscriptions tell you when the state has changed and therefore when you need to retreive the new state.
// the subscribe function takes a callback function that will be exicuted whenever the state is updated.
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// dispatching action
// the dispatch function takes an object as a parameter that MUST have 'type' as a property
// convention is to use all upper case and be descriptive
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());




