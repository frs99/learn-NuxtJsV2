(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{279:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("670be3a0",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(279)},287:function(t,e,n){var c=n(40)((function(i){return i[1]}));c.push([t.i,"a.nuxt-link-exact-active[data-v-7e3d6d16]{border:none;background-color:#000}.linkpost[data-v-7e3d6d16]{max-width:270px;position:fixed;left:0}.linkpage[data-v-7e3d6d16]{position:fixed;right:0}",""]),c.locals={},t.exports=c},305:function(t,e,n){"use strict";n.r(e);var c=n(8),o=(n(49),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("docs",c.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{docs:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Docs"}}}),l=(n(286),n(22)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"flex m-auto"},[n("section",{staticClass:"linkpost w-full overflow-auto h-screen max-w-xs"},[n("ul",{staticClass:"p-5"},[n("li",[n("NuxtLink",{staticClass:"my-4 py-4 w-full inline-block text-center bg-slate-900 text-white",attrs:{to:"/docs/post"}},[t._v("\n          TO POST\n        ")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"my-4 py-4 w-full inline-block text-center bg-slate-900 text-white",attrs:{to:"/docs/post02"}},[t._v("\n          TO POST2\n        ")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"my-4 py-4 w-full inline-block text-center bg-slate-900 text-white",attrs:{to:"/docs/post03"}},[t._v("\n          TO POST3\n        ")])],1)])]),t._v(" "),n("section",{staticClass:"flex w-4/5 justify-end"},[n("article",{staticClass:"w-3/5 p-6 mr-10"},[n("nuxt-content",{attrs:{document:t.docs}})],1),t._v(" "),n("section",{staticClass:"linkpage p-5"},[n("nav",[n("ul",t._l(t.docs.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{staticClass:"py-2 px-3 my-3 w-full inline-block text-center bg-slate-900 text-white",attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])])])])}),[],!1,null,"7e3d6d16",null);e.default=component.exports}}]);