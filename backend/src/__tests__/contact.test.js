const request = require("supertest");
const express = require("express");
const contactRoute = require("../routes/contact");

const app = express();
app.use(express.json());
app.use("/api/contact", contactRoute);

describe("POST /api/contact", () => {
  it("should return 400 if required data is missing", async () => {
    const res = await request(app).post("/api/contact").send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});
