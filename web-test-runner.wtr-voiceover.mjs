import { playwrightLauncher } from '@web/test-runner-playwright';
// import { esbuildPlugin } from '@web/dev-server-esbuild';
// import { fromRollup } from '@web/dev-server-rollup';
// import alias from '@rollup/plugin-alias';
import { voiceOverPlugin } from 'web-test-runner-voiceover'; 

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  concurrency: 1,
  concurrentBrowsers: 1,
  files: ['src/**/web-test-runner_wtr-voiceover/*.test.js'],
  testsFinishTimeout: 5000,
  testFramework: {
    config: { timeout: '5000' }
  },
  browsers: [playwrightLauncher({ product: 'webkit', launchOptions: { headless: false } })],
  nodeResolve: true,
  dedupe: true,
  plugins: [
    voiceOverPlugin(),
    // fromRollup(alias)({
    //   entries: [{ find: /^my-cool-library/, replacement: `${process.cwd()}/dist` }],
    // }),
    // esbuildPlugin({ ts: true, json: true, target: 'auto', sourceMap: true })
  ]
});
