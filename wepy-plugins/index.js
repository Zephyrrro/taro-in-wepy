const path = require('path');

exports = module.exports = function(options = {}) {
  const { outputRoot } = options;
  return function() {
    this.register('build-components', function buildComponents(comps) {
      comps.forEach(comp => {
        let { config } = comp.sfc;
        const { usingTaroComponents, usingComponents, ...other } = config.parsed.output;
        let output = { ...other, usingComponents };
        //  页面中存在 taro 组件时则写入usingComponents中,绕过直接在 usingComponents 中引用 taro 组件的报错
        if (usingTaroComponents) {
          output.usingComponents = {
            ...usingComponents,
            ...usingTaroComponents
          };
        }
        config.outputCode = JSON.stringify(output, null, 4);
      });
      return comps;
    });

    this.register('output-file', function({ filename, code, encoding }) {
      const file = path.basename(filename);
      if (/^app\.js$/.test(file)) {
        const relativePath = path.relative(path.dirname(filename), outputRoot);
        const afterRequireTaro = code.replace(
          /("|')use strict("|');/,
          `"use strict";\n\nrequire('./${relativePath}/app.js');`
        );
        return Promise.resolve({
          filename,
          code: afterRequireTaro,
          encoding
        });
      } else {
        return { filename, code, encoding };
      }
    });
  };
};
