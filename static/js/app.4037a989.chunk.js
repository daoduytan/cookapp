(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{270:function(e,t,a){"use strict";a.d(t,"a",(function(){return Xe}));var n=a(16),r=a.n(n),o=a(0),i=a.n(o),c=a(40),l=a(271),s=a(450),u=a(180),d=a(19),m=a.n(d),g=a(8),p=a.n(g),f=a(53),h=a(93),b=a(232),y=a(87),E=a(233),v=a(52),w="https://apicook.herokuapp.com",O="#034694",j="#DBA111",x="#D1D3D4",k=15,C=5,S=Math.round(v.a.get("window").width);Math.round(v.a.get("window").height);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=Object(h.b)({uri:w+"/graphql"}),z=Object(b.a)((function(e,t){var a,n;return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.headers,e.next=3,m.a.awrap(E.a.getItem("token"));case 3:return n=e.sent,e.abrupt("return",{headers:P(P({},a),{},{authorization:"Bearer "+n})});case 5:case"end":return e.stop()}}),null,null,null,Promise)})).concat(B),I=new y.a,R=new f.a({link:z,cache:I}),N=a(227),_=a(451),H=a(3),T=a(5),M=a(265),W=a(51),$=a(50);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=Object(o.memo)((function(e){var t=e.children,a=e.type,n=void 0===a?"reglar":a,r=e.size,o=void 0===r?"reglar":r,c=e.style;return i.a.createElement($.a,{style:F({lineHeight:20,fontSize:function(){switch(o){case"small":return 12;default:return k}}(),fontFamily:function(){switch(n){case"bold":return"Quicksand_600SemiBold";default:return"Quicksand_400Regular"}}()},c)},t)})),A=a(23),L=a(55),G=a(44),J=T.a.create({card:{overflow:"hidden"},img:{backgroundColor:"#eee",height:170,borderRadius:10},text_wrap:{paddingVertical:10},text:{}}),V=Object(o.memo)((function(e){var t=e.food,a=e.style,n=Object(A.useNavigation)();return i.a.createElement(H.a,{style:[J.card,a]},i.a.createElement(G.a,{onPress:function(){n.navigate("Detail",{title:t.title,id:t.id})}},i.a.createElement(L.a,{style:J.img,source:{uri:t.recipeImage}})),i.a.createElement(H.a,{style:J.text_wrap},i.a.createElement(q,{type:"bold",style:J.text},t.title)))})),U=a(18),X=a.n(U),K=a(27),Y=a.n(K),Z=a(67),ee=Object(o.memo)((function(e){var t=e.style,a=Y()(e,["style"]);return i.a.createElement(Z.a,X()({},a,{style:[t,{fontFamily:"Quicksand_600SemiBold"}]}))})),te=a(258),ae=function(e){var t=e.style,a=Y()(e,["style"]);return i.a.createElement(te.a,X()({},a,{style:[t,{fontFamily:"Quicksand_600SemiBold"}]}))},ne=T.a.create({box:{flexDirection:"row",alignItems:"center",borderRadius:5,backgroundColor:"#fff",margin:5,overflow:"hidden",borderColor:"#eee",borderWidth:1},wrap_text:{paddingHorizontal:10},text:{fontSize:12},img:{height:60,width:60,backgroundColor:"#eee"}}),re=Object(o.memo)((function(e){var t=e.category,a=Object(A.useNavigation)();return i.a.createElement(G.a,{onPress:function(){return a.navigate("CategorieChild",{title:t.title,cate:t.id})}},i.a.createElement(H.a,{style:ne.box},i.a.createElement(H.a,null,i.a.createElement(L.a,{style:ne.img,source:t.img})),i.a.createElement(H.a,{style:ne.wrap_text},i.a.createElement(q,{style:{fontSize:16},type:"bold"},t.title))))})),oe=[{id:"\u0102N S\xc1NG",title:"\u0102n s\xe1ng",img:a(327)},{id:"\u0102N TR\u01afA",title:"\u0102n tr\u01b0a",img:a(328)},{id:"\u0102N T\u1ed0I",title:"\u0102n t\u1ed1i",img:a(329)}];var ie=function(){return i.a.createElement(W.b,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:{paddingHorizontal:10}},oe.map((function(e){return i.a.createElement(re,{key:e.id,category:e})})))},ce=a(448),le=T.a.create({wrap:{backgroundColor:"#eee",paddingHorizontal:3,borderRadius:C}}),se=function(e){var t=e.onPress;return i.a.createElement(W.c,{onPress:t},i.a.createElement(H.a,{style:le.wrap},i.a.createElement(ce.a,{name:"chevron-small-right",size:20,color:"black"})))},ue=a(99),de=a(100),me=T.a.create({wrap:{padding:5},card:{width:(S-10)/2,padding:10},button:{padding:15}}),ge=function(e){var t=e.dishs,a=e.loading,n=e.page,r=void 0===n?1:n,o=e.pages,c=void 0===o?1:o,l=e.loadMore,s=e.total,u=void 0===s?0:s,d=function(){l(r)};return i.a.createElement(H.a,null,u>0&&i.a.createElement(H.a,{style:{paddingHorizontal:15,paddingTop:15}},i.a.createElement(q,{style:{color:O},type:"bold"},u+" m\xf3n \u0103n \u0111\u01b0\u1ee3c t\xecm th\u1ea5y")),i.a.createElement(de.a,{contentContainerStyle:me.wrap,data:t||[],renderItem:function(e){var t=e.item;return i.a.createElement(H.a,{style:me.card},i.a.createElement(V,{food:t,style:{flex:1}}))},keyExtractor:function(e){return e.id},numColumns:2}),a?i.a.createElement(H.a,null,i.a.createElement(ue.a,null)):0===t.length||c===r?i.a.createElement(H.a,null):i.a.createElement(H.a,{style:me.button},i.a.createElement(ae,{title:"Xem th\xeam",onPress:d})))},pe=Object(o.memo)((function(e){var t=e.children;return i.a.createElement(q,{type:"bold",style:{fontSize:17,color:O}},t)})),fe=a(449),he=T.a.create({wrap:{backgroundColor:"#eee",width:S-30,height:35,borderRadius:5,flexDirection:"row",display:"flex",alignItems:"center"},icon:{marginLeft:10,marginRight:15}}),be=function(){var e=Object(A.useNavigation)();return i.a.createElement(G.a,{onPress:function(){return e.navigate("SearchScreen")}},i.a.createElement(H.a,{style:he.wrap},i.a.createElement(H.a,{style:he.icon},i.a.createElement(fe.a,{name:"search1",size:20,color:"#333"})),i.a.createElement(H.a,null,i.a.createElement(q,{type:"bold"},"T\xecm ki\u1ebfm"))))},ye=a(25),Ee=a.n(ye),ve=a(65),we=a.n(ve),Oe=a(58),je=a(66);function xe(){var e=we()(["\n  mutation getDishs($page: Float!) {\n    getDishs(page: $page) {\n      dishs {\n        id\n        recipeImage\n        title\n      }\n      page\n      pages\n    }\n  }\n"]);return xe=function(){return e},e}var ke=Object(je.a)(xe()),Ce=(T.a.create({wrap:{padding:5,flexGrow:1},card:{width:(S-10)/2,padding:10},button:{padding:15}}),function(){var e=Object(o.useState)(1),t=r()(e,2),a=t[0],n=t[1],c=Object(o.useState)([]),l=r()(c,2),s=l[0],u=l[1],d=Object(o.useState)(1),m=r()(d,2),g=m[0],p=m[1],f=Object(Oe.a)(ke),h=r()(f,2),b=h[0],y=h[1].loading;return Object(o.useEffect)((function(){b({variables:{page:a}}).then((function(e){var t=e.data;u(t.getDishs.dishs),p(t.getDishs.pages)}))}),[]),i.a.createElement(ge,{page:a,pages:g,loading:y,dishs:s,loadMore:function(){b({variables:{page:a+1}}).then((function(e){var t=e.data;u([].concat(Ee()(s),Ee()(t.getDishs.dishs))),n(a+1),p(t.getDishs.pages)}))}})});var Se=T.a.create({wrap_section:{paddingBottom:20},paddingBottom:{paddingBottom:10},section:{paddingHorizontal:15,flexDirection:"row"},center:{justifyContent:"space-between",alignItems:"center"}}),De=function(e){var t=e.navigation,a=function(){t.navigate("Categories")};return i.a.createElement(M.a,{style:{flex:1}},i.a.createElement(W.b,{style:{backgroundColor:"#fff",flex:1},contentContainerStyle:{flex:1,backgroundColor:"#fff"}},i.a.createElement(H.a,{style:[Se.section,Se.wrap_section,{paddingTop:15}]},i.a.createElement(be,null)),i.a.createElement(H.a,{style:Se.wrap_section},i.a.createElement(H.a,{style:[Se.section,Se.center,{paddingBottom:5}]},i.a.createElement(pe,null,"Danh m\u1ee5c"),i.a.createElement(se,{onPress:a})),i.a.createElement(ie,null)),i.a.createElement(H.a,{style:Se.wrap_section},i.a.createElement(H.a,{style:[Se.section,Se.center,{paddingBottom:5}]},i.a.createElement(pe,null,"M\xf3n m\u1edbi"),i.a.createElement(se,{onPress:a})),i.a.createElement(Ce,null))))};function Pe(){var e=we()(["\n  query dish($id: String!) {\n    dish(id: $id) {\n      id\n      recipeImage\n      title\n      description\n      ingredients\n      steps {\n        imgs\n        text\n      }\n    }\n  }\n"]);return Pe=function(){return e},e}var Be=Object(je.a)(Pe()),ze=T.a.create({wrap:{flex:1,backgroundColor:"#fff"},img:{height:300},content:{position:"relative",backgroundColor:"#fff"},top:{position:"absolute",top:-30,left:0,right:0,backgroundColor:"#fff",height:30,borderTopStartRadius:20,borderTopEndRadius:20},section:{marginBottom:10,paddingHorizontal:15,paddingBottom:15},section_title:{marginBottom:5},border:{borderBottomColor:x,borderBottomWidth:1,borderStyle:"dashed"},dot:{height:8,width:8,borderRadius:8,backgroundColor:j,marginRight:10,marginTop:7}}),Ie=function(){var e=Object(A.useNavigation)(),t=Object(A.useRoute)();e.setOptions({title:t.params.title});var a=Object(Oe.b)(Be,{variables:{id:t.params.id}}),n=a.data;if(a.loading)return i.a.createElement(H.a,{style:[ze.wrap,{alignItems:"center",justifyContent:"center"}]},i.a.createElement(ue.a,null));if(!n)return i.a.createElement(H.a,{style:[ze.wrap,{alignItems:"center",justifyContent:"center"}]},i.a.createElement(q,null,"No dish"));var r=n.dish;return i.a.createElement(H.a,{style:ze.wrap},i.a.createElement(W.b,null,i.a.createElement(L.a,{style:ze.img,source:{uri:r.recipeImage},resizeMode:"cover"}),i.a.createElement(H.a,{style:ze.content},i.a.createElement(H.a,{style:ze.top}),i.a.createElement(H.a,{style:[ze.section,ze.border]},i.a.createElement(q,{style:{fontSize:20,marginBottom:15,lineHeight:25,color:O},type:"bold"},r.title),r.description.length>0&&i.a.createElement(q,null,r.description)),i.a.createElement(H.a,{style:[ze.section,ze.border]},i.a.createElement(q,{type:"bold",style:{marginBottom:10}},"Nguy\xean li\u1ec7u:"),r.ingredients.map((function(e){return i.a.createElement(H.a,{style:{marginBottom:7,flexDirection:"row"},key:e},i.a.createElement(H.a,{style:[ze.dot]}),i.a.createElement(H.a,{style:{flex:1}},i.a.createElement(q,{key:e},e)))}))),i.a.createElement(H.a,{style:[ze.section]},i.a.createElement(q,{type:"bold",style:{marginBottom:10}},"C\xe1ch l\xe0m:"),r.steps.map((function(e,t){return i.a.createElement(H.a,{key:e.text,style:{marginBottom:10,flexDirection:"row"}},i.a.createElement(H.a,{style:[ze.dot]}),i.a.createElement(H.a,{style:{flex:1}},i.a.createElement(q,{style:{marginBottom:7}},e.text),i.a.createElement(de.a,{data:e.imgs,horizontal:!0,renderItem:function(e){var t=e.item;return i.a.createElement(L.a,{key:t,style:{height:120,width:120,borderRadius:10,marginRight:10},source:{uri:t},resizeMode:"cover"})},keyExtractor:function(e){return e}})))}))))))},Re=T.a.create({wrap:{borderBottomColor:"#eee",borderBottomWidth:1},title:{paddingHorizontal:15,paddingVertical:10}}),Ne=function(e){var t=e.category,a=Object(A.useNavigation)();return i.a.createElement(H.a,{style:Re.wrap},i.a.createElement(H.a,{style:Re.title},i.a.createElement(q,{type:"bold"},t.title)),i.a.createElement(W.a,{data:t.cates,renderItem:function(e){var t=e.item;return i.a.createElement(G.a,{style:Re.title,onPress:function(){a.navigate("CategorieChild",{title:t,cate:t})}},i.a.createElement(q,null,t))},keyExtractor:function(e){return e}}))};function _e(){var e=we()(["\n  query categories {\n    categories {\n      title\n      cates\n    }\n  }\n"]);return _e=function(){return e},e}var He=Object(je.a)(_e());var Te=function(){var e=Object(Oe.b)(He),t=e.data;return e.loading?i.a.createElement(ue.a,null):i.a.createElement(W.a,{contentContainerStyle:{backgroundColor:"#fff"},data:t.categories,renderItem:function(e){var t=e.item;return i.a.createElement(Ne,{category:t})},keyExtractor:function(e){return e.title}})};function Me(){var e=we()(["\n  mutation searchDishsWithCate($cate: String!) {\n    searchDishsWithCate(cate: $cate) {\n      dishs {\n        title\n        id\n        recipeImage\n      }\n      page\n      pages\n      total\n    }\n  }\n"]);return Me=function(){return e},e}var We=Object(je.a)(Me());var $e=function(){var e=Object(A.useNavigation)(),t=Object(A.useRoute)(),a=Object(Oe.a)(We),n=r()(a,2),c=n[0],l=n[1],s=l.data,u=l.loading,d=t.params.title.toLowerCase(),m=d.charAt(0).toUpperCase()+d.slice(1);e.setOptions({title:m}),Object(o.useEffect)((function(){t.params.title&&c({variables:{cate:t.params.cate}})}),[]);var g=s?s.searchDishsWithCate.dishs:[];return i.a.createElement(ge,{dishs:g,loading:u,loadMore:function(){}})},Qe=a(266),Fe=T.a.create({wrap:{padding:15,flexDirection:"row",alignItems:"center"},search:{flex:1,flexDirection:"row",alignItems:"center",borderColor:"#eee",borderWidth:1,borderStyle:"solid",borderRadius:10,position:"relative"},back:{height:45,width:30,justifyContent:"center",borderRadius:10},input:{flex:1,height:45,paddingHorizontal:15,borderColor:"#fff"},button:{position:"absolute",right:0,top:0,height:45,width:45,alignItems:"center",justifyContent:"center"}}),qe=function(e){var t=e.onSearch,a=Object(A.useNavigation)(),n=Object(Qe.debounce)((function(e){e.length>0&&t(e)}),300);return i.a.createElement(H.a,{style:Fe.wrap},i.a.createElement(G.a,{style:[Fe.back],onPress:function(){a.goBack()}},i.a.createElement(fe.a,{name:"arrowleft",size:20,color:"#333"})),i.a.createElement(H.a,{style:Fe.search},i.a.createElement(ee,{placeholder:"Search food...",style:Fe.input,onChangeText:n}),i.a.createElement(H.a,{style:Fe.button},i.a.createElement(fe.a,{name:"search1",size:20,color:"#333"}))))};function Ae(){var e=we()(["\n  mutation searchDishs($text: String!) {\n    searchDishs(text: $text) {\n      dishs {\n        title\n        id\n        recipeImage\n      }\n      page\n      pages\n      total\n    }\n  }\n"]);return Ae=function(){return e},e}var Le=Object(je.a)(Ae());var Ge=T.a.create({wrap:{flex:1,backgroundColor:"#fff"}}),Je=function(){var e=Object(o.useState)(1),t=r()(e,2),a=t[0],n=t[1],c=Object(Oe.a)(Le),l=r()(c,2),s=l[0],u=l[1],d=u.data,m=u.loading,g=Object(o.useState)(""),p=r()(g,2),f=p[0],h=p[1],b=d?d.searchDishs.dishs:[],y=d?d.searchDishs.total:void 0;return i.a.createElement(H.a,{style:Ge.wrap},i.a.createElement(qe,{onSearch:function(e){h(e),s({variables:{text:e}}).then((function(){n(1)}))}}),i.a.createElement(H.a,{style:{flex:1}},i.a.createElement(ge,{dishs:b,page:a,loadMore:function(){s({variables:{text:f}}).then((function(){n(a+1)}))},loading:m,total:y})))},Ve=Object(_.a)();var Ue=function(){return i.a.createElement(N.a,null,i.a.createElement(Ve.Navigator,{initialRouteName:"Home"},i.a.createElement(Ve.Screen,{name:"Home",component:De,options:function(){return{header:function(){return null}}}}),i.a.createElement(Ve.Screen,{name:"Detail",component:Ie}),i.a.createElement(Ve.Screen,{name:"Categories",component:Te,options:function(){return{headerTitle:"Danh m\u1ee5c"}}}),i.a.createElement(Ve.Screen,{name:"CategorieChild",component:$e}),i.a.createElement(Ve.Screen,{name:"SearchScreen",component:Je,options:function(){return{header:function(){return null}}}})))};function Xe(){var e=Object(l.a)({Quicksand_400Regular:u.a,Quicksand_600SemiBold:u.b});return r()(e,1)[0]?i.a.createElement(c.a,{client:R},i.a.createElement(Ue,null)):i.a.createElement(s.a,null)}},280:function(e,t,a){a(281),e.exports=a(438)},281:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/cookapp/expo-service-worker.js",{scope:"/cookapp/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},327:function(e,t,a){e.exports=a.p+"static/media/an-sang.9da58588.jpg"},328:function(e,t,a){e.exports=a.p+"static/media/an-trua.d0ff5dd1.png"},329:function(e,t,a){e.exports=a.p+"static/media/an-toi.f989c8e1.jpg"}},[[280,1,2]]]);
//# sourceMappingURL=app.4037a989.chunk.js.map