import "./routes/links.js";
import setCounter from "./pictures/helpers/setCounter.js";
import renderSlider from "./pictures/components/renderSlider.js";
import { SLIDER_NEXT_BTN, SLIDER_PREV_BTN } from "./services/domService.js";
import onChangeSliderPic from "./pictures/helpers/onChangeSliderPic.js";

const pictures = [
  {
    url: "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg",
    alt: "zebra",
    credits: "Jessica rabbit",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg",
    alt: "cat",
    credits: "hillary clinton",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
    alt: "pigeon",
    credits: "shula zaken",
  },
];

// window.pictures = [
//   {
//     url: "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg",
//     alt: "zebra",
//     credits: "Jessica rabbit",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg",
//     alt: "cat",
//     credits: "hillary clinton",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
//     alt: "pigeon",
//     credits: "shula zaken",
//   },
// ];

let counter = setCounter(pictures, 0);
renderSlider(pictures);

SLIDER_NEXT_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "next"))
);
SLIDER_PREV_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "prev"))
);
