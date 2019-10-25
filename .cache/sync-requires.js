const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-single-post-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/templates/single-post.js"))),
  "component---src-templates-tags-page-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/templates/tags-page.js"))),
  "component---src-templates-tag-posts-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/templates/tag-posts.js"))),
  "component---src-templates-post-list-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/templates/post-list.js"))),
  "component---src-templates-author-posts-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/templates/author-posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/pages/index.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/home/dev/Downloads/gatsbyBlog/src/pages/team.js")))
}

