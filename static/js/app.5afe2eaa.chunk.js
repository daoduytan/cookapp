(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{267:function(e,t,n){"use strict";n.d(t,"a",(function(){return He}));var r=n(19),a=n.n(r),o=n(0),i=n.n(o),c=n(39),l=n(268),s=n(448),u=n(179),m=n(18),d=n.n(m),g=n(8),p=n.n(g),f=n(50),y=n(91),b=n(230),E=n(85),h=n(231);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=Object(y.b)({uri:"http://localhost:8080/graphql"}),j=Object(b.a)((function(e,t){var n,r;return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.headers,e.next=3,d.a.awrap(h.a.getItem("token"));case 3:return r=e.sent,e.abrupt("return",{headers:w(w({},n),{},{authorization:"Bearer "+r})});case 5:case"end":return e.stop()}}),null,null,null,Promise)})).concat(O),k=new E.a,x=new f.a({link:j,cache:k}),S=n(225),C=n(449),P=n(3),B=n(5),D=n(263),z=n(44),R=n(37);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=Object(o.memo)((function(e){var t=e.children,n=e.type,r=void 0===n?"reglar":n,a=e.style;return i.a.createElement(R.a,{style:I({lineHeight:20,fontFamily:function(){switch(r){case"bold":return"Quicksand_600SemiBold";default:return"Quicksand_400Regular"}}()},a)},t)})),N=n(63),Q=n(53),W=n(27),F=B.a.create({card:{borderWidth:1,borderColor:"#eee",borderRadius:5,overflow:"hidden"},img:{backgroundColor:"#eee",height:120},text_wrap:{padding:10},text:{}}),L=Object(o.memo)((function(e){var t=e.food,n=e.style,r=Object(W.useNavigation)();return i.a.createElement(P.a,{style:[F.card,n]},i.a.createElement(N.a,{onPress:function(){r.navigate("Detail",{title:t.title,id:t.id})}},i.a.createElement(Q.a,{style:F.img,source:{uri:t.recipeImage}})),i.a.createElement(P.a,{style:F.text_wrap},i.a.createElement(H,{type:"bold",style:F.text},t.title)))})),M=n(17),T=n.n(M),q=n(25),J=n.n(q),$=n(64),A=(Object(o.memo)((function(e){var t=e.style,n=J()(e,["style"]);return i.a.createElement($.a,T()({},n,{style:[t,{fontFamily:"Quicksand_600SemiBold"}]}))})),n(256)),G=function(e){var t=e.style,n=J()(e,["style"]);return i.a.createElement(A.a,T()({},n,{style:[t,{fontFamily:"Quicksand_600SemiBold"}]}))},V=B.a.create({box:{flexDirection:"row",alignItems:"center",borderRadius:5,backgroundColor:"#fff",margin:5,overflow:"hidden",borderColor:"#eee",borderWidth:1},wrap_text:{paddingHorizontal:10},text:{fontSize:12},img:{height:60,width:60,backgroundColor:"#eee"}}),X=Object(o.memo)((function(e){var t=e.category,n=Object(W.useNavigation)();return i.a.createElement(N.a,{onPress:function(){return n.navigate("Categories")}},i.a.createElement(P.a,{style:V.box},i.a.createElement(P.a,null,i.a.createElement(Q.a,{style:V.img,source:t.img})),i.a.createElement(P.a,{style:V.wrap_text},i.a.createElement(H,{style:V.text,type:"bold"},t.title))))})),K=[{id:"an-sang",title:"\u0102n s\xe1ng",img:n(325)},{id:"an-trua",title:"\u0102n tr\u01b0a",img:n(326)},{id:"an-toi",title:"\u0102n t\u1ed1i",img:n(327)}];var U=function(){return i.a.createElement(z.b,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:{paddingHorizontal:10}},K.map((function(e){return i.a.createElement(X,{key:e.id,category:e})})))},Y=n(446),Z=n(51),ee="#034694",te="#DBA111",ne="#D1D3D4",re=5,ae=Math.round(Z.a.get("window").width),oe=(Math.round(Z.a.get("window").height),B.a.create({wrap:{backgroundColor:"#eee",paddingHorizontal:3,borderRadius:re}})),ie=function(e){var t=e.onPress;return i.a.createElement(z.c,{onPress:t},i.a.createElement(P.a,{style:oe.wrap},i.a.createElement(Y.a,{name:"chevron-small-right",size:20,color:"black"})))},ce=Object(o.memo)((function(e){var t=e.children;return i.a.createElement(H,{type:"bold"},t)})),le=n(447),se=B.a.create({wrap:{backgroundColor:"#eee",width:ae-30,height:35,borderRadius:5,flexDirection:"row",display:"flex",alignItems:"center"},icon:{marginLeft:10,marginRight:15}}),ue=function(){var e=Object(W.useNavigation)();return i.a.createElement(N.a,{onPress:function(){return e.navigate("SearchScreen")}},i.a.createElement(P.a,{style:se.wrap},i.a.createElement(P.a,{style:se.icon},i.a.createElement(le.a,{name:"search1",size:20,color:"#333"})),i.a.createElement(P.a,null,i.a.createElement(H,{type:"bold"},"T\xecm ki\u1ebfm"))))},me=n(97),de=n.n(me),ge=n(98),pe=n(99),fe=n(84);function ye(){var e=de()(["\n  query dishs {\n    dishs {\n      id\n      recipeImage\n      title\n    }\n  }\n"]);return ye=function(){return e},e}var be=Object(pe.a)(ye()),Ee=B.a.create({wrap:{padding:10,flexGrow:1},card:{width:(ae-20)/2,padding:5},button:{padding:15}}),he=function(){var e=Object(fe.a)(be),t=e.data;return e.loading?i.a.createElement(P.a,null,i.a.createElement(H,null,"Loading")):(console.log("data",t),i.a.createElement(i.a.Fragment,null,i.a.createElement(ge.a,{contentContainerStyle:Ee.wrap,data:t.dishs||[],renderItem:function(e){var t=e.item;return i.a.createElement(P.a,{style:Ee.card},i.a.createElement(L,{food:t,style:{flex:1}}))},keyExtractor:function(e){return e.id},numColumns:2}),i.a.createElement(P.a,{style:Ee.button},i.a.createElement(G,{title:"Xem th\xeam",onPress:function(){}}))))};var ve=B.a.create({wrap_section:{paddingBottom:20},paddingBottom:{paddingBottom:10},section:{paddingHorizontal:15,flexDirection:"row"},center:{justifyContent:"space-between",alignItems:"center"}}),we=function(e){var t=e.navigation,n=function(){t.navigate("Categories")};return i.a.createElement(D.a,null,i.a.createElement(z.b,{contentContainerStyle:{flex:1,backgroundColor:"#fff"}},i.a.createElement(P.a,{style:[ve.section,ve.wrap_section,{paddingTop:15}]},i.a.createElement(ue,null)),i.a.createElement(P.a,{style:ve.wrap_section},i.a.createElement(P.a,{style:[ve.section,ve.center,{paddingBottom:5}]},i.a.createElement(ce,null,"Danh m\u1ee5c"),i.a.createElement(ie,{onPress:n})),i.a.createElement(U,null)),i.a.createElement(P.a,{style:ve.wrap_section},i.a.createElement(P.a,{style:[ve.section,ve.center,{paddingBottom:5}]},i.a.createElement(ce,null,"M\xf3n m\u1edbi"),i.a.createElement(ie,{onPress:n})),i.a.createElement(he,null))))};function Oe(){var e=de()(["\n  query dish($id: String!) {\n    dish(id: $id) {\n      id\n      recipeImage\n      title\n      description\n      ingredients\n      steps {\n        imgs\n        text\n      }\n    }\n  }\n"]);return Oe=function(){return e},e}var je=Object(pe.a)(Oe()),ke=B.a.create({img:{height:300},content:{position:"relative",backgroundColor:"#fff"},top:{position:"absolute",top:-30,left:0,right:0,backgroundColor:"#fff",height:30,borderTopStartRadius:20,borderTopEndRadius:20},section:{marginBottom:10,paddingHorizontal:15,paddingBottom:15},section_title:{marginBottom:5},border:{borderBottomColor:ne,borderBottomWidth:1,borderStyle:"dashed"},dot:{height:8,width:8,borderRadius:8,backgroundColor:te,marginRight:10,marginTop:7}}),xe=function(){var e=Object(W.useNavigation)(),t=Object(W.useRoute)();e.setOptions({title:t.params.title});var n=Object(fe.a)(je,{variables:{id:t.params.id}}),r=n.data;if(n.loading)return i.a.createElement(H,null,"Loading");if(!r)return i.a.createElement(H,null,"No dish");var a=r.dish;return i.a.createElement(z.b,null,i.a.createElement(Q.a,{style:ke.img,source:{uri:a.recipeImage},resizeMode:"cover"}),i.a.createElement(P.a,{style:ke.content},i.a.createElement(P.a,{style:ke.top}),i.a.createElement(P.a,{style:[ke.section,ke.border]},i.a.createElement(H,{style:{fontSize:20,marginBottom:15,lineHeight:25,color:ee},type:"bold"},a.title),a.description.length>0&&i.a.createElement(H,null,a.description)),i.a.createElement(P.a,{style:[ke.section,ke.border]},i.a.createElement(H,{type:"bold",style:{marginBottom:10}},"Nguy\xean li\u1ec7u:"),a.ingredients.map((function(e){return i.a.createElement(P.a,{style:{marginBottom:7,flexDirection:"row"}},i.a.createElement(P.a,{style:[ke.dot]}),i.a.createElement(P.a,{style:{flex:1}},i.a.createElement(H,{key:e},e)))}))),i.a.createElement(P.a,{style:[ke.section]},i.a.createElement(H,{type:"bold",style:{marginBottom:10}},"C\xe1ch l\xe0m:"),a.steps.map((function(e,t){return i.a.createElement(P.a,{key:e.text,style:{marginBottom:10,flexDirection:"row"}},i.a.createElement(P.a,{style:[ke.dot]}),i.a.createElement(P.a,{style:{flex:1}},i.a.createElement(H,{style:{marginBottom:7}},e.text),i.a.createElement(ge.a,{data:e.imgs,horizontal:!0,renderItem:function(e){var t=e.item;return i.a.createElement(Q.a,{key:t,style:{height:120,width:120,borderRadius:10,marginRight:10},source:{uri:t},resizeMode:"cover"})},keyExtractor:function(e){return e}})))})))))},Se=B.a.create({wrap:{borderBottomColor:"#eee",borderBottomWidth:1},title:{paddingHorizontal:15,paddingVertical:10}}),Ce=function(e){var t=e.category;return i.a.createElement(P.a,{style:Se.wrap},i.a.createElement(P.a,{style:Se.title},i.a.createElement(H,{type:"bold"},t.title)),i.a.createElement(z.a,{data:t.cates,renderItem:function(e){var t=e.item;return i.a.createElement(P.a,{style:Se.title},i.a.createElement(H,null,t))},keyExtractor:function(e){return e}}))};function Pe(){var e=de()(["\n  query categories {\n    categories {\n      title\n      cates\n    }\n  }\n"]);return Pe=function(){return e},e}var Be=Object(pe.a)(Pe());var De=function(){var e=Object(fe.a)(Be),t=e.data;return e.loading?i.a.createElement(R.a,null,"Loading"):(console.log(t),i.a.createElement(z.a,{contentContainerStyle:{backgroundColor:"#fff"},data:t.categories,renderItem:function(e){var t=e.item;return i.a.createElement(Ce,{category:t})},keyExtractor:function(e){return e.title}}))};var ze=function(){return i.a.createElement(z.b,null,i.a.createElement(R.a,null,"CategorieChild Screen"))};var Re=function(){return i.a.createElement(P.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},i.a.createElement(R.a,null,"Search Screen"))},_e=Object(C.a)();var Ie=function(){return i.a.createElement(S.a,null,i.a.createElement(_e.Navigator,{initialRouteName:"Home"},i.a.createElement(_e.Screen,{name:"Home",component:we,options:function(){return{header:function(){return null}}}}),i.a.createElement(_e.Screen,{name:"Detail",component:xe}),i.a.createElement(_e.Screen,{name:"Categories",component:De}),i.a.createElement(_e.Screen,{name:"CategorieChild",component:ze}),i.a.createElement(_e.Screen,{name:"SearchScreen",component:Re})))};function He(){var e=Object(l.a)({Quicksand_400Regular:u.a,Quicksand_600SemiBold:u.b});return a()(e,1)[0]?i.a.createElement(c.a,{client:x},i.a.createElement(Ie,null)):i.a.createElement(s.a,null)}},278:function(e,t,n){n(279),e.exports=n(436)},279:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/cookapp/expo-service-worker.js",{scope:"/cookapp/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},325:function(e,t,n){e.exports=n.p+"static/media/an-sang.9da58588.jpg"},326:function(e,t,n){e.exports=n.p+"static/media/an-trua.d0ff5dd1.png"},327:function(e,t,n){e.exports=n.p+"static/media/an-toi.f989c8e1.jpg"}},[[278,1,2]]]);
//# sourceMappingURL=app.5afe2eaa.chunk.js.map