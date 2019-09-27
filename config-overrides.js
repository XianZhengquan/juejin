const {override, fixBabelImports, addLessLoader} = require('customize-cra');

const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    // config.devtool = false;
    return config;
};

module.exports = override(

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {}
    }),

    // 关闭mapSource
    rewiredMap()
);
