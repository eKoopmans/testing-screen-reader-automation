import { expect } from '@open-wc/testing';
import { run } from '../../../lib/wtr-passthrough/browser.js';

describe('should enable voice over tests with inputs', () => {
  let element;

  beforeEach(async () => {
    element = document.createElement('div');
    element.innerHTML = `
      <h1>start of testing</h1>
      <input aria-label="First Name" placeholder="first name" />
      <input aria-label="last name" placeholder="last name" />
    `;
    document.body.appendChild(element);

    await run('start');
  });

  afterEach(async () => {
    element.remove();
    await run('stop');
  });

  it('should read inputs', async () => {
    await run('interact');

    await run('next');
    expect(await run('lastSpokenPhrase')).to.equal('First Name edit text');

    await run('next');
    expect(await run('lastSpokenPhrase')).to.equal('last name edit text');
  });
});
