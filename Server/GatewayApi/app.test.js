const request = require('supertest');
const jwt = require("jsonwebtoken");

const app = require('./app.js').app;

describe("Sing Up Tests", function() {
    const user = {'first_name': "first_name", 'last_name': "last_name",'email': "email", 'password': "password", 'is_admin': 'false'};
    it("Should return user", function(done) {
        request(app).post('/users/sign_up/default')
        .send(user)
        .set("Content-Type", "application/json")
        .expect(200)
        .end(function (err, res) {
            if (err) throw err;
            console.log(res.body);
            done();
          });
    })
});

describe("SignIn Tests", function() {
    it("Should return user", function(done) {
        request(app)
        .post('/users/sign_in/default')
        .send({email: "email", password: "password"})
        .expect(200)
        .end(function (err, res) {
            if (err) throw err;
            console.log(res.body);
            done();
          });;
    })
})

describe("Post Tests", function() {
    function create_jwt (user1){
       jwt.sign({ user1: user1 }, "secret", (err, token) => {
            if (err) {
                console.log('Error: ' + err);
                return err
            }
           return token;
        })
    }
    let user = {user_id: 1, title: "some titel", content: "some content", token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSI6Imxhc3RfbmFtZSIsImVtYWlsIjoiZW1haWwiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiaXNfYWRtaW4iOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDI0LTExLTE0VDE0OjUzOjM0LjE2NloiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTE0VDE0OjUzOjM0LjE2NloifSwiaWF0IjoxNzMxNTk2MDE0fQ.m0d8UeskxCxbvtiz_ZNqrg3Ln_rASvu_cN6czRYL__E'};
    console.log(create_jwt(user));
    it("Should create post", function(done) {
        request(app).post('/posts/create').send(user).expect(200).end(function (err, res) {
            if (err) throw err;
            console.log(res.body);
            done();
          });
    })

    it("Should return post", function(done) {
        request(app).get('/posts/get/1').expect(200)
        .end(function (err, res) {
            if (err) throw err;
            console.log(res.body);
            done();
          });
    });
});

