/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules",
    "src"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
    "json",
    "node"
  ],

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "src"
  ],

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
