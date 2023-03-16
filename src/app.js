import "./routes/links.js";
import renderSlider from "./pictures/components/renderSlider.js";
import "./pictures/models/Picture.js";
import "./users/models/User.js";
import initialData from "./initial-data/initialData.js";
// import "./pictures/services/pictureService.js";
// import userService from "./users/services/userService.js";

// window.user = null
window.pictures = initialData().pictures;
renderSlider(pictures, 0);
