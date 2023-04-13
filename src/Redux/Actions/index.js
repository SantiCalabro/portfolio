import { OPEN_SECTION, SET_LANG } from "./ActionNames";

export const openSection = payload => {
  return { type: OPEN_SECTION, payload };
};
export const setLanguage = payload => {
  return { type: SET_LANG, payload };
};
