import supertest from "supertest";
// eslint-disable-next-line import/no-unresolved, import/extensions
import app from "../server";

const request = supertest(app);
describe("1. Test endpoint responses", () => {
  it("1.1 Gwt All products", async (done) => {
    const response = await request.get("/api/v1/products");
    expect(response.status).toBe(200);
    done();
  });
  it("1.2 Trying To register Without Sending Any Data", async (done) => {
    const response = await request.post("/api/v1/register");
    expect(response.status).toBe(403);
    done();
  });
  it("1.3 Trying To Log In Without Sending Any Datat", async (done) => {
    const response = await request.post("/api/v1/login");
    expect(response.status).toBe(403);
    done();
  });
  it("1.4 Trying To register With Sending the Required Data", async (done) => {
    const payload = {
      name: "Hemdan213",
      email: "aa@a.com",
      password: "12345",
    };
    const response = await request.post("/api/v1/register").send(payload);
    expect(response.status).toBe(200);
    done();
  });
  it("1.5 Trying To Log In With Sending the Required Data", async (done) => {
    const payload = {
      email: "aa@a.com",
      password: "12345",
    };

    const response = await request.post("/api/v1/login").send(payload);
    expect(response.status).toBe(200);
    done();
  });

  it("1.6 Trying To Access Without Log In", async (done) => {
    const response = await request.post("/api/v1/mycart");
    expect(response.status).toBe(403);
    done();
  });
});
