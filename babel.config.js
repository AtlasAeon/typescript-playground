'use strict';

const nodeVersion = require('./build/node-version');

const babel = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: nodeVersion,
                },
            },
        ],
        '@babel/preset-typescript',
    ],
};

module.exports = babel;