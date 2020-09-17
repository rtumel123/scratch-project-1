// import actionType constants
import * as types from './actionTypes'


//export functions that return action objects
  //objects have two props
  //type: a reference to the consts, tells which reducer method to use
  //payload: whatever data the reducer will need
  


export const retrieveRecipe = (recipeObj) => ({
  type: types.RETRIEVE_RECIPE,
  payload: recipeObj
})

export const setSearch = (name) => ({
  type: types.SET_SEARCH,
  payload: name
});

export const createRecipe = (addRecipeObj) => ({
  type: types.CREATE_RECIPE,
  payload: addRecipeObj
})

export const showModal = () => ({
  type: types.SHOW_MODAL,
  payload: null
})

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
  payload: null
})

export const setModal = () => ({
  type: types.SET_MODAL,
  payload: null
})


export const addName = (name) => ({
  type: types.ADD_NAME,
  payload: name
})

export const addInstructions = (instructions) => ({
  type: types.ADD_INSTRUCTIONS,
  payload: instructions
})

export const addIngredients = (ingredients) => ({
  type: types.ADD_INGREDIENTS,
  payload: ingredients
})

export const addImageLink = (imageUrl) => ({
  type: types.ADD_IMAGELINK,
  payload: imageUrl
})















export const retrieveAllRecipes = () => ({
  type: types.HOME_RECIPES,
})
//this action will get dispatched if our fetch request errors doesn't return data
export const itemsHasErrored = (bool) => ({
  type: types.ITEMS_HAS_ERRORED,
  payload: bool
})

//this action will be dispatched twice per fetch request:
  // first: at the same time our fetch request is invoked
  // second: once our request returns either an error or valid data
export const itemsIsLoading = (bool) => ({
  type: types.ITEMS_IS_LOADING,
  payload: bool
})

//this action will be dispatched from our async fetch request, and will return our fetched data to state
export const itemsFetchDataSuccess = (data) => ({
  type: types.ITEMS_FETCH_DATA_SUCCESS,
  payload: data
})

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
      })
      .then((response) => response.json())
      .then((items) => {
        console.log(items)
        dispatch(itemsFetchDataSuccess(items))
      })
      .catch(() => dispatch(itemsHasErrored(true)));
    }
}
export const postSuccess = () => ({
  type: types.POST_SUCCESS,
})

export const addRecipe = (data) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch('/api', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // dispatch(postSuccess())
      })
      .catch(() => dispatch(itemsHasErrored(true)));
    }
}
