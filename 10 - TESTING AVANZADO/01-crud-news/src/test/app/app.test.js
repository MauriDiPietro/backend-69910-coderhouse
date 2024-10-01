import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";

const createNewMock = () => {
  return {
    title: faker.lorem.lines(1),
    body: faker.lorem.lines({ min: 1, max: 5 }),
    author: faker.person.fullName(),
    image: faker.image.url(),
  };
};

describe("Tests API News", () => {
  beforeAll(async () => {
    await mongoose.connection.collections["news"].drop();
  });

  test("[POST] /news", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    // console.log(response.body)
    expect(response.body._id).toBeDefined();
    expect(response.body).toHaveProperty("_id");
    expect(response.body.title).toBe(doc.title);
    expect(response.body.body).toEqual(doc.body);
    expect(response.statusCode).toBe(200);
  });

  test("[GET] /news", async () => {
    const response = await request(app).get("/news");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
    const dateResponse = response.body[0].date;
    expect(dateResponse).toEqual(expect.stringContaining("2024"));
  });

  test("[GET] /news/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    expect(response.body._id).toBeDefined();
    const responseGetId = await request(app).get(`/news/${response.body._id}`);
    expect(responseGetId.statusCode).toBe(200);
    const idFaker = "507f191e810c19729de860ea";
    const getIdFail = await request(app).get(`/news/${idFaker}`);
    const responseGetFail = getIdFail.body.msg;
    expect(getIdFail.statusCode).toBe(404);
    expect(responseGetFail).toEqual(
      `No se encontró el id ${idFaker} en la base de datos.`
    );
  });

  test("[UPDATE] /news/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    expect(response.body._id).toBeDefined();
    const docUpd = createNewMock();
    const responsePut = await request(app)
      .put(`/news/${response.body._id}`)
      .send(docUpd);
    expect(responsePut.body._id).toBeDefined();
    expect(responsePut.statusCode).toBe(200);
  });

  test("[DELETE] /news/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    expect(response.body._id).toBeDefined();
    const responseDel = await request(app).delete(`/news/id/${response.body._id}`);
    expect(responseDel.statusCode).toBe(200);
    const responseGetById = await request(app).get(
      `/news/${response.body._id}`
    );
    //res.status(404).json({msg: `No se encontró el id ${id} en la base de datos.`});
    expect(responseGetById.statusCode).toBe(404);
    expect(responseGetById.body.msg).toEqual(
      `No se encontró el id ${response.body._id} en la base de datos.`
    );
  });
});
