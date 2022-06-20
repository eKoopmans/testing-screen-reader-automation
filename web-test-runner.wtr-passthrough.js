import { playwrightLauncher } from '@web/test-runner-playwright';
import { passthroughPlugin } from './lib/wtr-passthrough/index.js';
import * as guidepup from '@guidepup/guidepup';
import { VoiceOver, startInteracting } from '@accesslint/voiceover';

const accesslint = new VoiceOver();
accesslint.startInteracting = () => accesslint.execute(startInteracting);

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
    passthroughPlugin({ guidepup, accesslint }),
  ]
});
