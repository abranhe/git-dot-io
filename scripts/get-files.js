const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '../tmp');

module.exports = getFiles = () => {
  return fs.readdirSync(root).reduce((files, file) => {
    const extension = '.html';
    const name = path.join(root, file);

    if (fs.statSync(name).isDirectory() || path.extname(name) !== extension) {
      return files;
    }

    if (path.basename(name, extension) === 'index') {
      return files;
    }

    return [...files, path.basename(name, extension)];
  }, []);
};
