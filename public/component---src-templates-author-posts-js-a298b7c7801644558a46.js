(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{249:function(e,t,a){"use strict";a.r(t),a.d(t,"authorQuery",(function(){return p}));a(46),a(267);var n=a(0),r=a.n(n),o=a(242),l=a(254),i=a(255),c=a(256),s=a(265),m=a(266),u=a.n(m),p="3268762097";t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.totalCount,m=u.a.find((function(e){return e.name===a.authorName})),p=n+" Posts by: "+a.authorName;return r.a.createElement(o.a,{pageTitle:p,postAuthor:m,authorImageFluid:t.file.childImageSharp.fluid},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(s.a,{key:t.id,slug:t.fields.slug,title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date,body:t.excerpt,tags:t.frontmatter.tags,fluid:t.frontmatter.image.childImageSharp.fluid})})),r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(c.a,{className:"text-center text-uppercase"},"PUBLICIDADE"),r.a.createElement("img",{src:"https://via.placeholder.com/320x50",alt:"Advert",style:{width:"100%"}}))))}},265:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(254),l=a(255),i=a(256),c=a(263),s=a(257),m=a(264),u=a(57),p=a(97),d=a.n(p),f=a(243);t.a=function(e){var t=e.title,a=e.author,n=e.slug,p=e.date,g=e.body,h=e.fluid,w=e.tags;return r.a.createElement(o.a,null,r.a.createElement(u.Link,{to:n},r.a.createElement(d.a,{className:"card-image-top",fluid:h})),r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(u.Link,{to:n}," ",t," ")),r.a.createElement(c.a,null,r.a.createElement("span",{className:"text-info"}," ",p," ")," by "," ",r.a.createElement("span",{className:"text-info"}," ",a," ")),r.a.createElement(s.a,null,g),r.a.createElement("ul",{className:"post-tags"},w.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(u.Link,{to:"/tag/"+Object(f.slugify)(e)},r.a.createElement(m.a,{color:"primary",className:"text-uppercase"},e)))}))),r.a.createElement(u.Link,{to:n,className:"btn btn-outline-primary float-right text-uppercase"}," Veja Mais... ")))}},266:function(e,t){e.exports=[{name:"Post News",imageUrl:"postNews.png",bio:"Posts de notícias diárias.",facebook:"https://www.facebook.com/",twitter:"https://twitter.com/",google:"https://plus.google.com/",linkedin:"https://www.linkedin.com/"},{name:"Post Tech",imageUrl:"postTech.png",bio:"Post de notícias sobre Tecnologia.",facebook:"https://www.facebook.com/",twitter:"https://twitter.com/",google:"https://plus.google.com/",linkedin:"https://www.linkedin.com/"}]},267:function(e,t,a){"use strict";var n=a(6),r=a(58)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(98)("find")}}]);
//# sourceMappingURL=component---src-templates-author-posts-js-a298b7c7801644558a46.js.map