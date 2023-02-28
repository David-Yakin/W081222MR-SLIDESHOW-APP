import { randomNumBetween } from "../../utils/algoMethods.js";

class Picture {
  #id;
  url;
  alt;
  credits;
  #price;
  #createdAt;
  likes = [];
  category;
  #user_id;

  constructor(picture, pictures = []) {
    const { url, alt, credits, price, category, user_id } = picture;
    if (!url || !alt || !credits || !price || !user_id)
      throw new Error("Bad Request!");

    this.#id = this.generateId(pictures);
    this.url = url;
    this.alt = alt;
    this.credits = credits;
    this.#price = price;
    this.category = category || "";
    this.#user_id = user_id;
    this.#createdAt = new Date();
  }

  generateId(arrayOfPictures) {
    if (arrayOfPictures.length >= 8_999_999)
      throw new Error("max pics in array!");

    const randomNumber = randomNumBetween(1_000_000, 9_999_999);
    const pic = arrayOfPictures.findIndex(pic => pic._id === randomNumber);
    if (pic === -1) return randomNumber;
    this.generateId(arrayOfPictures);
  }

  get _id() {
    return this.#id;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get price() {
    return this.#price;
  }

  get user_id() {
    return this.#user_id;
  }
}

// try {
//   const pic = new Picture({
//     url: "ff",
//     alt: "dd",
//     credits: "xx",
//     price: 5_000,
//     user_id: "ddd545d",
//     // category: "school",
//   });

//   console.log(pic);
// } catch (error) {
//   error.status = 400;
//   //   console.dir(error);

//   if (error.status >= 400) console.log("error bla bla");
//   //   console.log(error.message);
//   //   console.log(error.status);
// }

export default Picture;
