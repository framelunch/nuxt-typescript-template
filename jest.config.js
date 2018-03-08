module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.spec\\.(ts|tsx)$',
};
