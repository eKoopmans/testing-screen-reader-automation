import '../demo.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('wc-demo', () => {

	it('default', async() => {
		const elem = await fixture(html`<wc-demo>Demo</wc-demo>`);
		expect(elem.textContent).to.equal('Hello World');
	});

});
