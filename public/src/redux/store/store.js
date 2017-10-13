import { createStore } from 'redux';

import reducer from '../reducer/reducer';


var store = createStore(reducer)


// store.dispatch({
//     type: 'AN_ACTION'
// })

export default store;