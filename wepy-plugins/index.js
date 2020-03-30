const path = require('path');

exports = module.exports = function(options = {}) {
  const { outputRoot } = options;
  return function() {
    this.register('output-file', function({ filename, code, encoding }) {
      const file = path.basename(filename);
      if (/^app\.js$/.test(file)) {
        const relativePath = path.relative(path.dirname(filename), outputRoot);
        const afterRequireTaro = code.replace(
          /("|')use strict("|');/,
          `"use strict";\nrequire('./${relativePath}/app.js')`
        );
        return Promise.resolve({
          filename,
          code: afterRequireTaro,
          encoding
        })
      } else {
        return { filename, code, encoding }
      }
    });
  };
};
