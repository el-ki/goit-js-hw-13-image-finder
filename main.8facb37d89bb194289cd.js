(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4xUq":function(n,e,t){var l=t("mp5j");n.exports=(l.default||l).template({1:function(n,e,t,l,a){var o,i=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c="function",s=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <div class="photo-card">\r\n        <a href="'+s(typeof(o=null!=(o=u(t,"largeImageURL")||(null!=e?u(e,"largeImageURL"):e))?o:r)===c?o.call(i,{name:"largeImageURL",hash:{},data:a,loc:{start:{line:4,column:17},end:{line:4,column:34}}}):o)+'"=> <img class="image" src="'+s(typeof(o=null!=(o=u(t,"webformatURL")||(null!=e?u(e,"webformatURL"):e))?o:r)===c?o.call(i,{name:"webformatURL",hash:{},data:a,loc:{start:{line:4,column:62},end:{line:4,column:78}}}):o)+'" alt="'+s(typeof(o=null!=(o=u(t,"tags")||(null!=e?u(e,"tags"):e))?o:r)===c?o.call(i,{name:"tags",hash:{},data:a,loc:{start:{line:4,column:85},end:{line:4,column:93}}}):o)+'" height="230" /></a>\r\n        <div class="stats">\r\n            <p class="stats-item">\r\n                <i class="material-icons">thumb_up</i>\r\n                '+s(typeof(o=null!=(o=u(t,"likes")||(null!=e?u(e,"likes"):e))?o:r)===c?o.call(i,{name:"likes",hash:{},data:a,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):o)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">visibility</i>\r\n                '+s(typeof(o=null!=(o=u(t,"views")||(null!=e?u(e,"views"):e))?o:r)===c?o.call(i,{name:"views",hash:{},data:a,loc:{start:{line:12,column:16},end:{line:12,column:25}}}):o)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">comment</i>\r\n                '+s(typeof(o=null!=(o=u(t,"comments")||(null!=e?u(e,"comments"):e))?o:r)===c?o.call(i,{name:"comments",hash:{},data:a,loc:{start:{line:16,column:16},end:{line:16,column:28}}}):o)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">cloud_download</i>\r\n                '+s(typeof(o=null!=(o=u(t,"downloads")||(null!=e?u(e,"downloads"):e))?o:r)===c?o.call(i,{name:"downloads",hash:{},data:a,loc:{start:{line:20,column:16},end:{line:20,column:29}}}):o)+"\r\n            </p>\r\n        </div>\r\n    </div>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,a){var o;return"<ul>\r\n"+(null!=(o=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:4},end:{line:24,column:13}}}))?o:"")+"</ul>"},useData:!0})},L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("SgDD"),t("L1EO"),t("JBxO"),t("FdtR");var l=function(n,e,t){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+n+"}&page="+e+"&per_page="+t+"&key=20763996-832cb39490986f382e23fb6d5").then((function(n){return n.json()}))},a=t("4xUq"),o=t.n(a),i=t("jffb"),r=t.n(i),c={imageGallery:document.querySelector(".gallery"),input:document.querySelector('input[name="query"]'),button:document.querySelector(".btn")};function s(n){var e=o()(n);c.imageGallery.innerHTML=e}var u=0,m=12,p=[],d=window.innerHeight;c.input.addEventListener("input",r()((function(n){c.imageGallery.innerHTML="",m=12;var e=n.target.value;p.push(e),p[0]===e&&(u+=1),p[0]!==e&&(p=[],u=1),e.trim()&&(l(e,u,m).then((function(n){s(n.hits)})).catch((function(n){return"Something went wrong, try again"})),c.button.addEventListener("click",r()((function(){l(e,u,m+=12).then((function(n){s(n.hits),d+=d,window.scrollTo({top:d,behavior:"smooth"})}))})),1e3))}),1e3))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.8facb37d89bb194289cd.js.map