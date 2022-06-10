import { voiceOver } from "@guidepup/guidepup";

async function run() {
  // Start your screen-reader instance 🎉
  await voiceOver.start();

  try {
    // Navigate your environment with screen-readers just as your users do 🏎
    await voiceOver.next();

    // Assert on what your users really see and hear when using screen-readers 👂
    const expected = 'Welcome to macOS. VoiceOver is on. Finder desktop Relocated Items Alias';
    const phrase = await voiceOver.lastSpokenPhrase();
    console.log('phrase:', phrase);
    if (phrase !== expected) throw `VoiceOver failure.\nExpected: ${expected}\nActual: ${phrase}`;
  } finally {
    await voiceOver.stop();
  }
}

run();
