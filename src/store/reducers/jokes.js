const INITIAL_STATE = {
  categories: [],
  categorie: "",
  joke: {}
};

export default function jokes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOAD_CATEGORIES":
      return { ...state, categories: action.list };

    case "TOGGLE_JOKE":
      return { ...state, joke: action.joke };

    case "TOGGLE_CATEGORIE":
      return { ...state, categorie: action.categorie };

    default:
      return state;
  }
}
