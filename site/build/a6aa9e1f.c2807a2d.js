(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8],{102:function(e,a,t){"use strict";var n=t(2),l=t(0),r=t.n(l),o=t(99),c=t(98),m=t(97),i=t(100),s=t(47),f=t.n(s);function _({to:e,href:a,label:t,prependBaseUrlToHref:l,...o}){const m=Object(i.a)(e),s=Object(i.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(c.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:l?s:a}:{to:m},o),t)}const E=({url:e,alt:a})=>r.a.createElement("img",{className:"footer__logo",alt:a,src:e});a.a=function(){const e=Object(m.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t,{copyright:l,links:c=[],logo:s={}}=n||{},g=Object(i.a)(s.src);return n?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map((e,a)=>r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(_,e)))):null))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},r.a.createElement(E,{alt:s.alt,url:g})):r.a.createElement(E,{alt:s.alt,url:g})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))):null}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(97),o=t(101),c=t(110),m=t(98);var i=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t},l.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.a.createElement(m.a,{className:"pagination-nav__link",to:n},l.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(r.a)(),m="/"===a.permalink?n:"Blog",{blogDescription:s}=a;return l.a.createElement(o.a,{title:m,description:s},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("main",{className:"col col--8 col--offset-2"},t.map(({content:e})=>l.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},l.a.createElement(e,null))),l.a.createElement(i,{metadata:a})))))}}}]);