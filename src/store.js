import { legacy_createStore as createStore } from "redux";

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return[
        ...state,
        action.payload,
      ]
      default: 
        return state
    }
}

const store = createStore(reducer)

export { store }