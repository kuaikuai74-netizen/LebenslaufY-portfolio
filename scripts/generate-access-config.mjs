import { pbkdf2Sync, randomBytes } from 'node:crypto';

const password = process.argv[2];
const iterations = 210000;

if (!password) {
  console.error('用法：npm run access:config -- "你的新密码"');
  process.exitCode = 1;
} else {
  const salt = randomBytes(16).toString('base64');
  const hash = pbkdf2Sync(password, Buffer.from(salt, 'base64'), iterations, 32, 'sha256').toString(
    'base64',
  );

  console.log(`VITE_PORTFOLIO_ACCESS_ITERATIONS=${iterations}`);
  console.log(`VITE_PORTFOLIO_ACCESS_SALT=${salt}`);
  console.log(`VITE_PORTFOLIO_ACCESS_HASH=${hash}`);
}
