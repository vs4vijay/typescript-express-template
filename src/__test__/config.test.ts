import config from '../config';

test('config', () => {
  expect(config.app).toBeDefined();
  expect(config.db).toBeDefined();
});
