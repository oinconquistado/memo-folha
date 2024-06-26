import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        "moduleNameMapper":{
            "\\.(css|less|scss|sass)$": "identity-obj-proxy"
        },
        // verbose: true,
        // roots: ['<rootDir>/src'], // , '<rootDir>/test'],
        // testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
        testEnvironment: 'jsdom',
        transform: {
            '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
        },
        setupFilesAfterEnv: [
            // '@testing-library/jest-dom',
            // "@testing-library/jest-dom/extend-expect",
            '<rootDir>/jest.setup.ts',
        ],
    };
};
