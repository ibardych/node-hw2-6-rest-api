const { describe, test, expect } = require("@jest/globals");
const { login } = require("../controllers/auth");

describe("test login controller", () => {
  test("first test", () => {
    const req = {
      body: {
        username: "test@test.com",
        password: "123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    login(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    // expect(res.json).toHaveBeenCalledWith({ success: true });
  });
});
