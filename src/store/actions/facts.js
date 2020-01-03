export function toggleJoke(joke) {
  return {
    type: "TOGGLE_JOKE",
    joke
  };
}

export function loadCategories(categories) {
  return {
    type: "LOAD_CATEGORIES",
    categories
  };
}
