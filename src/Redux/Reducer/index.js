import { OPEN_SECTION } from "../Actions/ActionNames";

const initialState = {
  section: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
