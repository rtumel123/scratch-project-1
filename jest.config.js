module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'css', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': './scratch-project-1/src/$1'
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transformIgnorePatterns: ['./scratch-project-1/node_modules/']
};