"use strict";
const User = {
    _id: "sdsdf45345",
    fistname: "carlos",
    lastname: "perez",
    age: 45,
    email: "juan@mail.com",
};
const hola = (id) => {
    console.log(`${id}`);
    if (id)
        return User;
    return null;
};
hola("4567");
