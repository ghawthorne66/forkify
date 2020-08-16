import {elements, renderLoader, clearLoader} from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';
export const clearResults = () => elements.searchResList.innerHTML = '';

/*
//Pasta with tomato and spinach
accumulator: 0 / accumulator + current.length = 5/ new title has the word ['Pasta']
accumulator: 5 / accumulator + current.length = 9/ new title has the word ['Pasta' 'with']
accumulator: 9 / accumulator + current.length = 15/ new title has the word ['Pasta' 'with' 'tomato']
 */
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
    title.split(' ').reduce((accumulator, current) => {
    if (accumulator + current.length <= limit) {
        newTitle.push(current)
    }
    return accumulator + current.length;
    }, 0);
    //return the result
    return `${newTitle.join(' ')} ...`;
    }
    return title;
}

const renderRecipe = recipe => {
    const markup = `
  <li>
                <a class="results__link" href="#${recipe.recipe_id}">
                    <figure class="results__fig">
                        <img src="${recipe.image_url}" alt="${recipe.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                    </div>
                </a>
            </li>
`;
    elements.searchResList.insertAdjacentHTML('beforeend', markup)
}

export const renderResults = recipes => {
    recipes.forEach(element => renderRecipe(element));
}