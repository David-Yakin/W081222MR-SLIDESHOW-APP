import Picture from "../pictures/models/Picture.js";
import User from "../users/models/User.js";

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
    users: [
      {
        email: "regular@gmail.com",
        password: "Aa1234!",
        address: {
          state: "usa",
          country: "new-york",
          city: "new-york",
          street: "broadway",
          houseNumber: 5,
          zip: 123456,
        },
        phone: "050-0000000",
        name: {
          first: "regular",
          last: "user",
        },
      },
      {
        email: "business@gmail.com",
        password: "Aa1234!",
        address: {
          state: "",
          country: "israel",
          city: "tel-aviv",
          street: "shoham",
          houseNumber: 5,
          zip: 123456,
        },
        phone: "050-0000000",
        name: {
          first: "business",
          last: "user",
        },
      },
      {
        email: "admin@gmail.com",
        password: "Aa1234!",
        address: {
          state: "usa",
          country: "new-york",
          city: "new-york",
          street: "broadway",
          houseNumber: 5,
          zip: 123456,
        },
        phone: "050-0000000",
        name: {
          first: "admin",
          last: "user",
        },
      },
    ],
  };

  try {
    const pictures = database.pictures.map((picture, index, pictures) => {
      return new Picture(picture, pictures);
    });

    // const users = null;
    const users = database.users.map(user => {
      console.log(user);
      return new User(user, []);
    });

    return { pictures, users };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default initialData;
