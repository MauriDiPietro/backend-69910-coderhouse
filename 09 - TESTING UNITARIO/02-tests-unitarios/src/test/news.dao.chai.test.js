import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import { expect } from "chai";
import mongoose from "mongoose";

describe("tests unitarios de dao news", () => {
  let newsDao;
  before(async () => {
    newsDao = new DaoMongo();
    DaoMongo.init();   
    await mongoose.connection.collections["news"].drop();
    console.log('se limpio la coleccion')
  });

  it("deberia retornar todas las noticias de la coleccion", async () => {
    const news = await newsDao.getAllNews();
    expect(Array.isArray(news)).to.be.equal(true);
    expect(news.length === 0).to.be.equal(true);
    expect(news).to.have.length(0);
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
    expect(response).to.have.property("_id");
    expect(response.title).to.be.equal(obj.title);
    expect(response.body).to.be.equal(obj.body);
    expect(response.author).to.be.equal(obj.author);
    expect(typeof obj.body === "string").to.be.equal(true);
    // expect(typeof obj.body).to.be.equal('string');
    expect(news).to.have.length(1);
  });

  it("deberia encontrar una noticia por id", async () => {
    const obj = {
      title: "titulo2",
      body: "body of new.........",
      author: "Carlos Perez",
      image: ".............",
    };
    const response = await newsDao.createNew(obj);
    expect(response).to.have.property("_id");
    const docNew = await newsDao.getNew(response._id);
    expect(docNew._id.toString()).to.equal(response._id.toString());
  });
});
