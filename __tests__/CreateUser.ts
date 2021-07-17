import request from "supertest";
import app from "../src/app";
import { IUser } from "../src/service/User/interface/IUser";
const requestSuperTest = request(app);
describe("CREATE USER", () => {
  it("Create user", async () => {
    let user = {
      name: "Leandro",
      email: "leandro@gmail",
      password: "102030",
    };
    const { body } = await requestSuperTest.post("/user").send(user);
    expect(body).toEqual(user);
  });
});
