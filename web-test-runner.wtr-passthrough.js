import { playwrightLauncher } from '@web/test-runner-playwright';
import { passthroughPlugin } from './lib/wtr-passthrough/index.js';
import { voiceOver } from '@guidepup/guidepup';

export default ({
  concurrency: 1,
  concurrentBrowsers: 1,
  files: ['src/**/web-test-runner_wtr-passthrough/*.test.js'],
  testsFinishTimeout: 60000,
  testFramework: {
    config: { timeout: '60000' }
  },
  browsers: [playwrightLauncher({ product: 'webkit', launchOptions: { headless: false } })],
  nodeResolve: true,
  dedupe: true,
  plugins: [
    passthroughPlugin(voiceOver),
  ]
});
