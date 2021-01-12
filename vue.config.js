module.exports = {
    //配置全局样式变量
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/styles/common.scss";`
            }
        }
    }
}