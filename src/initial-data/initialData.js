import Picture from "../pictures/models/Picture.js";

const initialData = () => {
  const database = {
    pictures: [
      {
        url: "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg",
        alt: "zebra",
        credits: "Jessica rabbit",
        price: 1_000,
        user_id: "123456",
      },
      {
        url: "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg",
        alt: "cat",
        credits: "hillary clinton",
        price: 2_000,
        user_id: "123456",
      },
      {
        url: "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
        alt: "pigeon",
        credits: "shula zaken",
        price: 3_000,
        user_id: "123456",
      },
    ],
    users: [],
  };

  try {
    const pictures = database.pictures.map((picture, index, pictures) => {
      return new Picture(picture, pictures);
    });

    const users = null;
    return { pictures, users };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default initialData;
