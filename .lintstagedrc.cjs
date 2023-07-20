const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.js": "eslint --fix",
  "*.jsx": "eslint --fix",
  "*.ts": "eslint --fix",
  "*.tsx": "eslint --fix",
  "*": "prettier --ignore-unknown --write",
  "*.{png,jpeg,jpg,gif,svg}": "imagemin-lint-staged",
  "*.css": "stylelint",
  "*.scss": "stylelint --syntax=scss",
};
