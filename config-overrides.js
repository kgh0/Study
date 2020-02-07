const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
		fixBabelImports('import', {
			libraryName : 'antd',
			libraryDirectory : 'es',
			style : true,
		}),
		addLessLoader({
			javascriptEnabled : true,
			modifyVars : {
				'@primary-color': '#1890ff',// 全局主色
				'@border-radius-base': '0px'
			},
		}), );
