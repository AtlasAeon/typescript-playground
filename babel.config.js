'use strict';

module.exports = api => {
    const isTest = api.env('test');
    const isDev = api.env('dev');
    const nodeVersion = require('./build/node-version');

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    debug: isDev,
                    targets: {
                        node: nodeVersion,
                    },
                },
            ],
            '@babel/preset-typescript',
        ],
        plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread"
        ]
    };
};
