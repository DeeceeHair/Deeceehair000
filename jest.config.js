/** @type {import('jest').Config} */
const config = {
  // The environment in which the tests should be run (Node.js for backend)
  testEnvironment: 'node',

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.test.js',
  ],
  
  // An object that configures transformations of source files.
  // We add an empty transform for Node.js projects using ES Modules.
  transform: {},
};

export default config;
