const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { service1, service2, service3, service4 } = require('./config/services.js');

const router = Router();

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/service1.js': service1.bundle
  },
  changeOrigin: true
}));

router.use('/service2.js', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^/bundles/service2.js': service1.bundle
  },
  changeOrigin: true
}));

router.use('/service3.js', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/service3.js': service3.bundle
  },
  changeOrigin: true
}));

// router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));

router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
router.use(service2.api, createProxyMiddleware({ target: service2.url, changeOrigin: true }));
router.use(service3.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));
router.use(service4.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));

module.exports = router;