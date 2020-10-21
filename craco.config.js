const CracoAntDesignPlugin = require("craco-antd");
const aliyunTheme = require("@ant-design/aliyun-theme");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
            lessOptions: {
                modifyVars: aliyunTheme
            }
        },
        babelPluginImportOptions: {
            style: true
        }
      }
    }
  ]
};