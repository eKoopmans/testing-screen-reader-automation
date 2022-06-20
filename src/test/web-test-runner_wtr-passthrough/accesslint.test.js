import { expect } from '@open-wc/testing';
import { run } from '../../../lib/wtr-passthrough/browser.js';

const customRun = (cmd, ...args) => run(['accesslint', cmd], ...args);

describe('should enable voice over tests with inputs', () => {
  let element;

  beforeEach(async () => {
    element = document.createElement('div');
    element.innerHTML = `
      <h1>start of testing</h1>
      <h1>first heading</h1>
      <input aria-label="first name" placeholder="first name" />
      <h1>second heading</h1>
      <input aria-label="last name" placeholder="last name" />
      <h1>end of testing</h1>
    `;
    document.body.appendChild(element);

    await customRun('launch');
  });

  afterEach(async () => {
    element.remove();
    await customRun('quit');
  });

  it('should read inputs', async () => {
    await customRun('rotor', { menu: "Window Spots", find: "content" });
    await customRun(['startInteracting']);

    const output = await customRun('seek', {
      text: 'end of testing',
      tries: 20
    });

    expect(output).to.eql([
      'heading level 1 first heading',
      '',
      'heading level 1 second heading',
      'last name edit text',
      'heading level 1 end of testing'
    ]);
  });
});
