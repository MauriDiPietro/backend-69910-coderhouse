import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import assert from "node:assert";
import { describe, before, test } from "node:test";
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

describe("tests unitarios de dao news", () => {
  let newsDao;
  before(async () => {
    newsDao = new DaoMongo();
    DaoMongo.init();
    await mongoose.connection.collections["news"].drop();
    console.log("se limpio la coleccion");
  });

  test("deberia retornar todas las noticias de la coleccion", async () => {
    const news = await newsDao.getAllNews();
    assert.equal(Array.isArray(news), true);
    assert.equal(news.length, 0);
    // console.log(news)
    // assert.equal(news, []);
    assert.notEqual(news, {});
    assert.doesNotThrow(() => news);
  });

  test("deberia agregar una noticia", async () => {
    const obj = createNewMock();
    const response = await newsDao.createNew(obj);
    const news = await newsDao.getAllNews();
    assert.ok(response, '_id'); //fail
    assert.equal(response.title, obj.title);
    assert.equal(typeof obj.body, "string");
    // expect(typeof obj.body).to.be.equal('string');
    assert.equal(news.length, 1);
  });

  test("deberia encontrar una noticia por id", async () => {
    const obj = createNewMock();
    const response = await newsDao.createNew(obj);
    assert.ok(response._id);
    const docNew = await newsDao.getNew(response._id);
    assert.equal(docNew._id.toString(), response._id.toString());
  });
});
