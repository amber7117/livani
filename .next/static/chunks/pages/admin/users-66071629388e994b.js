(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9635],{2257:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users",function(){return a(7689)}])},8102:function(e,s,a){"use strict";var n=a(5893),i=a(7294),r=a(3823),t=a(4481);s.Z=function(e){var s=e.user,a=e.store,l=(0,i.useState)(!1),c=l[0],d=l[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{onChangeClass:function(e){d(e)},user:s,store:a}),(0,n.jsx)("nav",{className:"admin-sidebar ".concat(c?"active":null),children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Z,{href:"/admin/dashboard",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-home-alt"}),"Dashboard"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(r.Z,{href:"/admin/products",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-cart"}),"Products"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(r.Z,{href:"/admin/orders",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-shopping-bag"}),"Orders"]})})}),s&&"super-admin"===s.role?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(r.Z,{href:"/admin/customers",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-user-circle"}),"Customers"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(r.Z,{href:"/admin/users",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bxs-user-plus"}),"Admin/Users"]})})}),(0,n.jsx)("li",{className:"nav-item",title:"Coming Soon",children:(0,n.jsx)(r.Z,{href:"/admin/store-requests",activeClassName:"active",children:(0,n.jsxs)("a",{className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-git-pull-request"}),"Requests"]})})})]}):"",(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Z,{href:"/",activeClassName:"active",children:(0,n.jsxs)("a",{target:"_blank",className:"nav-link",children:[(0,n.jsx)("i",{className:"bx bx-link"}),"Storefront!"]})})})]})})]})}},7689:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return j},default:function(){return v}});var n=a(5893),i=a(8102),r=a(7568),t=a(7582),l=(a(7294),a(3833)),c=a.n(l),d=a(5297),h=a(1163),x=a(9669),m=a.n(x),u=a(7105),o=function(e){var s=e.users,a=(e.totalPages,e.user,(0,h.useRouter)()),i=function(){var e=(0,r.Z)((function(e,s){var n,i;return(0,t.__generator)(this,(function(r){switch(r.label){case 0:return n="".concat(u.Z,"/api/v1/auth/account"),i={id:e,role:"user"===s?"admin":"user"},[4,m().put(n,i)];case 1:return r.sent(),a.push("/admin/users"),[2]}}))}));return function(s,a){return e.apply(this,arguments)}}();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"admin-table height-555",children:(0,n.jsx)("div",{className:"table-responsive",children:(0,n.jsxs)("table",{className:"table table-hover mb-0",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Switch"}),(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Image"}),(0,n.jsx)("th",{children:"Email"}),(0,n.jsx)("th",{children:"Joined"}),(0,n.jsx)("th",{children:"Updated"}),(0,n.jsx)("th",{children:"Role"})]})}),(0,n.jsx)("tbody",{children:s&&s.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)("label",{className:"switch",children:[(0,n.jsx)("input",{type:"checkbox",id:e.id,checked:"admin"===e.role,onChange:function(){return i(e.id,e.role)}}),(0,n.jsx)("span",{className:"slider round"})]})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:e.name})}),(0,n.jsx)("td",{children:(0,n.jsx)(c(),{email:e.email,size:50,rating:"pg",default:"monsterid"})}),(0,n.jsx)("td",{children:e.email}),(0,n.jsx)("td",{children:(0,d.Z)(e.createdAt)}),(0,n.jsx)("td",{children:(0,d.Z)(e.updatedAt)}),(0,n.jsx)("td",{children:e.role})]},e.id)}))})]})})})})},j=!0,v=function(e){var s=e.user,a=e.store,r=e.users,t=e.totalPages;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{user:s,store:a}),(0,n.jsxs)("div",{className:"admin-main-content d-flex flex-column",children:[(0,n.jsx)("div",{className:"page-header",children:(0,n.jsx)("h2",{children:"Customers"})}),(0,n.jsx)(o,{users:r,totalPages:t,user:s}),(0,n.jsx)("div",{className:"flex-grow-1"})]})]})}},5297:function(e,s){"use strict";s.Z=function(e){return new Date(e).toLocaleDateString("en-US")}}},function(e){e.O(0,[1664,3530,2512,2278,4481,9774,2888,179],(function(){return s=2257,e(e.s=s);var s}));var s=e.O();_N_E=s}]);