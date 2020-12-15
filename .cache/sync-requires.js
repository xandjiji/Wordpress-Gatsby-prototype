const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/xand/wordpress-gatsby-prototype/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/xand/wordpress-gatsby-prototype/src/pages/index.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/home/xand/wordpress-gatsby-prototype/src/templates/Category.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/home/xand/wordpress-gatsby-prototype/src/templates/Post.js"))),
  "component---src-templates-search-js": hot(preferDefault(require("/home/xand/wordpress-gatsby-prototype/src/templates/Search.js")))
}

