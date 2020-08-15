import Search from "./models/Search";
// import Recipe from './models/Recipe';
// import 'idempotent-babel-polyfill';
import * as searchView from './views/searchView';
import {elements} from "./views/base";


/*
*- Search object
*- Current recipe object
*- Shopping list object
 */

const state = {};
const controlSearch = async () => {
//get query from the view
  const query = searchView.getInput();
  console.log//TODO

  if (query) {
     //new search object and add to state
     state.search = new Search(query);
     // prepare UI for results

      //search for recipes
     await state.search.getResults();

      //render the results on UI
      console.log(state.search.result);
  }
}

elements.searchForm.addEventListener('submit', event => {
event.preventDefault();
controlSearch();
});

search.getResults()
