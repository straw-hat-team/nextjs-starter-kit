const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*'],
  coveragePathIgnorePatterns: [
    '.js.snap',
    '/node_modules/',
    '/__tests__/',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  clearMocks: true,
  resetMocks: true,
});
