module.exports = {
    devServer:{
        historyApiFallback:true,
        noInfo:true,
        proxy:{
            '/api':{
                //是否允许跨域
                chaangerOrigin:true,
                target:'http://121.42.230.80/api/',
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}