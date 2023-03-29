const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.number()

    };
    
    return newFakeUser;
};

const createCompany = () => {
   const newFakeCompany = {
      _id: faker.datatype.number(),
      name: faker.company.name(),
      address: faker.address.streetAddress(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()

   };
   return newFakeCompany;
};

const createUsersCompany = () => {
   const newUserToComp = {
      _id: faker.datatype.number(),
      name: faker.company.name(),
      address: faker.address.streetAddress(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),

   password: faker.internet.password(),
   email: faker.internet.email(),
   phoneNumber: faker.phone.phoneNumber(),
   lastName: faker.name.lastName(),
   firstName: faker.name.firstName(),
   _id: faker.datatype.number()

   };
   return newUserToComp;
};

const newFake = createUser();
const newFakeComp = createCompany();

const allFakes = createUsersCompany();

app.get("/api/users", (req, res) => {
   res.json( newFake );
});

app.get("/api/company", (req, res) => {
   res.json( newFakeComp );
});

app.get("/api/user/company", (req, res) => {
   res.json( allFakes  );
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );