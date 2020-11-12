const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app.js');

const request = supertest(app);

beforeAll((done) => done());

describe('Test root path', () => {
  it('should respond to GET method', async (done) => request.get('/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
    .catch((err) => {
      console.err(err);
      done();
    }));
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
