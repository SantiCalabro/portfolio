import { OPEN_SECTION, SET_LANG } from "../Actions/ActionNames";

const initialState = {
  section: "",
  lang: "Español",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
