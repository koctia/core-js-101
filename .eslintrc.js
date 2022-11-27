module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};

// module.exports = {
//   env: {
//     commonjs: true,
//     es6: true,
//     node: true,
//     mocha: true,
//   },
//   extends: [
//     'airbnb-base',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//   },
//   rules: {
//   },
// };
