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

## Idea: Language Learning Adventure Game

Create an immersive web-based language learning adventure game that not only teaches language skills but also engages users through interactive gameplay. This unique project will demonstrate your creativity, frontend development, and game design abilities.

Here's a breakdown of the project: <br>

Language Learning Modules: <br>
Develop interactive language lessons for different proficiency levels, covering vocabulary, grammar, pronunciation, and cultural insights.
Implement challenges like word puzzles, matching games, quizzes, and voice recognition exercises.

Interactive Storyline: <br>
Design an engaging storyline where players navigate through different scenarios, solving puzzles and challenges.
Incorporate dialogues and conversations to practice real-world language usage.

Dynamic Progress Tracking: <br>
Create a user profile and tracking system that monitors the player's progress and adapts the difficulty of lessons accordingly.

Choice-based Gameplay: <br>
Let players make choices that impact the storyline and their language learning journey.
Use React to implement dynamic branching based on player decisions.

Leaderboards and Competitions: <br>
Integrate a leaderboard system where players can compete based on language proficiency and game completion.

Visual and Audio Assets: <br>
Incorporate visually appealing graphics and animations to enhance the gaming experience.
Use HTML5 audio features for language pronunciation exercises.

Social Sharing and Multiplayer Mode: <br>
Allow players to share their progress and achievements on social media. Implement a multiplayer mode where users can practice language skills with friends.

Technology Stack: <br>
Frontend: React.js for interactive components and game mechanics. <br>
Backend: Node.js with a database (MongoDB or PostgreSQL) for user profiles and progress tracking. <br>
Game Logic: JavaScript for implementing gameplay mechanics and branching storylines. <br>
Multimedia: HTML5 audio, CSS animations, and SVG graphics.

### Plan:

- Index page should contain blocks of clickable blocks that show the games that you can play.
- Possibly a navbar at the top which contains 'home', 'about', 'language' (selects the language u want to learn), 'progress' (shows your progress in the different games, highscores etc)

### Commands:

- 'npm run dev' starts localhost
