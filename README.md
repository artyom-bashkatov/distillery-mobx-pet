# distillery-mobx-pet
Pet project to improve skills to work with Mobx state manager

# To-do to check and explain in code:
1. Observable (propertie value, rerender component if it changed)
2. Action (function to change obervable values and rerender component)
3. Computed (computed and cached propertie value depends on other fields)
4. fromPromise (show how to interact with requests and show request status like: loading, error, success)
5. autorun (run side effect if dependencies is changed, rerun automatic when dependencies change (in runtime analyze))
6. reaction (subscribe to arguments and state changed and run side effect function to interact some logic)
6. flow (to interact with requests)

# Materials for education
1. https://youtu.be/9rZeCNLfeuk (Yandex Mobx Meetup)
2. https://mobx.js.org/ (official documentation)
3. https://youtu.be/VqubXUR-bPk (introduction tutorials to Mobx)
4. https://habr.com/ru/post/471048/ (basic description of main patterns and ideas)
5. https://habr.com/ru/company/qiwi/blog/340840/ (async in Mobx and review)

How to interact with project:
Install 'node_modules' and all needed packages: 'yarn install';
Test project work on NodeJS 16 and Windows 10 21H2 version
Run: 'yarn start' or 'npm run start'
Build: 'yarn build' or 'npm run build'
