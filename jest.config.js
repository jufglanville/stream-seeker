module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
