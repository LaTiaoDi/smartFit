(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/search/search"],{"423e":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={uniSearchBar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(n.bind(null,"f8ca"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"8e36"))},unicloudDb:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(n.bind(null,"3220"))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,"cf3d"))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,"0a62"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.localSearchList.length),i=t.$hasSSP("d9c30b22-6"),a=i?t.$getSSP("d9c30b22-6","default")["loading"]&&!t.netHotListIsHide:null,c=!i||a||t.netHotListIsHide?null:t.$getSSP("d9c30b22-6","default"),o=i&&!a&&!t.netHotListIsHide&&c["error"]?t.$getSSP("d9c30b22-6","default"):null,s=!i||a||t.netHotListIsHide||c["error"]?null:t.$getSSP("d9c30b22-6","default");t._isMounted||(t.e0=function(e){t.localSearchListDel=!0},t.e1=function(e){t.localSearchListDel=!1},t.e2=function(e){t.netHotListIsHide=!t.netHotListIsHide},t.e3=function(e,n){var i=arguments[arguments.length-1].currentTarget.dataset,a=i.eventParams||i["event-params"];n=a.word;return t.search(n.content)}),t.$mp.data=Object.assign({},{$root:{g0:n,m0:i,m1:a,m2:c,m3:o,m4:s}})},c=[]},"42ff":function(t,e,n){},"4ca3":function(t,e,n){"use strict";(function(t,i){var a=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(n("7ca3"));var o={data:function(){return{mallGoodsDbName:"opendb-news-articles",searchLogDbName:"opendb-search-log",statusBarHeight:"0px",localSearchList:t.getStorageSync("__local_search_history"),localSearchListDel:!1,netHotListIsHide:!1,searchText:"",iconColor:"#999999",associativeList:[],keyBoardPopup:!1,hotWorld:"增肌小诀窍",focus:!0,speechEngine:"iFly"}},created:function(){var e=this;this.db=i.database(),this.searchLogDb=this.db.collection(this.searchLogDbName),this.mallGoodsDb=this.db.collection(this.mallGoodsDbName),t.onKeyboardHeightChange((function(t){e.keyBoardPopup=0!==t.height})),this.searchText=getApp().globalData.searchText},computed:{associativeShow:function(){return this.searchText&&this.associativeList.length}},onLoad:function(){},methods:{clear:function(t){console.log("res: ",t)},confirm:function(t){this.search(t.value)},cancel:function(e){t.hideKeyboard(),this.searchText="",this.loadList()},search:function(e){(e||this.hotWorld)&&(e?(this.searchText!==e&&(this.searchText=e),this.localSearchListManage(e),this.searchLogDbAdd(e)):this.hotWorld&&(this.searchText=this.hotWorld),t.hideKeyboard(),this.loadList(this.searchText))},localSearchListManage:function(e){var n=t.getStorageSync("__local_search_history");n.length?(this.localSearchList.unshift(e),function(t){for(var e=t.length-1;e>=0;e--){var n=t.indexOf(t[e]),i=t.lastIndexOf(t[e]);n!=i&&t.splice(i,1)}}(this.localSearchList),this.localSearchList.length>10&&this.localSearchList.pop()):this.localSearchList=[e],t.setStorageSync("__local_search_history",this.localSearchList)},LocalSearchListClear:function(){var e=this;t.showModal({content:"确认清空搜索历史吗",confirmText:"删除",confirmColor:"red",cancelColor:"#808080",success:function(n){n.confirm&&(e.localSearchListDel=!1,e.localSearchList=[],t.removeStorageSync("__local_search_history"))}})},LocalSearchlistItemClick:function(e,n){if(this.localSearchListDel)return this.localSearchList.splice(n,1),t.setStorageSync("__local_search_history",this.localSearchList),void(this.localSearchList.length||(this.localSearchListDel=!1));this.search(e)},searchHotRefresh:function(){this.$refs.udb.refresh()},speech:function(){},searchLogDbAdd:function(t){var e=this;this.getDeviceId().then((function(n){e.searchLogDb.add({device_id:n,content:t,create_date:Date.now()})}))},getDeviceId:function(){return new Promise((function(e,n){var i=t.getStorageSync("uni_id");e(i||t.getSystemInfoSync().system+"_"+Math.random().toString(36).substr(2))}))},associativeClick:function(t){console.log("associativeClick: ",t),this.loadList(t.title)},loadList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";getApp().globalData.searchText=e,t.switchTab({url:"/pages/list/list"})},backPage:function(){t.navigateBack()}},watch:{searchText:function(t,e,n){var i=t,a=null,c=!0;return n&&i(),function(){var t=arguments,n=this;c&&(c=!1,i.apply(n,t)),a&&clearTimeout(a),a=setTimeout((function(){clearTimeout(a),a=null,i.apply(n,t)}),e||200)}}((function(t){var e=this;t?this.mallGoodsDb.where((0,c.default)({},"title",new RegExp(t,"gi"))).field("_id,title").get().then((function(t){e.associativeList=t.result.data})):(this.associativeList.length=0,getApp().globalData.searchText="")}),100)}};e.default=o}).call(this,n("df3c")["default"],n("861b")["default"])},"656d":function(t,e,n){"use strict";var i=n("a458"),a=n.n(i);a.a},"6c21":function(t,e,n){"use strict";(function(t,e){var i=n("47a9");n("39d9"),n("861b");i(n("3240"));var a=i(n("cccc"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"79ae":function(t,e,n){"use strict";n.r(e);var i=n("4ca3"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},"922e":function(t,e,n){"use strict";var i=n("42ff"),a=n.n(i);a.a},a1af:function(t,e,n){},a458:function(t,e,n){},b519:function(t,e,n){"use strict";var i=n("a1af"),a=n.n(i);a.a},cccc:function(t,e,n){"use strict";n.r(e);var i=n("423e"),a=n("79ae");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("b519"),n("922e"),n("656d");var o=n("828b"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"d2b6445a",null,!1,i["a"],void 0);e["default"]=s.exports}},[["6c21","common/runtime","common/vendor"]]]);