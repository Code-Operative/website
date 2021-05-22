const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/index.js"))),
  "component---src-pages-join-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/join.js"))),
  "component---src-pages-members-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/members.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/pages/projects.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/yeapkenjoo/Desktop/website/src/templates/blogTemplate.js")))
}

