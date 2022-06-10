import { voiceOver } from "@guidepup/guidepup";

async function run() {
  // Start your screen-reader instance 🎉
  await voiceOver.start();

  try {
    // Navigate your environment with screen-readers just as your users do 🏎
    await voiceOver.next();

    // Assert on what your users really see and hear when using screen-readers 👂
    const phrase = await voiceOver.lastSpokenPhrase();
    console.log('phrase:', phrase);
    if (phrase !== 'Expected failure') throw `VoiceOver failure: ${phrase}`;
  } finally {
    await voiceOver.stop();
  }
}

run();
