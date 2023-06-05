/** @type {import('ts-jest').JestConfigWithTsJest} */

process.env.TS_NODE_SKIP_TYPE_CHECK = 'true';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};