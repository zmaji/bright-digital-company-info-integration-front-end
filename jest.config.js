module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/utils/singleton.js'], // This may be required for your setup, adjust as needed
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    'coverage',
    'src/__tests__/mocks',
    'src/__tests__/utils',
  ],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  collectCoverage: process.env.npm_lifecycle_event === 'test:coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
};
