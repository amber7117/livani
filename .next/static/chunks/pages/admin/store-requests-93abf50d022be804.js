(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9559],{4398:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/store-requests",function(){return a(1599)}])},8102:function(e,s,a){"use strict";var n=a(5893),r=a(7294),t=a(3823),i=a(4481);s.Z=function(e){var s=e.user,a=e.store,l=(0,r.useState)(!1),c=l[0],d=l[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{onChangeClass:function(e){d(e)},user:s,store:a}),(0,n.jsx)("nav",{className:"admin-sidebar ".concat(c?"active":null),children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.Z,{href:"/admin/dashboard",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-home-alt"}),"Dashboard"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(t.Z,{href:"/admin/products",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-cart"}),"Products"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(t.Z,{href:"/admin/orders",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-shopping-bag"}),"Orders"]})})}),s&&"super-admin"===s.role?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(t.Z,{href:"/admin/customers",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-user-circle"}),"Customers"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(t.Z,{href:"/admin/users",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bxs-user-plus"}),"Admin/Users"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(t.Z,{href:"/admin/store-requests",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-git-pull-request"}),"Requests"]})})})]}):"",(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.Z,{href:"/",activeClassName:"active",children:(0,n.jsxs)("a",{target:"_blank",className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-link"}),"Storefront!"]})})})]})})]})}},1599:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return p},default:function(){return b}});var n=a(5893),r=a(8102),t=a(7568),i=a(7582),l=a(9669),c=a.n(l),d=a(7105),u=a(1163),o=a(9815),m=a(1664),x=a.n(m),h=function(e){var s=e.totalPages,a=(0,u.useRouter)(),r=parseInt(a.query.page)?parseInt(a.query.page):1;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"pagination-area text-center",children:[(0,n.jsx)(x(),{href:"/admin/store-requests/?page=".concat(r-1),children:(0,n.jsx)("a",{className:1===r?"isDisabled prev page-numbers":"prev page-numbers",children:(0,n.jsx)("i",{className:"bx bx-chevrons-left"})})}),(0,o.Z)(Array(s).keys()).map((function(e){return(0,n.jsx)("span",{children:(0,n.jsx)(x(),{href:"/admin/store-requests?page=".concat(e+1),children:(0,n.jsx)("a",{className:e+1===parseInt(a.query.page)?"current page-numbers":"page-numbers",children:e+1})})},e+1)})),(0,n.jsx)(x(),{href:"/admin/store-requests/?page=".concat(r+1),children:(0,n.jsx)("a",{className:r===s?"isDisabled next page-numbers":"next page-numbers",children:(0,n.jsx)("i",{className:"bx bx-chevrons-right"})})})]})})},j=[{key:"pending",text:"Pending",value:"pending"},{key:"approved",text:"Approved",value:"approved"}],v=function(e){var s=e.stores,a=e.totalPages,r=(0,u.useRouter)(),l=function(){var e=(0,t.Z)((function(e){var s,a;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return s="".concat(d.Z,"/api/v1/store/requests"),a={id:e.target.id,status:e.target.value},[4,c().put(s,a)];case 1:return n.sent(),r.push("/admin/store-requests"),[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"admin-table admin-orders-table height-555",children:(0,n.jsx)("div",{className:"table-responsive",children:(0,n.jsxs)("table",{className:"table table-hover mb-0",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Action"}),(0,n.jsx)("th",{children:"Store"}),(0,n.jsx)("th",{children:"Email"}),(0,n.jsx)("th",{children:"Status"})]})}),(0,n.jsx)("tbody",{children:s.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("select",{name:"cars",id:e.id,className:"form-control",onChange:function(e){return l(e)},value:e.status,children:j.map((function(e){return(0,n.jsx)("option",{value:e.value,children:e.text},e.key)}))})}),(0,n.jsx)("td",{children:e.name}),(0,n.jsx)("td",{children:e.email}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"pending"===e.status?"status-button badge badge_danger":"status-button badge badge_success",children:e.status})})]},e.id)}))})]})})}),(0,n.jsx)(h,{totalPages:a})]})},p=!0,b=function(e){var s=e.stores,a=e.store,t=e.totalPages,i=e.user;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{user:i,store:a}),(0,n.jsx)("div",{className:"admin-main-content d-flex flex-column",children:s.length>0?(0,n.jsx)(v,{stores:s,totalPages:t}):(0,n.jsx)("p",{className:"empty-store",children:"No Store Available!"})})]})}},9534:function(e,s,a){"use strict";function n(e,s){if(null==e)return{};var a,n,r=function(e,s){if(null==e)return{};var a,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(s,{Z:function(){return n}})}},function(e){e.O(0,[1664,3530,2512,4481,9774,2888,179],(function(){return s=4398,e(e.s=s);var s}));var s=e.O();_N_E=s}]);