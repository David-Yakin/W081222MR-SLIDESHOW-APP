import PAGES from "./pageModel.js";
import {
  ABOUT_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,
  HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
  RETURN_TO_HOME_PAGE_LINK,
  SIGNUP_PAGE_LINK,
} from "../services/domService.js";
import { onChangePage } from "./router.js";
/********* האזנה לאירועים **********/

// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PIC_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.CREATE_PIC)
);
SIGNUP_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.SIGNUP));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
RETURN_TO_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.HOME)
);
