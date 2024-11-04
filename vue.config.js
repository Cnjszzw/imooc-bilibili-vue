const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // host: 'localhost',
        host: '0.0.0.0',
        port: 7070, // 保持前端在7070端口
        allowedHosts: [
            'localhost',
            'citywork.icu',
            'www.citywork.icu'
            // 其他允许的主机名
        ]
    }
})
