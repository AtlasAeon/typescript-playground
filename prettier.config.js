'use strict';

const prettier = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 4,
    overrides: [
        {
            files: '.prettierrc',
            options: { parser: 'json' },
        },
    ],
};

module.exports = prettier;
