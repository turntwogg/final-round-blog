(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(182),o=n(186);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},178:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(57),l=n.n(c);n.d(t,"a",function(){return l.a});n(179);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},179:function(e,t,n){var a;e.exports=(a=n(180))&&a.default||a},180:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(83),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Final Round Blog"}}}}},182:function(e,t,n){"use strict";var a=n(181),r=n(0),i=n.n(r),o=n(12),c=n.n(o),l=n(178),s=n(177),u=Object(s.c)(l.a).withConfig({displayName:"Logo__LogoLink",componentId:"ed40ph-0"})(["text-transform:uppercase;font-size:20px;"]),d=function(){return i.a.createElement(u,{to:"/"},i.a.createElement("strong",null,"Final"),"Round")},p=s.c.header.withConfig({displayName:"Header__StyledHeader",componentId:"fnrfd1-0"})(["height:56px;margin-bottom:24px;padding:0 24px;display:flex;align-items:center;border-bottom:1px solid #f1f1f1;"]),m=function(e){e.siteTitle;return i.a.createElement(p,null,i.a.createElement(d,null))},f=s.c.div.withConfig({displayName:"Container",componentId:"p41wk4-0"})(["width:100%;margin:0 auto;",";"],function(e){var t=e.theme;return Object(s.b)(["max-width:","px;padding:0 ","px;"],t.maxWidth,t.baseSpacingUnit)}),g=(n(16),n(120)),h=n.n(g),y=n(183),x=n.n(y),v=Object(s.c)(function(e){var t,n=e.is,a=void 0===n?"p":n,r=e.children,o=e.variant,c=h()(e,["is","children","variant"]);return i.a.createElement(a,Object.assign({className:x()("text",(t={},t["text--"+o]=o,t))},c),r)}).withConfig({displayName:"Text__StyledText",componentId:"sc-1ph6xex-0"})(["",""],function(e){return"caps"===e.variant&&Object(s.b)(["text-transform:uppercase;"])}),w=s.c.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1qolz7a-0"})(["background-color:#f1f1f1;padding:24px 0;font-size:14px;"]),E=(new Date).getFullYear(),b=function(){return i.a.createElement(w,null,i.a.createElement(f,null,i.a.createElement(v,{style:{marginBottom:0}},"© ",E," All Rights Reserved.")))},q={baseSpacingUnit:24,maxWidth:1e3,colors:{primary:"#5c1f46"}},R=s.c.div.withConfig({displayName:"App__StyledApp",componentId:"xz1vfm-0"})(["display:flex;flex-flow:column;min-height:100vh;",""],function(e){return Object(s.b)(["border-top:4px solid ",";"],e.theme.colors.primary)}),j=function(e){var t=e.children;return i.a.createElement(s.a,{theme:q},i.a.createElement(R,null,t))},N=(n(184),n(185),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(j,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{className:"site-main",style:{flexGrow:1}},i.a.createElement(f,null,t)),i.a.createElement(b,null))},data:a})});N.propTypes={children:c.a.node.isRequired};t.a=N},186:function(e,t,n){"use strict";var a=n(187),r=n(0),i=n.n(r),o=n(12),c=n.n(o),l=n(189),s=n.n(l),u=n(178),d=function(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})};d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Final Round Blog",description:"",author:"@finalroundgg"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-55156a5d732e0c8f911e.js.map