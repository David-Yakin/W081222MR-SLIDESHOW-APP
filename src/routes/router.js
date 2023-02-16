import PAGES from "../models/pageModel.js";
import { HOME_PAGE, ABOUT_PAGE } from "../services/domService.js";

export const onChangePage = page => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
};
