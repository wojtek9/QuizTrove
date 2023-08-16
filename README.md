# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Plan:

- Index page should contain blocks of clickable blocks that show the games that you can play.
- Possibly a navbar at the top which contains 'home', 'about', 'language' (selects the language u want to learn), 'progress' (shows your progress in the different games, highscores etc)

### Commands:

- 'npm run dev' starts localhost

### todo:

- implement pronounciation of the sentences in guesslang

### SpeechSynthesisUtterance documentation

- voices json (window.speechSynthesis.getVoices()): 
0: SpeechSynthesisVoice {voiceURI: 'Microsoft Helle - Danish (Denmark)', name: 'Microsoft Helle - Danish (Denmark)', lang: 'da-DK', localService: true, default: true}
1: SpeechSynthesisVoice {voiceURI: 'Microsoft David - English (United States)', name: 'Microsoft David - English (United States)', lang: 'en-US', localService: true, default: false}
2: SpeechSynthesisVoice {voiceURI: 'Microsoft Mark - English (United States)', name: 'Microsoft Mark - English (United States)', lang: 'en-US', localService: true, default: false}
3: SpeechSynthesisVoice {voiceURI: 'Microsoft Zira - English (United States)', name: 'Microsoft Zira - English (United States)', lang: 'en-US', localService: true, default: false}
4: SpeechSynthesisVoice {voiceURI: 'Microsoft Heami - Korean (Korean)', name: 'Microsoft Heami - Korean (Korean)', lang: 'ko-KR', localService: true, default: false}
5: SpeechSynthesisVoice {voiceURI: 'Google Deutsch', name: 'Google Deutsch', lang: 'de-DE', localService: false, default: false}
6: SpeechSynthesisVoice {voiceURI: 'Google US English', name: 'Google US English', lang: 'en-US', localService: false, default: false}
7: SpeechSynthesisVoice {voiceURI: 'Google UK English Female', name: 'Google UK English Female', lang: 'en-GB', localService: false, default: false}
8: SpeechSynthesisVoice {voiceURI: 'Google UK English Male', name: 'Google UK English Male', lang: 'en-GB', localService: false, default: false}
9: SpeechSynthesisVoice {voiceURI: 'Google español', name: 'Google español', lang: 'es-ES', localService: false, default: false}
10: SpeechSynthesisVoice {voiceURI: 'Google español de Estados Unidos', name: 'Google español de Estados Unidos', lang: 'es-US', localService: false, default: false}
11: SpeechSynthesisVoice {voiceURI: 'Google français', name: 'Google français', lang: 'fr-FR', localService: false, default: false}
12: SpeechSynthesisVoice {voiceURI: 'Google हिन्दी', name: 'Google हिन्दी', lang: 'hi-IN', localService: false, default: false}
13: SpeechSynthesisVoice {voiceURI: 'Google Bahasa Indonesia', name: 'Google Bahasa Indonesia', lang: 'id-ID', localService: false, default: false}
14: SpeechSynthesisVoice {voiceURI: 'Google italiano', name: 'Google italiano', lang: 'it-IT', localService: false, default: false}
15: SpeechSynthesisVoice {voiceURI: 'Google 日本語', name: 'Google 日本語', lang: 'ja-JP', localService: false, default: false}
16: SpeechSynthesisVoice {voiceURI: 'Google 한국의', name: 'Google 한국의', lang: 'ko-KR', localService: false, default: false}
17: SpeechSynthesisVoice {voiceURI: 'Google Nederlands', name: 'Google Nederlands', lang: 'nl-NL', localService: false, default: false}
18: SpeechSynthesisVoice {voiceURI: 'Google polski', name: 'Google polski', lang: 'pl-PL', localService: false, default: false}
19: SpeechSynthesisVoice {voiceURI: 'Google português do Brasil', name: 'Google português do Brasil', lang: 'pt-BR', localService: false, default: false}
20: SpeechSynthesisVoice {voiceURI: 'Google русский', name: 'Google русский', lang: 'ru-RU', localService: false, default: false}
21: SpeechSynthesisVoice {voiceURI: 'Google 普通话（中国大陆）', name: 'Google 普通话（中国大陆）', lang: 'zh-CN', localService: false, default: false}
22: SpeechSynthesisVoice {voiceURI: 'Google 粤語（香港）', name: 'Google 粤語（香港）', lang: 'zh-HK', localService: false, default: false}
23: SpeechSynthesisVoice {voiceURI: 'Google 國語（臺灣）', name: 'Google 國語（臺灣）', lang: 'zh-TW', localService: false, default: false}