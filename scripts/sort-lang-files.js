/*
 * Helper script for sorting DevExtreme language asset files
 */

try {
  const sectionSeperator = new Array(60).join('-');
  console.log(sectionSeperator);
  console.log('Running script sort-lang-files.js');

  const fs = require('fs');
  const path = require('path');

  // promisify core API's
  const folderPath = path.join(`${__dirname}/../projects/project-1/src/assets/lang`);
  console.log(`Reading Path: ${folderPath}`);
  console.log(sectionSeperator);

  fs.readdirSync(folderPath).forEach(
    (fileName, index) => {
      const filePath = path.join(`${folderPath}/${fileName}`);
      console.log(`Reading file "${filePath}" ...`);
      const langObject = require(filePath);
      const langKey = Object.keys(langObject)[0];
      console.log(`Contains langKey "${langKey}"`);

      const sorted = {};
      Object.keys(langObject[langKey]).sort().forEach(key => sorted[key] = langObject[langKey][key]);
      langObject[langKey] = sorted;

      fs.writeFileSync(path.join(filePath), JSON.stringify(langObject, null, 2).replace(/\n/gm, "\r\n") + "\r\n");
      console.log(`${fileName} successfully sorted`);
      console.log(sectionSeperator);
    }
  )

} catch (error) {
  console.error(error);
}
