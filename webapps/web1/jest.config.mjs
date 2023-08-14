import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}', '<rootDir>/app/**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*', 'app/**/*'],
  coveragePathIgnorePatterns: ['.js.snap', '/node_modules/', '/__tests__/'],
  clearMocks: true,
  resetMocks: true,
};

export default createJestConfig(config);
