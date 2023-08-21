module.exports = {
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm eslint --fix ${filenames.join(' ')}`,
    `npm prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm prettier --write ${filenames.join(' ')}`,
};
