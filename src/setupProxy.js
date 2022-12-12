const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/pms", {
      target: "http://54.180.142.131",
      pathRewrite: {
        "^/pms": "",
      },
      changeOrigin: true,
    })
  );
  /* 
  app.use(
    createProxyMiddleware('/다른context', {
      target: 'https://다른호스트',
      pathRewrite: {
        '^/지우려는패스':''
        "^/naver": "",
      },
      changeOrigin: true
    })
  )
   */
};
