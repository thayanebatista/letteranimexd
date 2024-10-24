module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "flow"
      }
    ],
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'max-classes-per-file': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-await-in-loop': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'no-extra-boolean-cast': 0,
    'object-curly-newline': 0,
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreStrings: true,
    }],
    'no-use-before-define': 0,
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'consistent-return': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'no-return-assign': ['error', 'except-parens'],
    camelcase: 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/button-has-type': 0,
  },
  overrides: [
    {
      files: [
        'src/test/**/*',
        'src/setupTests.ts',
      ],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};