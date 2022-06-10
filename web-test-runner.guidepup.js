import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
	files: ['src/**/web-test-runner_guidepup/*.test.js'],
	nodeResolve: true,
	groups: [],
	browsers: [
		playwrightLauncher({
			async createPage({ context }) {
				const page = await context.newPage();
				await page.emulateMedia({ reducedMotion: 'reduce' });
				return page;
			}
		})
	],
	testFramework: {
		config: {
			ui: 'bdd',
			timeout: '20000',
		}
	},
	testRunnerHtml: testFramework =>
		`<html lang="en">
			<body>
				<script type="module" src="${testFramework}"></script>
			</body>
		</html>`
};
