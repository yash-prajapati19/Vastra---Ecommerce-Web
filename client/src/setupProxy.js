const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware("/api/products",
        {
            target: "http://localhost:5000",
            changeOrigin: true
        
        })
    )
}