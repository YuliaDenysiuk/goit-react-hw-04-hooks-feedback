(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={option:"Statistics_option__bFSIn",total:"Statistics_total__3tXmD",percent:"Statistics_percent__3z7wR"}},,,function(t,e,n){t.exports={section:"Section_section__ZB-Sh",title:"Section_title__1HL7g"}},,function(t,e,n){t.exports={button:"FeedbackOptions_button__2qitd"}},function(t,e,n){t.exports={message:"Notification_message__2-Q-y"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),o=n.n(s),i=(n(13),n(3)),r=(n(14),n(2)),u=n.n(r),l=n(0);var b=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,s=t.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:u.a.option,children:["Good: ",e]}),Object(l.jsxs)("p",{className:u.a.option,children:["Natural: ",n]}),Object(l.jsxs)("p",{className:u.a.option,children:["Bad: ",c]}),Object(l.jsxs)("p",{className:u.a.total,children:["Total: ",a]}),Object(l.jsxs)("p",{className:u.a.percent,children:["Positive feedback: ",s,"%"]})]})},j=n(7),d=n.n(j);var p=function(t){var e=t.options,n=t.onClick;return e.map((function(t){return Object(l.jsx)("button",{type:"button",className:d.a.button,onClick:function(){return n(t)},children:t},t)}))},f=n(8),h=n.n(f);var O=function(t){var e=t.message;return Object(l.jsx)("p",{className:h.a.message,children:e})},x=n(5),_=n.n(x);var m=function(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{className:_.a.section,children:[Object(l.jsx)("h2",{className:_.a.title,children:e}),n]})},g=["good","neutral","bad"];var k=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(0),o=Object(i.a)(s,2),r=o[0],u=o[1],j=Object(c.useState)(0),d=Object(i.a)(j,2),f=d[0],h=d[1],x=function(){return n+r+f};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{title:"Please leave feedback",children:Object(l.jsx)(p,{options:g,onClick:function(t){switch(t){case"good":a((function(t){return t+1}));break;case"neutral":u((function(t){return t+1}));break;case"bad":h((function(t){return t+1}));break;default:return}}})}),Object(l.jsx)(m,{title:"Statistics",children:x()?Object(l.jsx)(b,{good:n,neutral:r,bad:f,total:x(),positivePercentage:n>0?Math.round(n/x()*100):0}):Object(l.jsx)(O,{message:"No feedback given"})})]})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.4c3d982a.chunk.js.map