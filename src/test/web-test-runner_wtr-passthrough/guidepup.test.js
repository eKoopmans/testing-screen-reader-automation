import { expect } from '@open-wc/testing';
import { run } from '../../../lib/wtr-passthrough/browser.js';

const customRun = (cmd, ...args) => run(['guidepup', 'voiceOver', cmd], ...args);

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

    await customRun('start');
  });

  afterEach(async () => {
    element.remove();
    await customRun('stop');
  });

  it('should read inputs', async () => {
    await customRun('interact');

    await customRun('next');
    expect(await customRun('lastSpokenPhrase')).to.equal('First Name edit text');

    await customRun('next');
    expect(await customRun('lastSpokenPhrase')).to.equal('last name edit text');
  });
});
