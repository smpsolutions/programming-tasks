var express = require("express");
const request = require("supertest");
const routes = require("../routes/routes.js");

const initApp = () => {
  const app = express();
  routes(app);
  return app;
};

describe("Test the root path", () => {
  test("It should respond to the GET method", () => {
    const app = initApp();
    return request(app)
      .get("/")
      .expect(200);
  });
});

describe("Test the api test path", () => {
  test("It should respond to the GET method and return ok", async () => {
    const app = initApp();
    const response = await request(app).get("/api/test");
    expect(response.body.status).toBe("ok");
  });
});
