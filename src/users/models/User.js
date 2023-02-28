class User {
  #id;
  #name;
  address;
  phone;
  #email;
  #password;
  #createdAt;
  #isAdmin = false;
  #isBusiness = false;

  constructor(user, users = []) {
    const { address, phone } = user;
    // this.address = address;
    const { state, country, city, street, houseNumber, zip } = address;
    this.address = { state, country, city, street, houseNumber, zip };
    this.phone = phone;
  }
}

export default User;

const test = {
  address: {
    state: "usa",
    country: "new-york",
    city: "new-york",
    street: "brodway",
    houseNumber: 5,
    zip: 123456,
  },
  phone: "050-0000000",
};

const user = new User(test);

console.log(user);
