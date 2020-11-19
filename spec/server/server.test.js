const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server/app.js');

const request = supertest(app);

/*
SOME JEST NOTES:

To remove console.logs: jest --silent

For pretty clgs:
const colors = require('colors');
process.stdout.write(colors.blue(message));

SUPERTEST NOTE: supertest(app) allows us to call RESTful methods on our API routes
so request.get('/') will return the HTML response to the request!

*/

// Runs ONCE before ANY tests in this file - NOT before EACH test!
beforeAll(async (done) => {
  // disconnect from the real database first!
  await mongoose.disconnect();

  mongoose.connect('mongodb://localhost/tourDbTest', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', (err) => done.fail(err));
  db.once('open', () => done());
  done();
});

describe('Test Root Path', () => {
  test('Root should respond to GET', async (done) => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    done();
  });
});

describe('Test /api/tours/request GET path', () => {
  let response;
  beforeAll(async (done) => {
    response = await request.get('/api/tours/requests');
    done();
  });

  test('should respond with array of >100 dates/times when querying api/tours/requests', () => {
    expect(response.body.length).toBeGreaterThan(99);
  });
  test('items should have date and time props', () => {
    expect(response.body[0]).toHaveProperty('date');
    expect(response.body[0]).toHaveProperty('time');
  });
  test('items should NOT have name property for security reasons', () => {
    expect(response.body[0]).not.toHaveProperty('name');
  });
});

describe('Test /api/tours/requests POST route', () => {
  test('should respond with status code 200 to a post', async (done) => {
    const toSend = { name: 'Jim', number: '1234567890', email: 'a@gmail.com' };
    const response = await request.post('/api/tours/requests').send(toSend);
    expect(response.statusCode).toBe(200);
    done();
  });
});

describe('Test /api/tours/agents GET route', () => {
  let response;
  beforeAll(async (done) => {
    response = await request.get('/api/tours/agents');
    done();
  });

  test('should respond with array of 100 dates/times when querying api/tours/requests', () => {
    expect(response.body.length).toBe(4);
  });
  test('items should have correct props', () => {
    expect(response.body[0]).toHaveProperty('stars');
    expect(response.body[0]).toHaveProperty('title');
  });
});

// Runs after all tests in this file have finished!
afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});
