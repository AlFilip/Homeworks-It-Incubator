(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={btn:"SuperButton_btn__10Bbo",red:"SuperButton_red__3BtkQ",active:"SuperButton_active__1IChy"}},,function(e,t,a){e.exports={header:"Header_header__3QJJr",hovered:"Header_hovered__5ftLw",activeLink:"Header_activeLink__dXckW",dots:"Header_dots__2l05S"}},function(e,t,a){e.exports={message:"Message_message__3PXFW",messageBody:"Message_messageBody__23Jq5",messageContent:"Message_messageContent__3ZUTj",sender:"Message_sender__312Ox",messageText:"Message_messageText__CHA66",messageTime:"Message_messageTime__1hzD1"}},,,function(e,t,a){e.exports={superInputParent:"SuperInputText_superInputParent__1c_71",superInput:"SuperInputText_superInput__3DxyW",errorInput:"SuperInputText_errorInput__aIAsB",error:"SuperInputText_error__I8iDh",show:"SuperInputText_show__ypLHP"}},,,,function(e,t,a){e.exports={greeting:"Greeting_greeting__3Wj_h",error:"Greeting_error__3SLeF"}},function(e,t,a){e.exports={blue:"HW4_blue__3w-AG",column:"HW4_column__VIrKl",testSpanError:"HW4_testSpanError__2yNS3"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__hI-xk",spanClassName:"SuperCheckbox_spanClassName__3o42l"}},,,,,,,function(e,t,a){e.exports={App:"App_App__1ipfF"}},,,,function(e,t,a){e.exports={select:"SuperSelect_select__-W12i"}},,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/404girl.f1cfc31b.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(36),a(25)),s=a.n(o),u=a(2),i=a(7),m=a(8),d=a.n(m);var p=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=function(){return l(!a)},o="".concat(d.a.header," ").concat(a?d.a.hovered:"");return r.a.createElement("div",{className:o,onMouseEnter:c,onMouseLeave:c},r.a.createElement(i.b,{activeClassName:d.a.activeLink,to:"pre-junior"},"PreJunior"),r.a.createElement(i.b,{activeClassName:d.a.activeLink,to:"junior"},"Junior"),r.a.createElement(i.b,{activeClassName:d.a.activeLink,to:"junior-plus"},"Junior++"),r.a.createElement("span",{className:d.a.dots},"\u205d"))},E=a(1),h=a(9),v=a.n(h);var f=function(e){return r.a.createElement("div",{className:v.a.message},r.a.createElement("img",{src:e.avatar,alt:""}),r.a.createElement("div",{className:v.a.messageBody},r.a.createElement("div",{className:v.a.messageContent},r.a.createElement("div",{className:v.a.sender},e.name),r.a.createElement("div",{className:v.a.messageText},e.message),r.a.createElement("div",{className:v.a.messageTime},e.time))))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",b="some text",C="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(f,{avatar:g,name:_,message:b,time:C}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=a(4),O=a(6),j=a.n(O),x=function(e){var t=e.red,a=e.className,n=Object(N.a)(e,["red","className"]),l="".concat(t?j.a.red:""," ").concat(a||""," ").concat(j.a.btn);return r.a.createElement("button",Object.assign({className:l},n))};var S=function(e){return r.a.createElement("div",null,"// show some text",r.a.createElement(x,{onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var y=function(e){var t=e.data.map((function(t){return r.a.createElement(S,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})})),a="all"===e.activeFilter?j.a.active:"",n="high"===e.activeFilter?j.a.active:"",l="middle"===e.activeFilter?j.a.active:"",c="low"===e.activeFilter?j.a.active:"";return r.a.createElement("div",null,t,r.a.createElement(x,{className:a,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement(x,{className:n,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement(x,{className:l,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement(x,{className:c,onClick:function(){return e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(w),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),s=o[0],i=o[1],m=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(y,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},activeFilter:s}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=a(30),F=a(16),P=a.n(F),B=a(12),A=a.n(B),J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(c?A.a.error:""," ").concat(s||""),m="".concat(c?A.a.errorInput:""," ").concat(o||""," ").concat(A.a.superInput);return r.a.createElement("div",{className:A.a.superInputParent},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m,placeholder:"Enter here"},u)),c&&r.a.createElement("span",{className:i},c))},H=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.keyPress,s=l?P.a.error:"",u=!!s||!t;return r.a.createElement("div",{className:P.a.greeting},r.a.createElement(J,{value:t,error:l,onChange:a,onKeyPress:o,className:s}),r.a.createElement("div",null,r.a.createElement(x,{disabled:u,onClick:n},"add"),r.a.createElement("span",null,c)))},W=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),d=m[0],p=m[1],E=function(){var e=o.trim();e?(!function(e){alert("Hi, ".concat(e))}(e),a(e)):p("Name can't be empty (Spaces are not counted)"),s("")},h=t.length;return r.a.createElement(H,{name:o,setNameCallback:function(e){s(e.currentTarget.value),d&&p("")},addUser:E,error:d,totalUsers:h,keyPress:function(e){"Enter"===e.key&&E()}})},L=a(28);var M=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:a,addUserCallback:function(e){l([].concat(Object(I.a)(a),[{_id:Object(L.v1)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=a(17),U=a.n(D),K=a(18),G=a.n(K),X=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},s=Object(n.useState)(!1),i=Object(u.a)(s,2),m=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(J,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(J,{className:U.a.blue}),r.a.createElement(x,null,"Default"),r.a.createElement(x,{red:!0,onClick:o},"delete "),r.a.createElement(x,{disabled:!0},"disabled"),r.a.createElement(X,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(M,null),r.a.createElement(q,null))};var Q=function(){return r.a.createElement("div",{className:"error404"},r.a.createElement("img",{src:a(44),height:"400px",width:"400px",alt:""}),r.a.createElement("div",{className:"content404"},r.a.createElement("span",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"But don't worry, there is navigation panel with actual links on left top corner=)")))},Z=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],d=l||{},p=d.children,E=d.onDoubleClick,h=d.className,v=Object(N.a)(d,["children","onDoubleClick","className"]),f="beautifulSpan".concat(" ",h||"");return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()},onChangeText:function(e){return c.onChangeText&&c.onChangeText(e)}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:f},v),p||c.value))};function R(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function V(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}R("test",{x:"A",y:1});V("test",{x:"",y:0});var Y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Z,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(x,{onClick:function(){R("editable-span-value",a)}},"save"),r.a.createElement(x,{onClick:function(){l(V("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=a(29),ee=a.n($),te=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(N.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return r.a.createElement("option",{key:e+"-"+t,value:e},e)})):[];return r.a.createElement("select",Object.assign({className:ee.a.select,onChange:function(e){n&&n(e.currentTarget.value),a&&a(e)}},l),c)},ae=function(e){e.type,e.name;var t=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map((function(e,t){})):[]);return r.a.createElement(r.a.Fragment,null,a)},ne=["x","y","z"];var re=function(){var e=Object(n.useState)(ne[1]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:ne,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ae,{name:"radio",options:ne,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(){return r.a.createElement("div",null,"Junior level",r.a.createElement(Y,null),r.a.createElement(re,null))};var ce=function(){return r.a.createElement("div",null,"Junior+")},oe="/pre-junior",se="/junior",ue="/junior-plus";var ie=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:oe})}}),r.a.createElement(E.b,{path:oe,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(E.b,{path:se,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(E.b,{path:ue,render:function(){return r.a.createElement(ce,null)}}),"// add routes",r.a.createElement(E.b,{render:function(){return r.a.createElement(Q,null)}})))};var me=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(ie,null)))};var de=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.bf4efa65.chunk.js.map