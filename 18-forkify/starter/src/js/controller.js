const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const url =
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886';
// 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc13';

const showRecipe = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = {
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      image: recipe.image,
      sourceUrl: recipe.image_url,
    };
    console.log(recipe);

    console.log(data);
  } catch (err) {
    alert(err);
  }
};

showRecipe();
