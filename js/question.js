webpackJsonp([3],{"2z+g":function(t,e){},"860e":function(t,e,a){"use strict";var n=a("fKPv"),s=a.n(n),i=(a("EuXz"),a("mfU/")),o=a("BM2P"),r="module-question-list-answer-card",c={name:r,components:s()({},i["a"].name,i["a"]),props:{answer:{required:!0,validator:function(t){return!t||t instanceof Object}}},computed:{anonymity:function(){var t=this.answer.anonymity;return!!t},user:function(){var t=this.answer.user;return t||{}},showUsername:function(){return this.anonymity?"匿名用户":this.user.name},body:function(){var t=this.answer.body;return Object(o["syntaxTextAndImage"])(t||"").text}}},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.answer?a("div",{staticClass:"module-question-list-answer-card"},[a("module-user-avatar",{attrs:{anonymity:t.anonymity,src:t.user.avatar,sex:t.user.sex}}),t._v("\n  "+t._s(t.showUsername)+"："+t._s(t.body)+"\n")],1):a("div",{staticClass:"module-question-list-answer-card-empty"})},u=[],d=a("XyMi");function m(t){a("2z+g")}var v,f=!1,h=m,p=null,_=null,b=Object(d["a"])(c,l,u,f,h,p,_),g=b.exports,w={name:"module-question-list-item",components:(v={},s()(v,i["a"].name,i["a"]),s()(v,g.name,g),v),props:{question:{type:Object,required:!0}},computed:{answer:function(){var t=this.question.answer;return t},body:function(){return Object(o["syntaxTextAndImage"])(this.question.body)},firstImageStyle:function(){var t=this.body.images,e=t.pop();return!!e&&"background-image: url(".concat(e,")")}}},y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-question-list-item"},[a("router-link",{staticClass:"module-question-list-item_title",attrs:{tag:"h3",to:"/questions/"+t.question.id}},[t._v("\n    "+t._s(t.question.subject)+"\n    "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.question.excellent,expression:"question.excellent"}],staticClass:"module-question-list-item-shang-i"},[t._v("精")])]),t.firstImageStyle?a("router-link",{staticClass:"module-question-list-item_image",style:t.firstImageStyle,attrs:{tag:"div",to:"/questions/"+t.question.id}}):t._e(),a("module-question-list-answer-card",{attrs:{answer:t.answer}}),a("router-link",{staticClass:"module-question-list-item_button",attrs:{to:"/questions/"+t.question.id,tag:"div"}},[a("span",[a("span",{staticClass:"module-question-list-item_button-style1"},[t._v(t._s(t.question.watchers_count))]),t._v(" 关注\n    ")]),a("span",[a("span",[t._v("·")]),a("span",{staticClass:"module-question-list-item_button-style1"},[t._v(t._s(t.question.answers_count))]),t._v(" 回答\n    ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.question.amount,expression:"question.amount"}]},[a("span",[t._v("·")]),a("span",{staticClass:"module-question-list-item-shang"},[a("span",[t._v("赏")]),t._v("\n        "+t._s(t.question.amount)+"\n      ")])]),a("span",{staticClass:"module-question-list-item_button-time"},[t._v(t._s(t._f("time2tips")(t.question.updated_at)))])])],1)},q=[];function x(t){a("hHZG")}var C=!1,k=x,N=null,B=null,M=Object(d["a"])(w,y,q,C,k,N,B);e["a"]=M.exports},AMFi:function(t,e){},BrJ6:function(t,e,a){"use strict";e["a"]=i,e["c"]=r,e["b"]=c,e["f"]=l,e["e"]=u,e["d"]=d;var n=a("0zyd");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].get("/question-topics",{params:t,validateStatus:function(t){return 200===t}})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return s({offset:t,limit:e,follow:a})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].get("/user/question-topics",{params:t,validateStatus:function(t){return 200===t}})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return o({after:t,limit:e,type:"follow"})}function c(t){return n["a"].put("/user/question-topics/".concat(t),{},{validateStatus:function(t){return 201===t}})}function l(t){return n["a"].delete("/user/question-topics/".concat(t),{validateStatus:function(t){return 204===t}})}function u(t){return n["a"].get("/question-topics/".concat(t),{validateStatus:function(t){return 200===t}})}function d(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:15;return n["a"].get("/question-topics/".concat(t,"/questions"),{params:{type:e,offset:a,limit:s},validateStatus:function(t){return 200===t}})}},GrvH:function(t,e){},HyuL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("rzQm"),s=a.n(n),i=a("mfU/"),o=a("860e"),r=a("BrJ6"),c="page-question-topic",l={name:c,components:{"user-avatar":i["a"],"question-item":o["a"]},data:function(){return{topic:{},loading:!0,questions:[],typeNavOffsetTop:0}},computed:{id:function(){return this.$route.params.id},type:function(){var t=this.$route.query.type,e=void 0===t?"hot":t;return e},loadContainer:function(){return this.$refs.load}},watch:{$route:function(t,e){console.log(t.path===e.path&&t.query.type!==e.query.type),t.path===e.path&&t.query.type!==e.query.type&&(this.questions=[],this.loadContainer.beforeRefresh())}},methods:{classNameBuilder:function(t){return"".concat(c,"-").concat(t)},handleRefresh:function(){var t=this;Object(r["e"])(this.id).then(function(e){var a=e.data;t.loading=!1,t.topic=a,t.handleRefreshQuestions()}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loading=!0,t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},handleRefreshQuestions:function(){var t=this,e=0,a=15;Object(r["d"])(this.id,this.type,e,a).then(function(e){var n=e.data;t.questions=n,t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(n.length<a)}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},handleLoadQuestions:function(){var t=this,e=this.questions.length,a=15;Object(r["d"])(this.id,this.type,e,a).then(function(e){var n=e.data;t.questions=s()(t.questions).concat(s()(n)),t.loadContainer.bottomEnd(n.length<a)}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},handleScrolling:function(){var t=this.$refs.types,e=this.typeNavOffsetTop,a=document.documentElement.scrollTop+48;if(a>=e)return t.style.position="fixed",t.style.marginTop=0,void(t.style.top="0.9rem");t.style.position="relative",t.style.marginTop="-1rem",t.style.top="1.16rem"},handleFollow:function(t){var e=this;Object(r["b"])(t.id).then(function(){t.has_follow=!0,e.follows_count+=1}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.$Message.error(n)})},handleUnfollow:function(t){var e=this;Object(r["f"])(t.id).then(function(){if(t.has_follow=!1,t.follows_count-=1,"follow"===e.type){var a=[];e.topics.forEach(function(e){e.id!==t.id&&a.push(e)}),e.topics=a}}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.$Message.error(n)})}},mounted:function(){var t=this;this.typeNavOffsetTop=this.$refs.types.offsetTop,this.loadContainer.onLoadMore instanceof Function||(document.onscroll=function(){t.handleScrolling()})}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"m-box m-pos-f m-main m-head-top m-bb1"},[a("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0"},[a("svg",{staticClass:"m-style-svg m-svg-def",on:{click:t.goBack}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-back"}})])]),a("div",{staticClass:"m-box m-aln-center m-justify-center m-flex-grow1 m-flex-base-0 m-head-top-title"},[a("span",[t._v(t._s(t.topic.name||"话题详情"))])]),a("div",{staticClass:"m-box m-aln-center m-justify-end m-flex-grow1 m-flex-base0"},[a("svg",{staticClass:"m-style-svg m-svg-def"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-share"}})])])]),a("main",{staticStyle:{"padding-top":"0.9rem"}},[a("div",{class:t.classNameBuilder("topic")},[a("img",{attrs:{src:"https://images.zhibocloud.cn/question/topics/000/000/000/02.png"}}),a("div",{staticClass:"title"},[a("h3",{staticClass:"topic"},[t._v(t._s(t.topic.name))]),a("span",{staticClass:"label"},[a("span",[t._v(t._s(t.topic.follows_count))]),t._v(" 关注\n          ·\n          "),a("span",[t._v(t._s(t.topic.questions_count))]),t._v(" 问题\n        ")])]),t.topic.has_follow?a("button",{staticClass:"follow active",on:{click:function(e){t.handleUnfollow(t.topic)}}},[a("span",[t._v("✓")]),t._v("已关注\n    ")]):a("button",{staticClass:"follow",on:{click:function(e){t.handleFollow(t.topic)}}},[a("span",[t._v("+")]),t._v("关注\n    ")])]),a("div",{class:t.classNameBuilder("topic-desc")},[t._v("\n    话题简介："+t._s(t.topic.description)+"\n  ")]),a("div",{class:t.classNameBuilder("experts")},[a("span",[t._v(t._s(t.topic.experts_count)+"位相关专家")]),a("div",t._l(t.topic.experts,function(e,n){return a("user-avatar",{key:e.id,class:t.classNameBuilder("experts-user"),style:[{zIndex:t.topic.experts.length-n}],attrs:{size:.5,src:e.avatar,sex:e.sex}})}))]),a("nav",{ref:"types",class:t.classNameBuilder("types")},[a("router-link",{attrs:{to:{path:"/question-topics/"+t.id},replace:"",exact:"","exact-active-class":"active"}},[t._v("热门")]),a("router-link",{attrs:{to:{path:"/question-topics/"+t.id,query:{type:"excellent"}},replace:"",exact:"","exact-active-class":"active"}},[t._v("精选")]),a("router-link",{attrs:{to:{path:"/question-topics/"+t.id,query:{type:"reward"}},replace:"",exact:"","exact-active-class":"active"}},[t._v("悬赏")]),a("router-link",{attrs:{to:{path:"/question-topics/"+t.id,query:{type:"new"}},replace:"",exact:"","exact-active-class":"active"}},[t._v("最新")]),a("router-link",{attrs:{to:{path:"/question-topics/"+t.id,query:{type:"all"}},replace:"",exact:"","exact-active-class":"active"}},[t._v("全部")])],1),a("load-more",{ref:"load",class:[t.classNameBuilder("questions")],attrs:{"on-refresh":t.handleRefresh,"on-load-more":t.handleLoadQuestions,scrolling:t.handleScrolling}},t._l(t.questions,function(t){return a("question-item",{key:t.id,attrs:{question:t}})}))],1)])},d=[],m=a("XyMi");function v(t){a("GrvH")}var f=!1,h=v,p=null,_=null,b=Object(m["a"])(l,u,d,f,h,p,_);e["default"]=b.exports},L3YA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("rzQm"),s=a.n(n),i=a("fKPv"),o=a.n(i),r=(a("EuXz"),a("uNya")),c=a("0zyd");function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return c["a"].get("/questions/".concat(t,"/answers"),{params:{offset:e,limit:a,order_type:"default"},validateStatus:function(t){return 200===t}})}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return c["a"].get("/questions/".concat(t,"/answers"),{params:{offset:e,limit:a,order_type:"time"},validateStatus:function(t){return 200===t}})}function d(t){return c["a"].post("/question-answers/".concat(t,"/likes"),{},{validateStatus:function(t){return 201===t}})}function m(t){return c["a"].delete("/question-answers/".concat(t,"/likes"),{validateStatus:function(t){return 204===t}})}var v=a("BM2P"),f=a("mfU/"),h="module-question-answers-item",p={name:h,props:{answer:{type:Object,required:!0}},components:o()({},f["a"].name,f["a"]),data:function(){return{likeTargetHanding:!1}},computed:{anonymity:function(){var t=this.answer.anonymity;return!!t},user:function(){var t=this.answer.user,e=void 0===t?{}:t;return e}},methods:{classNameBuilder:function(t){return"".concat(h,"-").concat(t)},handleLike:function(){var t=this;d(this.answer.id).then(function(){t.likeTargetHanding=!1,t.answer.liked=!0,t.answer.likes_count+=1}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.likeTargetHanding=!1,t.$Message.error(n)})},handleUnlike:function(){var t=this;m(this.answer.id).then(function(){t.likeTargetHanding=!1,t.answer.liked=!1,t.answer.likes_count-=1}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.likeTargetHanding=!1,t.$Message.error(n)})},handleLikeTarget:function(){this.likeTargetHanding?this.$Message.warning("正在执行，请勿重复点击!"):this.answer.liked?this.handleUnlike():this.handleLike()}},created:function(){}},_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-question-answers-item"},[a("div",{class:t.classNameBuilder("avatar")},[a("module-user-avatar",{attrs:{size:.56,anonymity:t.anonymity,src:t.user.avatar,sex:t.user.sex}})],1),a("div",{class:t.classNameBuilder("main")},[a("h3",{class:t.classNameBuilder("main-header")},[t._v("\n      "+t._s(t.anonymity?"匿名用户":t.user.name)+"\n      "),a("span",[t._v(t._s(t._f("time2tips")(t.answer.created_at)))])]),a("div",{class:t.classNameBuilder("main-body")},[t._v(t._s(t._f("markdownText")(t.answer.body)))]),a("div",{class:t.classNameBuilder("main-button")},[a("button",{on:{click:t.handleLikeTarget}},[a("svg",{class:[t.classNameBuilder("icon"),{active:t.answer.liked}]},[a("use",{attrs:{"xlink:href":"#message-likes"}})]),t._v("\n        "+t._s(t._f("formatNum")(t.answer.likes_count))+"\n      ")]),a("span",[a("svg",{class:t.classNameBuilder("icon")},[a("use",{attrs:{"xlink:href":"#message-comments"}})]),t._v("\n        "+t._s(t._f("formatNum")(t.answer.comments_count))+"\n      ")])])])])},b=[],g=a("XyMi");function w(t){a("Zqie")}var y=!1,q=w,x=null,C=null,k=Object(g["a"])(p,_,b,y,q,x,C),N=k.exports,B="page-question",M={name:B,components:o()({},N.name,N),data:function(){return{question:{},answersTimeOrder:!1,answers:[]}},computed:{logedUser:function(){var t=this.$store.state.CURRENTUSER;return t},editer:function(){return!1},topics:function(){var t=this.question.topics,e=void 0===t?[]:t;return e},htmlBody:function(){var t=this.question.body,e=void 0===t?"":t;return Object(v["render"])(e)},loadContainer:function(){return this.$refs.questionLoadContainer},answerRequestMethod:function(){return this.answersTimeOrder?u:l}},watch:{answersTimeOrder:function(t,e){console.log(t,e),t.path===e.path&&(this.answers=[],this.loadContainer.beforeRefresh())}},methods:{classNameBuilder:function(t){return"".concat(B,"-").concat(t)},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(r["b"])(this.$route.params.id).then(function(a){var n=a.data;t.question=n,e instanceof Function&&e()}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},refreshAnswer:function(){var t=this;this.answerRequestMethod(this.$route.params.id).then(function(e){var a=e.data;t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(a.length<15),t.answers=a}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},handleRefreshAnswers:function(){this.fetch(this.refreshAnswer)},handleTargetAnswersOrder:function(){this.answersTimeOrder=!this.answersTimeOrder},handleWatch:function(){var t=this;Object(r["d"])(this.$route.params.id).then(function(){t.question.watched=!0,t.question.watchers_count+=1}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.$Message.error(n)})},handleUnwatch:function(){var t=this;Object(r["c"])(this.$route.params.id).then(function(){t.question.watched=!1,t.question.watchers_count-=1}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.$Message.error(n)})},handleLoadMoreAnswers:function(){var t=this;this.answers.length&&this.answerRequestMethod(this.$route.params.id,this.answers.length).then(function(e){var a=e.data;t.loadContainer.bottomEnd(a.length<15),t.answers=s()(t.answers).concat(s()(a))}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.bottomEnd(!0),t.$Message.error(n)})}}},$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"m-box m-pos-f m-main m-bb1 m-head-top"},[a("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0"},[a("svg",{staticClass:"m-style-svg m-svg-def",on:{click:t.goBack}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-back"}})])]),t._m(0),a("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0"})]),a("div",{class:t.classNameBuilder("container")},[a("load-more",{ref:"questionLoadContainer",attrs:{"on-refresh":t.handleRefreshAnswers,"on-load-more":t.handleLoadMoreAnswers}},[a("div",{class:t.classNameBuilder("main")},[a("div",{class:t.classNameBuilder("main-topics")},t._l(t.topics,function(e){return a("router-link",{key:e.id,staticClass:"label",attrs:{to:"/question-topics/"+e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),a("h3",{class:t.classNameBuilder("main-title")},[t._v(t._s(t.question.subject))]),a("div",{class:["markdown-body",t.classNameBuilder("main-body")],domProps:{innerHTML:t._s(t.htmlBody)}}),a("div",{class:t.classNameBuilder("main-watch")},[a("div",{class:t.classNameBuilder("main-watch-count")},[a("span",{staticClass:"follow-count"},[t._v(t._s(t.question.watchers_count)+" 关注")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.question.amount,expression:"question.amount"}]},[a("span",[t._v("·")]),a("span",{staticClass:"shang"},[a("span",[t._v("赏")]),t._v("\n                "+t._s(t.question.amount)+"\n              ")])])]),t.question.watched?a("button",{class:[t.classNameBuilder("main-watch-follow"),"active"],on:{click:t.handleUnwatch}},[a("span",[t._v("✓")]),t._v("已关注\n          ")]):a("button",{class:t.classNameBuilder("main-watch-follow"),on:{click:t.handleWatch}},[a("span",[t._v("+")]),t._v("关注\n          ")])]),a("div",{class:t.classNameBuilder("main-button")},[a("div",{staticClass:"button"},[a("svg",{class:t.classNameBuilder("main-button-icon")},[a("use",{attrs:{"xlink:href":"#base-reward"}})]),t._v("\n            "+t._s(t.question.amount?"已":"未")+"设置悬赏\n          ")]),a("span"),a("div",{staticClass:"button"},[a("svg",{class:t.classNameBuilder("main-button-icon")},[a("use",{attrs:{"xlink:href":"#base-edit"}})]),t._v("\n            添加回答\n          ")])])]),a("div",{class:t.classNameBuilder("answers-tool")},[a("div",[t._v(t._s(t.question.answers_count)+"个回答")]),a("button",{on:{click:t.handleTargetAnswersOrder}},[t._v("\n          "+t._s(t.answersTimeOrder?"时间排序":"默认排序")+"\n          "),a("svg",{staticClass:"icon"},[a("use",{attrs:{"xlink:href":"#base-filter-list"}})])])]),t._l(t.answers,function(t){return a("module-question-answers-item",{key:t.id,attrs:{answer:t}})})],2)],1),a("div",{class:t.classNameBuilder("tabbar")},[a("a",{class:t.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:t.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#message-comments"}})]),t._v("\n      评论\n    ")]),a("a",{class:t.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:t.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#base-share"}})]),t._v("\n      分享\n    ")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.editer,expression:"editer"}],class:t.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:t.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#edit"}})]),t._v("\n      编辑\n    ")]),a("a",{class:t.classNameBuilder("tabbar-item"),attrs:{href:"#"}},[a("svg",{class:t.classNameBuilder("tabbar-icon")},[a("use",{attrs:{"xlink:href":"#base-more"}})]),t._v("\n      更多\n    ")])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-box m-aln-center m-flex-grow1 m-flex-base0 m-justify-center m-head-top-title"},[a("span",[t._v("问题详情")])])}];function O(t){a("kkCm")}var j=!1,R=O,S=null,T=null,z=Object(g["a"])(M,$,E,j,R,S,T);e["default"]=z.exports},M93i:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("rzQm"),s=a.n(n),i=a("BrJ6"),o="module-questions-topics",r={name:o,components:{},data:function(){return{topics:[]}},computed:{type:function(){var t=this.$route.query.type,e=void 0===t?"hot":t;return e},loadContainer:function(){return this.$refs.LoadQuestionTopicsContainer},user:function(){var t=this.$store.state.CURRENTUSER;return t}},watch:{type:function(){this.topics=[],this.loadContainer.beforeRefresh()}},methods:{handleRefresh:function(){"follow"!==this.type?this.handleRefreshByAll():this.handleRefreshByFollow()},handleRefreshByAll:function(){var t=this,e=0,a=15;Object(i["a"])(e,a).then(function(e){var n=e.data;t.topics=n,t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(n.length<a)}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.$Message.error(n),t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(!0)})},handleRefreshByFollow:function(){var t=this,e=0,a=15;Object(i["c"])(e,a).then(function(e){var n=e.data;t.topics=n,t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(n.length<a)}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.$Message.error(n),t.loadContainer.topEnd(!1),t.loadContainer.bottomEnd(!0)})},handleLoadMore:function(){"follow"!==this.type?this.handleLoadMoreByAll():this.handleLoadMoreByFollow()},handleLoadMoreByAll:function(){var t=this,e=this.topics.length,a=15;Object(i["a"])(e,a).then(function(e){var n=e.data;t.topics=s()(t.topics).concat(s()(n)),t.loadContainer.bottomEnd(n.length<a)}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},handleLoadMoreByFollow:function(){var t=this,e=this.topisc[this.topics.length].id,a=15;Object(i["c"])(e,a).then(function(e){var n=e.data;t.topics=s()(t.topics).concat(s()(n)),t.loadContainer.bottomEnd(n.length<a)}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadContainer.bottomEnd(!0),t.$Message.error(n)})},handleFollow:function(t){var e=this;Object(i["b"])(t.id).then(function(){t.has_follow=!0,e.follows_count+=1}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.$Message.error(n)})},handleUnfollow:function(t){var e=this;Object(i["f"])(t.id).then(function(){if(t.has_follow=!1,t.follows_count-=1,"follow"===e.type){var a=[];e.topics.forEach(function(e){e.id!==t.id&&a.push(e)}),e.topics=a}}).catch(function(t){var a=t.response;a=void 0===a?{}:a;var n=a.data;e.$Message.error(n)})}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-questions-topics"},[a("nav",{staticClass:"module-questions-topics-nav"},[a("router-link",{attrs:{to:"/question/topics",replace:"",exact:"","exact-active-class":"active"}},[t._v("全部话题")]),a("router-link",{attrs:{to:{path:"/question/topics",query:{type:"follow"}},replace:"",exact:"","exact-active-class":"active"}},[t._v("我关注的")])],1),a("load-more",{ref:"LoadQuestionTopicsContainer",attrs:{"on-refresh":t.handleRefresh,"on-load-more":t.handleLoadMore}},t._l(t.topics,function(e){return a("div",{key:e.id,staticClass:"module-questions-topics-item"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.avatar,expression:"topic.avatar"}],attrs:{tag:"img",src:e.avatar,to:"/question-topics/"+e.id}}),a("router-link",{staticClass:"title",attrs:{tag:"a",to:"/question-topics/"+e.id}},[a("span",{staticClass:"topic"},[t._v(t._s(e.name))]),a("span",{staticClass:"label"},[a("span",[t._v(t._s(e.follows_count))]),t._v(" 关注\n          ·\n          "),a("span",[t._v(t._s(e.questions_count))]),t._v(" 问题\n        ")])]),e.has_follow||"follow"===t.type?a("button",{staticClass:"follow active",on:{click:function(a){t.handleUnfollow(e)}}},[a("span",[t._v("✓")]),t._v("已关注")]):a("button",{staticClass:"follow",on:{click:function(a){t.handleFollow(e)}}},[a("span",[t._v("+")]),t._v("关注")])],1)}))],1)},l=[],u=a("XyMi");function d(t){a("fqve")}var m=!1,v=d,f=null,h=null,p=Object(u["a"])(r,c,l,m,v,f,h);e["default"]=p.exports},OwrH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=a("rzQm"),i=a.n(s),o=a("fKPv"),r=a.n(o),c=(a("EuXz"),a("uNya")),l=a("AoKB"),u=a.n(l),d=a("860e"),m={name:"icon-loading"},v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",t._b({attrs:{fill:"#59b6d7",width:"120",height:"30",viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"}},"svg",t.$props,!1),[a("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[a("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),a("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),a("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[a("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),a("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),a("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[a("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),a("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])},f=[],h=a("XyMi"),p=!1,_=null,b=null,g=null,w=Object(h["a"])(m,v,f,p,_,b,g),y=w.exports,q={name:"module-questions",components:(n={},r()(n,d["a"].name,d["a"]),r()(n,y.name,y),n),data:function(){return{questions:[],loading:!1,loadmore:!1}},computed:{type:function(){var t=this.$route.query.type,e=void 0===t?"hot":t;return e}},methods:{navRouterLinkBuilder:function(t){return{path:"/question",query:{type:t}}},fetchQuestions:function(){var t=this;this.loading=!0,this.questions=[],Object(c["a"])(this.type).then(function(e){var a=e.data;t.questions=a,t.loading=!1}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loading=!1,t.$Message.error(u()(n,"加载失败，请刷新重试！"))})},fetchQuestionsMore:function(){var t=this;this.loadmore=!0,Object(c["a"])(this.type,this.questions.length+1).then(function(e){var a=e.data;t.loadmore=!1,a.length?t.questions=i()(t.questions).concat(i()(a)):t.$Message.error("没有更多数据了")}).catch(function(e){var a=e.response;a=void 0===a?{}:a;var n=a.data;t.loadmore=!1,t.$Message.error(u()(n,"加载失败，请刷新重试！"))})},classNamebuilder:function(t){return"module-questions-".concat(t)}},watch:{$route:function(t,e){t.path===e.path&&t.query.type!==e.query.type&&this.fetchQuestions()}},mounted:function(){this.fetchQuestions()}},x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-questions"},[a("nav",{staticClass:"module-questions-nav"},[a("router-link",{attrs:{to:"/question",replace:"",exact:"","exact-active-class":"active"}},[t._v("热门")]),a("router-link",{attrs:{to:t.navRouterLinkBuilder("excellent"),replace:"",exact:"","exact-active-class":"active"}},[t._v("精选")]),a("router-link",{attrs:{to:t.navRouterLinkBuilder("reward"),replace:"",exact:"","exact-active-class":"active"}},[t._v("悬赏")]),a("router-link",{attrs:{to:t.navRouterLinkBuilder("new"),replace:"",exact:"","exact-active-class":"active"}},[t._v("最新")]),a("router-link",{attrs:{to:t.navRouterLinkBuilder("all"),replace:"",exact:"","exact-active-class":"active"}},[t._v("全部")])],1),a("main",{staticClass:"module-questions-main"},[t.loading?a("div",{class:t.classNamebuilder("main-loading")},[a("icon-loading",{class:t.classNamebuilder("main-loading_icon")})],1):t._e(),t._l(t.questions,function(t){return a("module-question-list-item",{key:t.id,attrs:{question:t}})}),t.questions.length&&!t.loadmore?a("div",{class:t.classNamebuilder("main-loadmore")},[a("button",{class:t.classNamebuilder("main-loadmore_button"),on:{click:t.fetchQuestionsMore}},[t._v("\n        加载更多\n      ")])]):t.loadmore?a("div",{class:[t.classNamebuilder("main-loadmore")]},[a("button",{class:[t.classNamebuilder("main-loadmore_button"),"active"]},[a("icon-loading",{class:t.classNamebuilder("main-loading_icon")})],1)]):t._e()],2)])},C=[];function k(t){a("pBmB")}var N=!1,B=k,M=null,$=null,E=Object(h["a"])(q,x,C,N,B,M,$);e["default"]=E.exports},"QlY/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("fKPv"),s=a.n(n),i=(a("EuXz"),{name:"module-question-app-bar",computed:{routePath:function(){var t=this.$route.path;return t},questionRouteClassName:function(){return["module-question-app-bar_tab-item",{active:this.hasQuestionRouteActive}]},topicsRouteClassName:function(){return["module-question-app-bar_tab-item",{active:this.hasTopicRouteActive}]},hasQuestionRouteActive:function(){return"/question"===this.routePath},hasTopicRouteActive:function(){return"/question/topics"===this.routePath}}}),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"module-question-app-bar"},[a("div",{staticClass:"module-question-app-bar_buttom"}),a("div",{staticClass:"module-question-app-bar_tab"},[a("router-link",{class:t.questionRouteClassName,attrs:{replace:!0,exact:!0,to:"/question"}},[t._v("\n      问答\n    ")]),a("router-link",{class:t.topicsRouteClassName,attrs:{replace:!0,exact:!0,to:"/question/topics"}},[t._v("\n      话题\n    ")])],1),a("div",{staticClass:"module-question-app-bar_buttom module-question-app-bar_buttom-right"},[a("router-link",{attrs:{to:"/question/search"}},[a("svg",{staticClass:"module-question-app-bar_buttom-icon"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#base-search"}})])])],1)])},r=[],c=a("XyMi");function l(t){a("AMFi")}var u=!1,d=l,m=null,v=null,f=Object(c["a"])(i,o,r,u,d,m,v),h=f.exports,p={name:"page-questions",components:s()({},h.name,h)},_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-question"},[a("module-question-app-bar"),a("router-view"),a("foot-guide")],1)},b=[];function g(t){a("jXQu")}var w=!1,y=g,q=null,x=null,C=Object(c["a"])(p,_,b,w,y,q,x);e["default"]=C.exports},Zqie:function(t,e){},cVJz:function(t,e){},fqve:function(t,e){},hHZG:function(t,e){},jXQu:function(t,e){},kkCm:function(t,e){},"mfU/":function(t,e,a){"use strict";var n=a("fKPv"),s=a.n(n),i=(a("EuXz"),a("rzQm")),o=a.n(i),r={name:"module-avatar",props:{classes:{type:[Array,String]},size:{type:[String,Number],default:.4},sizeUnit:{type:String,default:"rem"}},methods:{classNameBuilder:function(t){return"module-avatar-".concat(t)},handleClick:function(t){this.$emit("click",t)}},computed:{rootClassName:function(){var t=this.classes||[];return("string"===typeof t||t instanceof String)&&(t=[t]),["module-avatar"].concat(o()(t))},rootStyles:function(){var t=this.size;return("number"===typeof t||t instanceof Number)&&(t+=this.sizeUnit),{width:t,height:t}}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._b({class:t.rootClassName,style:t.rootStyles,on:{click:t.handleClick}},"div",t.$props,!1),[t._t("default")],2)},l=[],u=a("XyMi");function d(t){a("cVJz")}var m=!1,v=d,f=null,h=null,p=Object(u["a"])(r,c,l,m,v,f,h),_=p.exports,b={name:"module-user-avatar",props:{src:String,sex:{type:Number,default:0},anonymity:{type:Boolean,default:!1},classes:{type:[Array,String]},size:{type:[String,Number],default:.4},sizeUnit:{type:String,default:"rem"}},components:s()({},_.name,_),computed:{defaultAvatar:function(){switch(this.sex){case 1:return"#avatar-man";case 2:return"#avatar-woman";case 0:default:return"#avatar-secret"}}},methods:{handleClick:function(t){this.$emit("click",t)}}},g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("module-avatar",t._b({nativeOn:{click:function(e){t.handleClick(e)}}},"module-avatar",t.$props,!1),[t.anonymity?[t._v("匿")]:t.src?a("img",{attrs:{src:t.src}}):a("svg",{staticClass:"avatar_icon",attrs:{width:"100%",height:"100%"}},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":t.defaultAvatar}})])],2)},w=[],y=!1,q=null,x=null,C=null,k=Object(u["a"])(b,g,w,y,q,x,C);e["a"]=k.exports},pBmB:function(t,e){},uNya:function(t,e,a){"use strict";e["a"]=i,e["b"]=o,e["d"]=r,e["c"]=c;var n=a("0zyd");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].get("/questions",{params:t,validateStatus:function(t){return 200===t}})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return s({type:t,limit:a,offset:e})}function o(t){return n["a"].get("/questions/".concat(t),{validateStatus:function(t){return 200===t}})}function r(t){return n["a"].put("/user/question-watches/".concat(t),{},{validateStatus:function(t){return 204===t}})}function c(t){return n["a"].delete("/user/question-watches/".concat(t),{validateStatus:function(t){return 204===t}})}}});
//# sourceMappingURL=question.js.map