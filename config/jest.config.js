/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  cacheDirectory: '<rootDir>/node_modules/.cache',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/config/tests.config.js', '<rootDir>/config/axe.config.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist', '<rootDir>/lib', '<rootDir>/cypress'],
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'cobertura'],
  collectCoverageFrom: [
    `<rootDir>/src/**`,
    '!<rootDir>/node_modules/',
    '!<rootDir>/**/*.json',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/stories/*',
    '!<rootDir>/**/coverage/*',
    '!<rootDir>/**/*.stories.tsx',
    `!<rootDir>/**/*.d.ts`,
    `!<rootDir>/**/*.js`,
    `!<rootDir>/**/index.ts`,
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
    },
  },
  coverageDirectory: `./coverage`,
  resolver: '<rootDir>/config/resolver.js',
  watchPathIgnorePatterns: ['node_modules'],
  rootDir: '../'
};
