interface Usuario {
  fistname: string;
  lastname: string;
  age: number;
  email: string;
}

type User = {
  fistname: string;
  lastname: string;
  age: number;
  email: string;
};

interface UserDB extends User {
  _id: string;
}

const User: UserDB = {
  _id: "sdsdf45345",
  fistname: "carlos",
  lastname: "perez",
  age: 45,
  email: "juan@mail.com",
};

const hola = (id: string): null | Usuario => {
    console.log(`${id}`)
  if (id) return User;
  return null;
};

hola("4567");





