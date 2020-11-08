module.exports = {
    collectCoverageFrom: [
        'src/**/**/**/*.js'
    ],
    coverageDirectory: './test_reports/coverage',
    globals: {
        NODE_ENV: 'test'
    },
    moduleDirectories: [
        'src',
        'node_modules'
    ],
    modulePathIgnorePatterns: [
        'public'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/scripts/jest/setup.js'
    ],
    testURL: 'http://localhost:8081',
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ]

};
