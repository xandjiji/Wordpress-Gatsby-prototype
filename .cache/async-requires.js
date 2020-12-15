// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-category-js": () => import("./../../../src/templates/Category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---src-templates-post-js": () => import("./../../../src/templates/Post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-search-js": () => import("./../../../src/templates/Search.js" /* webpackChunkName: "component---src-templates-search-js" */)
}

