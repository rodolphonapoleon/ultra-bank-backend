const { indextest } = require("./routes/default");

describe("Test server is running", function () {
  test("responds to /", () => {
    const req = {};
    const res = {
      text: "",
      send: function (input) {
        this.text = input;
      },
    };
    indextest(req, res);
    expect(res.text).toEqual("The bank app server is running properly");
  });
});

// const supertest = require("supertest");
// const app = require("./index");
// const request = supertest(app);
// const { faker } = require("@faker-js/faker");

// function user() {
//   const name = faker.name.findName();
//   const email = faker.internet.email();
//   return {
//     name,
//     email,
//   };
// }

// // create test users
// const user1 = user();
// const user2 = user();

// describe("Test the root path", () => {
//   test("It should response the GET method", async () => {
//     await request.get("/").then((response) => {
//       expect(response.statusCode).toBe(200);
//       //   done();
//     });
//   });
//   test("populate data", async () => {
//     await request.get(`/account/create/${user1.name}/${user1.email}`);
//     await request.get(`/account/create/${user2.name}/${user2.email}`);
//     // done();
//   });
//   test("verify data", async () => {
//     const data = await request.get("/account/all");
//     expect(data.body.some((e) => e.name === user1.name)).toBeTruthy();
//     expect(data.body.some((e) => e.name === user2.name)).toBeTruthy();
//     // done();
//   });
// });

// var server = app.listen(3000, () => {
//   console.log("Running on port 3000");
// });

// afterAll((done) => {
//   server.close();
//   done();
// });
