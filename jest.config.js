module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testMatch: ['**/tests/**/*.(spec|test).(ts|tsx)', '**/__tests__/*.(ts|tsx)'],
  testURL: 'http://localhost/',
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!src/**/*.d.ts', '!src/main.tsx'],
  cache: false,
  setupFilesAfterEnv: ['./jest.setup-after-env.js'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: {
        sourceMap: true,
        inlineSourceMap: true
      },
      diagnostics: true
    }
  }
};
