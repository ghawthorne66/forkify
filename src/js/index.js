import 'idempotent-babel-polyfill';
import Search from "./models/Search";
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';


/*
*- Search object
*- Current recipe object
*- Shopping list object
 */

const state = {};
/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

      try {
          // 4) Search for recipes
          await state.search.getResults();

          // 5) Render results on UI
          clearLoader();
          searchView.renderResults(state.search.result);
      } catch (err) {
          alert('Something wrong with the search...');
          clearLoader();
      }
  }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {

        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(state.search.result,goToPage)
    }
});


// search.getResults()

/**
 * RECIPE CONTROLLER
 */
const r = new Recipe(46956);
r.getRecipe();
console.log(r)
