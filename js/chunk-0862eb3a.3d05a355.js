(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0862eb3a"],{"01df":function(t,e,i){"use strict";var s=i("4c3d"),n=i.n(s);n.a},"115b":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app-loop-text"}},[i("div",{ref:"text",staticClass:"text"},[t._v(t._s(t.text))]),i("div",{ref:"clone",staticClass:"clone"},[t._v(t._s(t.text))])])},n=[],a={props:["text"],data:function(){return{intervalID:0}},created(){this.animate=this._animate.bind(this)},mounted(){this.$nextTick().then(()=>{this.boxWidth=this.$el.clientWidth,this.textWidth=this.$refs.text.clientWidth,this.boxWidth<this.textWidth&&(this.animate(),this.intervalID=setInterval(this.animate,12e3))})},watch:{text(){this.$nextTick().then(()=>{this.boxWidth=this.$el.clientWidth,this.textWidth=this.$refs.text.clientWidth,clearInterval(this.intervalID),this.boxWidth<this.textWidth&&(this.animate(),this.intervalID=setInterval(this.animate,12e3))})}},methods:{_animate(){this.$refs.text.classList.remove("loop"),this.$refs.clone.classList.remove("loop"),this.$refs.text.style.transform="translateX(0px)",this.$refs.clone.style.transform=`translateX(${this.textWidth}px)`,document.body.offsetWidth,this.$refs.text.classList.add("loop"),this.$refs.clone.classList.add("loop"),this.$refs.text.style.transform=`translateX(${-this.textWidth}px)`,this.$refs.clone.style.transform="translateX(0px)"}}},r=a,o=(i("1edd"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"7033acc7",null);e["a"]=c.exports},1316:function(t,e,i){"use strict";var s=i("c8e7"),n=i.n(s);n.a},1863:function(t,e,i){"use strict";var s=i("906b"),n=i.n(s);n.a},"1edd":function(t,e,i){"use strict";var s=i("7942"),n=i.n(s);n.a},"4c3d":function(t,e,i){},7223:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-back-button",on:{tap:t.back,click:t.back}},[i("app-icon",{attrs:{icon:"go-back"}})],1)},n=[],a={data(){return{lastClick:0}},methods:{back(t){if(Date.now()-this.lastClick<100)return void console.log("duplicate click");this.lastClick=Date.now();const e=this.$store.getters["routeHistory/lastRoute"];e?this.$router.push({name:e,params:{back:!0}}):this.$router.push({name:"discover",params:{back:!0}})}}},r=a,o=(i("1316"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"6986574d",null);e["a"]=c.exports},7942:function(t,e,i){},"8bb5":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app-like-icon"},on:{click:t.click}},[i("transition",{attrs:{name:"like",mode:"out-in"}},[i("app-icon",{key:t.iconName,class:{liked:t.isLiked},attrs:{icon:t.iconName}})],1)],1)},n=[],a=i("d1c7"),r={computed:{login(){return this.$store.state.auth.login},playID(){return this.$store.getters["currentSong"].id},likelist(){return this.$store.state.likelist},isLiked(){return this.likelist.includes(this.playID)},iconName(){return this.isLiked?"like-fill":"like"}},methods:{click(t){this.login?Object(a["a"])("/like",{id:this.playID,like:!this.isLiked}).then(t=>{console.log(t),200===t.code&&this.$store.dispatch("updateLikelist")}):window.confirm("该功能需要登录，是否前往登录？")&&this.$router.push({name:"login",params:{dock:!0}})}}},o=r,c=(i("01df"),i("2877")),l=Object(c["a"])(o,s,n,!1,null,"33665981",null);e["a"]=l.exports},"906b":function(t,e,i){},"90ee":function(t,e,i){"use strict";var s=i("ce92"),n=i.n(s);n.a},"936e":function(t,e,i){},"987d":function(t,e,i){t.exports=i.p+"img/default-pic.5cfc656e.jpg"},b0b8:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"play-progress-bar"}},[i("div",{staticClass:"time"},[t._v(" "+t._s(t.playTime)+" ")]),i("div",{ref:"container",staticClass:"container",on:{pointerdown:t.pointerDown,pointermove:t.pointerMove,pointerup:t.pointerUp}},[i("div",{staticClass:"groove"},[i("div",{ref:"played",staticClass:"played-section"}),i("div",{ref:"pointer",class:["pointer",{"pointer-down":t.isPointerDown},{waiting:t.waiting}]})])]),i("div",{staticClass:"time"},[t._v(" "+t._s(t.playDuration)+" ")])])},n=[],a=i("2f62");const{mapState:r,mapMutations:o}=Object(a["a"])("playStatus");var c={data:function(){return{isPointerDown:!1}},computed:{...r(["currentTime","duration","waiting"]),playTime:function(){return this.formatTime(this.currentTime)},playDuration:function(){return this.formatTime(this.duration)}},mounted(){this.$nextTick().then(()=>{this.rect=this.$refs.container.getBoundingClientRect()})},watch:{currentTime(t){if(this.isPointerDown)return;const e=Math.max(t/this.duration,0);e<.01&&(this.$refs.pointer.style.transition="none"),this.$refs.pointer.style.transform=`translateX(calc(${e} * (70vw - 0.5rem))`,this.$refs.played.style.width=100*e+"%"}},methods:{...o(["seek"]),formatTime(t){if(isNaN(t))return"-- : --";const e=Math.floor(t),i=e%60,s=(e-i)/60,n=i<10?"0"+i:i,a=s<10?"0"+s:s;return a+":"+n},pointerDown(t){this.isPointerDown=!0,this.rect=this.$refs.container.getBoundingClientRect(),this.width=this.rect.right-this.rect.left;const e=t.clientX-this.rect.left;this.$refs.pointer.style.transform=`translateX(${e}px`,this.$refs.played.style.width=e/this.width*100+"%",t.target.setPointerCapture(t.pointerId)},pointerMove(t){if(this.isPointerDown){let e;e=t.clientX-this.rect.left>this.width?this.width:t.clientX-this.rect.left<0?0:t.clientX-this.rect.left,this.$refs.pointer.style.transform=`translateX(${e}px`,this.$refs.played.style.width=e/this.width*100+"%"}},pointerUp(t){this.isPointerDown=!1,this.$refs.pointer.classList.add("smooth-move");const e=(t.clientX-this.rect.left)/(this.rect.right-this.rect.left);this.seek(this.duration*e)}}},l=c,h=(i("cec3"),i("2877")),d=Object(h["a"])(l,s,n,!1,null,"12d41a0a",null);e["a"]=d.exports},b3ad:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"play"},on:{scroll:t.onScroll}},[i("img",{staticClass:"background fade-in",attrs:{alt:"背景图片",src:t.picUrl}}),i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[i("app-back-button"),i("span",{staticClass:"title"},[t._v("私人FM")])],1),i("img",{staticClass:"cover fade-in",attrs:{alt:"封面图片",src:t.picUrl}}),i("app-loop-text",{staticClass:"song-name",attrs:{text:t.currentSong.name}}),i("div",{staticClass:"song-artist"},[t._v(t._s(t.currentSong.artist))]),i("play-progress-bar"),i("radio-controls")],1)])},n=[],a=(i("5319"),i("7223")),r=i("115b"),o=i("b0b8"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"play-controls"}},[i("app-icon",{staticClass:"dislike",attrs:{icon:"like-slash"},nativeOn:{click:function(e){return t.dislike(e)}}}),i("app-like-icon",{staticClass:"like"}),i("div",{staticClass:"play",on:{click:t.playOrPause}},[i("app-icon",{attrs:{icon:t.playing?"pause":"play"}})],1),i("app-icon",{staticClass:"next",attrs:{icon:"next-song"},nativeOn:{click:function(e){return t.nextSong(e)}}}),i("app-icon",{staticClass:"comment",attrs:{icon:"comment"}})],1)},l=[],h=i("2f62"),d=i("d1c7"),p=i("8bb5"),u={computed:{...Object(h["f"])("playStatus",["playing"]),playID(){return this.$store.getters["currentSong"].id}},components:{AppLikeIcon:p["a"]},methods:{...Object(h["e"])("radioPlay",["nextSong"]),...Object(h["c"])("playStatus",["playOrPause"]),dislike(){Object(d["a"])("/fm_trash",{id:this.playID}).then(t=>{200===t.code&&this.nextSong()})}}},f=u,m=(i("1863"),i("2877")),v=Object(m["a"])(f,c,l,!1,null,"47926812",null),b=v.exports,k={components:{AppBackButton:a["a"],AppLoopText:r["a"],PlayProgressBar:o["a"],RadioControls:b},computed:{...Object(h["f"])("playStatus",["playing"]),...Object(h["d"])("radioPlay",["currentSong"]),...Object(h["f"])("radioPlay",["radioIndex","radioList"]),picUrl(){return this.currentSong.cover?this.currentSong.cover:i("987d")}},watch:{radioIndex(t){t>0&&this.radioList.length-t===1&&this.updateList()}},created(){console.log(this.$store),this.updateList(),console.log(this.$store)},methods:{...Object(h["e"])(["clear"]),...Object(h["e"])("radioPlay",["radioListUpdate"]),updateList(){Object(d["a"])("/personal_fm").then(t=>{console.log(t);const e=t.data.map(t=>{const e=t.artists.map(t=>t.name).join("/");return{id:t.id,name:t.name,artist:e,album:t.album.name,cover:t.album.picUrl.replace("http:","https:")}});this.radioListUpdate(e)})},onScroll(t){return t.preventDefault(),!1}}},x=k,g=(i("90ee"),Object(m["a"])(x,s,n,!1,null,"43970ac7",null));e["default"]=g.exports},c8e7:function(t,e,i){},ce92:function(t,e,i){},cec3:function(t,e,i){"use strict";var s=i("936e"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-0862eb3a.3d05a355.js.map