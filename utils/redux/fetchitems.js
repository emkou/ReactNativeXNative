import { makeRequest } from '../http';

//ACTIONS
export const fetchedItems = items => ({
  type: 'FETCH_ITEMS',
  payload: { items }
});

export const fetchItems = () => async dispatch => {
  try {
    const items = await makeRequest('/v2/5d5fcee22f00007f225f3953?mocky-delay=3000ms').then(items => {
      return items;
    });
    return dispatch(fetchedItems(items));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER

const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case 'FETCH_ITEMS': {
      return {
        ...state,
        items: action.payload
      };
    }

    default:
      return state;
  }
}
