import { expect } from '@open-wc/testing';
import { run } from '../../../lib/wtr-passthrough/browser.js';

const customRun = (cmd, ...args) => run(['accesslint', cmd], ...args);

describe('should enable voice over tests with inputs', () => {
  let element;

  beforeEach(async () => {
    element = document.createElement('div');
    element.innerHTML = `
      <h1>start of testing</h1>
      <h1>foo</h1>
      <input aria-label="first name" placeholder="first name" />
      <h1>bar</h1>
      <input aria-label="last name" placeholder="last name" />
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
    await run(['foo']);
    // await customRun('interact');

    await customRun('advance', {
      target: {
        text: 'last name edit text',
        role: 'input'
      },
      steps: 10
    });
    // await customRun('next');
    // expect(await customRun('tail')).to.equal('First Name edit text');

    // await customRun('advance', {
    //   target: {
    //     text: 'last name',
    //     role: 'input'
    //   },
    //   steps: 5
    // });
    // // await customRun('next');
    // expect(await customRun('tail')).to.equal('last name edit text');
  });
});
