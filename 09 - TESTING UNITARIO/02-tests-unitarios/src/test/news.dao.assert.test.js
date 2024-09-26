import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import assert from "node:assert";
import mongoose from "mongoose";

describe("tests unitarios de dao news", () => {
  let newsDao;
  before(async () => {
    newsDao = new DaoMongo();
    DaoMongo.init();
    await mongoose.connection.collections["news"].drop();
    console.log("se limpio la coleccion");
  });

  it("deberia retornar todas las noticias de la coleccion", async () => {
    const news = await newsDao.getAllNews();
    assert.equal(Array.isArray(news), true);
    assert.equal(news.length === 0, true);
    assert.equal(news.length, 0);
  });

  it("deberia agregar una noticia", async () => {
    const obj = {
      title: "titulo1",
      body: "body of new.........",
      author: "Carlos Perez",
      image: ".............",
    };
    const response = await newsDao.createNew(obj);
    const news = await newsDao.getAllNews();
    assert.ok(response._id); //fail
    assert.equal(response.title, obj.title);
    assert.equal(typeof obj.body, "string");
    // expect(typeof obj.body).to.be.equal('string');
    assert.equal(news.length, 1);
  });

  it("deberia encontrar una noticia por id", async () => {
    const obj = {
      title: "titulo2",
      body: "body of new.........",
      author: "Carlos Perez",
      image: ".............",
    };
    const response = await newsDao.createNew(obj);
    assert.ok(response._id);
    const docNew = await newsDao.getNew(response._id);
    assert.equal(docNew._id.toString(), response._id.toString());
  });
});
