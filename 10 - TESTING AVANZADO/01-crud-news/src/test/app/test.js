import { describe, test, before } from "node:test";
import assert from "node:assert";
import { fakerES as faker } from "@faker-js/faker";
import mongoose from "mongoose";

const createNewMock = () => {
  return {
    title: faker.lorem.lines(1),
    body: faker.lorem.lines({ min: 1, max: 5 }),
    author: faker.person.fullName(),
    image: faker.image.url(),
  };
};

const apiURL = "http://localhost:8080/news";

describe("Tests API News", () => {
  before(async () => {
    // await mongoose.connection.collections["news"].drop();
    await fetch(apiURL, { method: 'DELETE' })
  });

  test("[GET] /news", async () => {
    const response = await fetch(apiURL);
    const responseGet = await response.json();
    assert.strictEqual(Array.isArray(responseGet), true);
    assert.equal(responseGet.length, 0);

    const doc = createNewMock();

    const responsePost = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePostJson = await responsePost.json();
    assert.ok(responsePostJson, "_id");
    assert.equal(responsePost.status, 200);

    const response2 = await fetch(apiURL);
    const responseGet2 = await response2.json();

    assert.equal(responseGet2.length, 1);
  });

  test("[POST] /news", async () => {
    const doc = createNewMock();

    const responsePost = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePostJson = await responsePost.json();
    assert.ok(responsePostJson, "_id");
    assert.equal(responsePost.status, 200);
  });

  test("[GET] /news/{id}", async () => {
    const doc = createNewMock();

    const responsePost = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePostJson = await responsePost.json();
    assert.ok(responsePostJson, "_id");
    assert.equal(responsePost.status, 200);
    const responseGetId = await fetch(`${apiURL}/${responsePostJson._id}`);
    const responseGetIdJson = await responseGetId.json();
    assert.equal(responseGetId.status, 200);
    const idFaker = "507f191e810c19729de860ea";
    const getIdFail = await fetch(`${apiURL}/${idFaker}`);
    const getIdFailJson = await getIdFail.json();
    const responseGetFail = getIdFailJson.msg;
    assert.equal(getIdFail.status, 404);
    assert.equal(
      responseGetFail,
      `No se encontró el id ${idFaker} en la base de datos.`
    );
  });

  test("[UPDATE] /news/{id}", async () => {});

  test("[DELETE] /news/{id}", async () => {});
});
