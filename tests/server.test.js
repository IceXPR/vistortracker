const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It shoud get the root page', async() => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It shoud get the metric', async() => {
    const response = await request(app).get('/visitortracker/metrics.png');
    expect(response.statusCode).toBe(200);
  });
});
