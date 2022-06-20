import { expect } from '@open-wc/testing';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';

describe('should enable voice over tests with inputs', () => {
  let element;

  beforeEach(async () => {
    element = document.createElement('div');
    element.innerHTML = `
      <h1>testing</h1>
      <input aria-label="First name" placeholder="First name" />
      <input aria-label="last name" placeholder="last name" />
    `;
    document.body.appendChild(element);
  });

  afterEach(() => element.remove());

  it('should read inputs', async () => {
    const test = new VoiceOverTest();
    test.queue(Commands.right, 'heading level 1 testing');
    test.queue(Commands.right, 'first name edit text');
    test.queue(Commands.right, 'last name edit text');
    test.queue(Commands.left, 'first name edit text');
    const result = await test.run();
    expect(result.values).to.eql(result.expected);
  });
});
