(this.webpackJsonpsoftball=this.webpackJsonpsoftball||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(1),i=t.n(c),s=t(3),r=t.n(s),o=(t(14),t(4)),d=t(5),l=t(8),b=t(7),j=t.p+"static/media/banner2.1ee24674.png";t(15);var v=function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("img",{src:j})})};t(16),t(17);var h=function(e){var a=e.title,t=e.index,c=e.changeTab,i=e.activeTab;return Object(n.jsx)("div",{className:"navbarOption ".concat(i==t&&"selected"),onClick:function(){c(t,a)},children:a})};var O=function(e){var a=e.handleNavbarChange,t=e.handleSecondaryOptions,c=e.active;return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)("div",{className:"navbar__option home",children:Object(n.jsx)(h,{title:"Home",index:0,changeTab:a,activeTab:c,secondaryOptions:t})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)(h,{title:"Team",index:1,changeTab:a,activeTab:c,secondaryOptions:t})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)(h,{title:"Schedule",index:2,changeTab:a,activeTab:c})}),Object(n.jsx)("div",{className:"navbar__option",children:Object(n.jsx)(h,{title:"Gallery",index:3,changeTab:a,activeTab:c})}),Object(n.jsx)("div",{className:"navbar__option sponsors",children:Object(n.jsx)(h,{title:"Sponsors",index:4,changeTab:a,activeTab:c})})]})};t(18),t(19);var u=function(e){var a=e.title,t=e.index,c=e.handleSecondary,i=e.activeSecondary;return Object(n.jsx)("div",{className:"navbarSecondaryOption ".concat(i==t&&"selected"),onClick:function(){c(t)},children:a})};var x=function(e){var a=e.show,t=e.options,c=e.handleSecondaryNavbarChange,i=e.activeSecondary;return Object(n.jsx)("div",{className:"navbarSecondary ".concat(!a&&"hide"),children:t.map((function(e,a){return Object(n.jsx)("div",{className:"navbarSecondary__option",children:Object(n.jsx)(u,{title:e,index:a,handleSecondary:c,activeSecondary:i})},a)}))})};t(20),t.p;var m=function(e){var a=e.image,t=e.title;return Object(n.jsxs)("div",{className:"articleCard",children:[Object(n.jsx)("div",{className:"articleCard__img",children:Object(n.jsx)("img",{src:a,alt:""})}),Object(n.jsx)("div",{className:"articleCard__title",children:Object(n.jsx)("h4",{children:t})})]})},p=t(6);var f=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p.a,{url:"https://www.mystatsonline.com/ballsports/visitor/league/stats/batter.aspx?IDLeague=55954&iframe=yes",width:"100%",height:"450px"})})};t(21);var y=function(){return Object(n.jsx)("div",{className:"footer",children:"Footer goes here"})},g=(t(22),{Home:["Home","About","History"],Team:["Roster","Team Stats","Player Stats"],Schedule:[2015,2016,2017,2018,2019,2020],Gallery:[2015,2016,2017,2018,2019,2020],Sponsors:["I","dont","know","yet"]}),S=t.p+"static/media/kawhi.1e98557d.jpeg",N=t.p+"static/media/brady.ac5f3183.jpeg",T=t.p+"static/media/team.adf8de72.jpeg",_=function(e){Object(l.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleNavbarChange=function(e,a){n.setState({active:e,navbarActive:a,activeSecondary:0},(function(){n.setState({secondaryOptions:g[n.state.navbarActive]})}))},n.handleSecondaryNavbarChange=function(e){n.setState({activeSecondary:e})},n.state={active:0,activeSecondary:0,navbarActive:null,show:!0,secondaryOptions:["Home","About","History"]},n}return Object(d.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(v,{}),Object(n.jsx)(O,{handleNavbarChange:this.handleNavbarChange,active:this.state.active}),Object(n.jsx)(x,{show:this.state.show,options:this.state.secondaryOptions,handleSecondaryNavbarChange:this.handleSecondaryNavbarChange,activeSecondary:this.state.activeSecondary}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(m,{image:S,title:"Player Of The Game"}),Object(n.jsx)(m,{image:N,title:"Another Ring for Brady?"}),Object(n.jsx)(m,{image:T,title:"Winning It ALL next season!"})]}),Object(n.jsx)("div",{className:"data",children:Object(n.jsx)(f,{})}),Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)(y,{})})]})}}]),t}(c.Component);r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.165c8e2e.chunk.js.map