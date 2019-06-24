'use strict';

const defaults = require('jest-config').defaults;

/**
 * https://jestjs.io/docs/en/configuration
 */
const jest = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/jest.setup-test.js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        "**/src/*.{js,jsx,ts,tsx}",
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/(.*/?)__sandbox__',
        '<rootDir>/build',
        '<rootDir>/lib',
        '<rootDir>/dist',
    ],
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    transform: {
        '^.+\\.(t|j)sx?$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    /**
     * Automatically reset mock state between every test.
     * Equivalent to calling jest.resetAllMocks() between each test.
     *
     * Sane default with resetModules: true because mocks need to be inside beforeEach
     * for them to work correctly
     *
     * https://jestjs.io/docs/en/configuration#resetmocks-boolean
     */
    resetMocks: true,

    /**
     *  The module registry for every test file will be reset before running each individual test.
     *  This is useful to isolate modules for every test so that local module state doesn't conflict between tests.
     *
     *  https://jestjs.io/docs/en/configuration#resetmodules-boolean
     */
    resetModules: true,

    /**
     * Equivalent to calling jest.restoreAllMocks() between each test.
     *
     * Resets jest.spyOn mocks only
     *
     * https://jestjs.io/docs/en/configuration#restoremocks-boolean
     */
    restoreMocks: true,
};
 module.exports = jest;
