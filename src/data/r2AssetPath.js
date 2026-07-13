const R2_PUBLIC_BASE_URL = 'https://pub-76748dc3955848c6b663db3182a1e7c3.r2.dev';

export function r2AssetPath(key) {
  return `${R2_PUBLIC_BASE_URL}/${key.split('/').map(encodeURIComponent).join('/')}`;
}
