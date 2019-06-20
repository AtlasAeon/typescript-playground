module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true, // Allows for the parsing of JSX
        },
        project: "./tsconfig.json",
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/explicit-function-return-type': ['error', {allowTypedFunctionExpressions: true}],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/no-empty-interface': 'warn',
    },
    settings: {
        // 'import/resolver': {
        //     node: {
        //         paths: ['./src'],
        //         extensions: ['.js', '.jsx', '.ts', '.tsx'],
        //     },
        // },
    },
    globals: {
        fetch: false,
        Response: false,
    },
    plugins: ['prettier', '@typescript-eslint'],
    env: {
        node: true,
        jest: true,
    }
};
