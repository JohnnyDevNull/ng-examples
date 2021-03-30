/*
 * Helper script for cleaning all necessary build artifacts
 */

console.log('-----------------------------');
console.log('Running script cleanup.js');
console.log('-----------------------------');

const fs = require('fs');
const Path = require('path');

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = Path.join(path, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

try {
  console.log('delete ./dist folder recursive...');
  deleteFolderRecursive('./dist');
} catch(error) {
  console.warn('delete ./dist folder failed...');
  console.warn(error.message);
}
