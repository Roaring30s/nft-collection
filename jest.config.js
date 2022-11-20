module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  "moduleNameMapper": {
    '^@src/(.*)': '<rootDir>/src/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@features/(.*)': '<rootDir>/src/features/$1',
    '^@core/(.*)': '<rootDir>/src/core/$1',
    '^@assets/(.*)': '<rootDir>/src/assets/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
},
}