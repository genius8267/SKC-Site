import { handler } from '../../src/index';

describe('handler', () => {
  it('returns greeting payload', () => {
    expect(handler()).toEqual({ status: 200, body: 'Hello from service-template' });
  });
});
