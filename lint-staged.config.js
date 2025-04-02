export default {
  '**/*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  '**/*.ts': ['tsc --noEmit'],
};
