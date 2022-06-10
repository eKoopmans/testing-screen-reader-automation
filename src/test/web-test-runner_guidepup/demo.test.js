import '../../demo.js';
import { expect, fixture, html } from '@open-wc/testing';
// NOTE: This import breaks in web-test-runner:
//	SyntaxError: The requested module './../../node_modules/@guidepup/guidepup/lib/index.js' does not provide an export named 'MacOSApplications'
// import { run } from './guidepup-demo.js';
import '@guidepup/guidepup';

describe('wc-demo', () => {

	it('default', async() => {
		const elem = await fixture(html`<wc-demo>Demo</wc-demo>`);
		expect(elem.textContent).to.equal('Hello World');
	});

	// it('does voiceover', () => {
	// 	const { text, spoken } = run();
	// 	console.log(text);
	// 	console.log(spoken);
	// });

});
