module.exports = {
  service1: {
    api: '/lego/products',
    url: 'http://localhost:3053',
    bundle: 'bundle.js'
  },
  service2: {
    api: '/productDescription',
    url: 'http://localhost:3034',
    bundle: 'bundle.js'
  },
  service3: {
    api: '/products',
    // api: {window.location.pathname},
    url: 'http://localhost:3003',
    bundle: 'bundle.js'
  },
  service4: {
    api: '/reviews',
    // api: {window.location.pathname},
    url: 'http://localhost:3003',
    bundle: 'bundle.js'
  }
};