const DEFAULT_ACCESS_CONFIG = {
  iterations: 210000,
  salt: 'EmFWN4qM53+zO0K1j0ltJA==',
  hash: '3sEywy9DD3RusXz7SrAqzII8d1XtzPo4/qHWpsubXqs=',
};

const configuredIterations = Number(import.meta.env.VITE_PORTFOLIO_ACCESS_ITERATIONS);

const accessConfig = {
  iterations:
    Number.isSafeInteger(configuredIterations) && configuredIterations >= 100000
      ? configuredIterations
      : DEFAULT_ACCESS_CONFIG.iterations,
  salt: import.meta.env.VITE_PORTFOLIO_ACCESS_SALT || DEFAULT_ACCESS_CONFIG.salt,
  hash: import.meta.env.VITE_PORTFOLIO_ACCESS_HASH || DEFAULT_ACCESS_CONFIG.hash,
};

function decodeBase64(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

function areEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }

  return difference === 0;
}

export async function verifyPortfolioPassword(password) {
  if (!globalThis.crypto?.subtle) {
    throw new Error('当前浏览器不支持安全密码校验。');
  }

  const passwordKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const derivedHash = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt: decodeBase64(accessConfig.salt),
      iterations: accessConfig.iterations,
    },
    passwordKey,
    256,
  );

  return areEqual(new Uint8Array(derivedHash), decodeBase64(accessConfig.hash));
}
