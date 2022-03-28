(function(){"use strict";var i={323:function(i,e,t){var r=t(9242),n=t(3396);const o=(0,n._)("header",null,[(0,n._)("h1",null,"Sexy Crafted Beers")],-1),l={id:"container"},a={class:"inputs"},u=(0,n._)("label",{for:"name"}," Filter in names ",-1),s={class:"inputs"},d=(0,n._)("label",{for:"food"}," Filter in food pairing ",-1),c={class:"inputs"},p=(0,n._)("label",{for:"description"}," Filter in desription ",-1),f={id:"container"};function g(i,e,t,g,v,y){const m=(0,n.up)("OneBeer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("div",null,[(0,n._)("div",l,[(0,n._)("div",a,[u,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>v.nameFilter=i),id:"name"},null,512),[[r.nr,v.nameFilter]])]),(0,n._)("div",s,[d,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>v.foodPairingFilter=i),id:"food"},null,512),[[r.nr,v.foodPairingFilter]])]),(0,n._)("div",c,[p,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>v.descriptionFilter=i),id:"description"},null,512),[[r.nr,v.descriptionFilter]])])])]),(0,n._)("div",null,[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.filterByInput,(i=>((0,n.wg)(),(0,n.j4)(m,{key:i.id,id:i.id,name:i.name,"image-url":i.image_url,description:i.description,tagline:i.tagline,"food-pairing":i.food_pairing},null,8,["id","name","image-url","description","tagline","food-pairing"])))),128))])])],64)}var v=t(7139);const y={class:"card"},m={class:"text-center"},b=["src"],h={key:0},w={key:0};function _(i,e,t,r,o,l){return(0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("h3",null,(0,v.zw)(t.name),1),(0,n._)("h4",null,'"'+(0,v.zw)(t.tagline)+'"',1),(0,n._)("div",m,[(0,n._)("div",null,[(0,n._)("img",{src:t.imageUrl},null,8,b)]),(0,n._)("div",null,[(0,n._)("button",{onClick:e[0]||(e[0]=(...i)=>l.toggleVisibility&&l.toggleVisibility(...i))},(0,v.zw)(o.visibility?"Hide":"Show")+" food pairing",1),o.visibility?((0,n.wg)(),(0,n.iD)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.foodPairing,((i,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n._)("p",null,(0,v.zw)(i),1)])))),128))])):(0,n.kq)("",!0)]),(0,n._)("button",{onClick:e[1]||(e[1]=(...i)=>l.toggleVisibility&&l.toggleVisibility(...i))},(0,v.zw)(o.visibility?"Show":"Hide")+" description",1),o.visibility?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",w,(0,v.zw)(t.description),1))])])}var F={props:{id:{type:Number,required:!0},name:{type:String,required:!0},imageUrl:{type:String,required:!0},tagline:{type:String,required:!0},description:{type:String,required:!0},foodPairing:{type:Array,required:!0}},data(){return{visibility:!0}},methods:{toggleVisibility(){this.visibility=!this.visibility}}},P=t(89);const k=(0,P.Z)(F,[["render",_]]);var O=k,B=t(6265),C=t.n(B),D={name:"App",components:{OneBeer:O},data(){return{beerFilter:"",nameFilter:"",descriptionFilter:"",foodPairingFilter:"",beers:[]}},mounted(){C().get("https://api.punkapi.com/v2/beers").then((i=>{this.beers=i.data.sort(((i,e)=>i.name>e.name))}))},watch:{nameFilter(i){}},computed:{filterByInput(){return this.filterProductsByFoodPairing(this.filterProductsByDescription(this.filterProductsByName(this.beers)))}},methods:{filterProductsByName(i){return i.filter((i=>i.name.toLowerCase().includes(this.nameFilter.toLowerCase())))},filterProductsByDescription(i){return i.filter((i=>i.description.toLowerCase().includes(this.descriptionFilter.toLowerCase())))},filterProductsByFoodPairing(i){return i.filter((i=>0!==i.food_pairing.filter((i=>i.toLowerCase().includes(this.foodPairingFilter.toLowerCase()))).length))}}};const q=(0,P.Z)(D,[["render",g]]);var V=q;(0,r.ri)(V).mount("#app")}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return i[r](o,o.exports,t),o.exports}t.m=i,function(){var i=[];t.O=function(e,r,n,o){if(!r){var l=1/0;for(d=0;d<i.length;d++){r=i[d][0],n=i[d][1],o=i[d][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||l>=o)&&Object.keys(t.O).every((function(i){return t.O[i](r[u])}))?r.splice(u--,1):(a=!1,o<l&&(l=o));if(a){i.splice(d--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var d=i.length;d>0&&i[d-1][2]>o;d--)i[d]=i[d-1];i[d]=[r,n,o]}}(),function(){t.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return t.d(e,{a:e}),e}}(),function(){t.d=function(i,e){for(var r in e)t.o(e,r)&&!t.o(i,r)&&Object.defineProperty(i,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)}}(),function(){var i={143:0};t.O.j=function(e){return 0===i[e]};var e=function(e,r){var n,o,l=r[0],a=r[1],u=r[2],s=0;if(l.some((function(e){return 0!==i[e]}))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(u)var d=u(t)}for(e&&e(r);s<l.length;s++)o=l[s],t.o(i,o)&&i[o]&&i[o][0](),i[o]=0;return t.O(d)},r=self["webpackChunkbeer_app"]=self["webpackChunkbeer_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(323)}));r=t.O(r)})();
//# sourceMappingURL=app.65cdab75.js.map