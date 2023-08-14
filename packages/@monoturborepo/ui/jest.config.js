module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest/jest.setup.ts'],
  moduleNameMapper: {},
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*'],
  coveragePathIgnorePatterns: ['.js.snap', '/node_modules/', '/__tests__/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  clearMocks: true,
  resetMocks: true,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};
