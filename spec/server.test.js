const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app.js');

const request = supertest(app);

beforeAll(async (done) => {
  // disconnect from the real database first!
  await mongoose.disconnect();

  mongoose.connect('mongodb://localhost/tourDbTest', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', (err) => done.fail(err));
  db.once('open', () => done());
});

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
  mongoose.disconnect();
  done();
});
