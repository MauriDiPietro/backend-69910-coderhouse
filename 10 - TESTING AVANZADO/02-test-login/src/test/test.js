import { describe, test } from "node:test"; //en proximas versiones de node, van a ser obligatorio el prefijo node:
import assert from "node:assert";
import { fakerES as faker } from "@faker-js/faker";

const mockUser = () => {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ max: 100 }),
    password: faker.string.hexadecimal(),
  };
};

const apiURL = "http://localhost:8080/api";

describe("TESTS API", () => {
  let userRegister = null;
  let cookieToken = null;

  test("[POST] /register", async () => {
    const user = mockUser();

    userRegister = {
      email: user.email,
      password: user.password,
    };

    const response = await fetch(`${apiURL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const responseJson = await response.json();
    assert.ok(responseJson, "_id");
    assert.equal(response.status, 200);
    assert.rejects();
  });

  test("[POST] /login", async () => {
    const response = await fetch(`${apiURL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRegister),
      credentials: "include",
    });

    const responseJson = await response.json();
    assert.equal(response.status, 200);
    const setCookieHeader = response.headers.get("set-cookie");
    assert.ok(setCookieHeader);
    assert.ok(setCookieHeader.includes("token="));
    cookieToken = setCookieHeader.split(";")[0];
  });

  test("[GET] /current", async () => {
    const response = await fetch(`${apiURL}/users/current`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieToken,
      },
      credentials: "include",
    });

    const responseJson = await response.json();

    assert.equal(responseJson.data.email, userRegister.email);
  });
});
