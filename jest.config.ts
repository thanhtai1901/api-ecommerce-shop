import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Sử dụng ts-jest để hỗ trợ TypeScript
  testEnvironment: 'node', // Môi trường kiểm thử là Node.js
  testMatch: ['**/test/**/*.test.ts'], // Đường dẫn tới các file test
};

export default config;
