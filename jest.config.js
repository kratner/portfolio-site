/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[jt]sx?$": [
      "ts-jest",
      {
        tsconfig: {
          allowJs: true,
          jsx: "react-jsx",
        },
        diagnostics: false,
      },
    ],
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(png|jpg|jpeg|gif|webp|ico)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  setupFilesAfterEnvironment: ["<rootDir>/src/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
