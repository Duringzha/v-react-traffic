const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './js/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './lib'), // 输出的路径
        filename: 'index.js'  // 打包后文件
    },
    mode:"development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react','stage-2'],
                    }
                },
                exclude: /node_modules/
            }, 
            {
                test: /\.react$/,
                exclude: /node_modules/,
                loader: 'single-react-loader'
            }
        ]
    }
}