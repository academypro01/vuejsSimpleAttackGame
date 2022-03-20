(function(){"use strict";var t={3239:function(t,e,n){var a=n(9242),r=n(3396);const s={class:"container"},o=(0,r._)("h1",{class:"text-center"},"Human vs Monster",-1),l=(0,r._)("hr",null,null,-1),i={class:"d-flex justify-content-center mt-4"};function m(t,e,n,m,u,h){const c=(0,r.up)("progress-component"),d=(0,r.up)("information-component");return(0,r.wg)(),(0,r.iD)("div",s,[o,(0,r.Wm)(c,{humanHelth:u.humanHelth,monsterHelth:u.monsterHelth},null,8,["humanHelth","monsterHelth"]),l,(0,r.wy)((0,r._)("div",null,[(0,r._)("div",i,[(0,r._)("button",{class:"btn btn-danger btn-block mx-3",onClick:e[0]||(e[0]=(...t)=>h.resetGame&&h.resetGame(...t))},"Reset Game"),(0,r._)("button",{class:"btn btn-dark btn-block",onClick:e[1]||(e[1]=(...t)=>h.attack&&h.attack(...t))},"Attack"),u.humanHelth<=50?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn btn-warning mx-3",onClick:e[2]||(e[2]=(...t)=>h.humanHelp&&h.humanHelp(...t))},"Help")):(0,r.kq)("",!0)]),(0,r.Wm)(d,{damageData:u.damageData},null,8,["damageData"])],512),[[a.F8,u.flag]]),(0,r.wy)((0,r._)("div",null,[(0,r._)("button",{class:"btn btn-success btn-lg btn-block form-control",onClick:e[3]||(e[3]=(...t)=>h.playGame&&h.playGame(...t))},"Play the Game")],512),[[a.F8,!u.flag]])])}var u=n(7139);const h={class:"container"},c={class:"row"},d={class:"d-flex justify-content-center align-items-center"},f={class:"border flex-fill p-4 my-2"},g=(0,r._)("h5",{class:"text-center text-secondary"},"Human Helth",-1),p={class:"progress"},b={class:"border flex-fill p-4 my-2"},v=(0,r._)("h5",{class:"text-center text-secondary"},"Monster Helth",-1),H={class:"progress"};function D(t,e,n,a,s,o){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",c,[(0,r._)("div",d,[(0,r._)("div",f,[g,(0,r._)("div",p,[(0,r._)("div",{class:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:(0,u.j5)({width:n.humanHelth+"%"}),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},(0,u.zw)(n.humanHelth)+"%",5)])]),(0,r._)("div",b,[v,(0,r._)("div",H,[(0,r._)("div",{class:"progress-bar progress-bar-striped bg-danger",role:"progressbar",style:(0,u.j5)({width:n.monsterHelth+"%"}),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},(0,u.zw)(n.monsterHelth)+"%",5)])])])])])}var y={name:"ProgressComponent",props:["humanHelth","monsterHelth"]},w=n(89);const _=(0,w.Z)(y,[["render",D]]);var k=_;const x={class:"container"},j=(0,r._)("hr",null,null,-1),O=(0,r._)("h3",null,"Damage Table:",-1);function C(t,e,n,a,s,o){return(0,r.wg)(),(0,r.iD)("div",x,[j,O,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.damageData,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t,style:(0,u.j5)({color:t[1]})},(0,u.zw)(t[0]),5)))),128))])])}var G={name:"InformationComponent",props:["damageData"]};const M=(0,w.Z)(G,[["render",C]]);var P=M,N={name:"App",data(){return{humanHelth:100,monsterHelth:100,humanDamage:0,monsterDamage:0,damageData:[],flag:!1}},components:{ProgressComponent:k,InformationComponent:P},methods:{randomNumber(){return Math.floor(10*Math.random())+1},attack(){this.humanDamage=this.randomNumber(),this.monsterDamage=this.randomNumber(),this.humanHelth-=this.humanDamage,this.monsterHelth-=this.monsterDamage,this.addDamageData(),(this.humanHelth<=0||this.monsterHelth<=0)&&(this.humanHelth>=0?(alert("Human win"),this.resetGame()):(alert("Monster Win"),this.resetGame()))},resetGame(){this.humanHelth=100,this.monsterHelth=100,this.humanDamage=0,this.monsterDamage=0,this.damageData=[],this.flag=!1},humanHelp(){let t=this.randomNumber();this.humanHelth+=t},addDamageData(){let t="Human Damage: "+this.humanDamage,e="Monster Damage: "+this.monsterDamage;this.damageData.push([t,"green"]),this.damageData.push([e,"red"])},playGame(){this.flag=!0}}};const Z=(0,w.Z)(N,[["render",m]]);var z=Z,F=n(936);const T=(0,a.ri)(z);T.use(F.ZP),T.mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,s){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],s=t[u][2];for(var l=!0,i=0;i<a.length;i++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(l=!1,s<o&&(o=s));if(l){t.splice(u--,1);var m=r();void 0!==m&&(e=m)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,s,o=a[0],l=a[1],i=a[2],m=0;if(o.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var u=i(n)}for(e&&e(a);m<o.length;m++)s=o[m],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkmyproject"]=self["webpackChunkmyproject"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3239)}));a=n.O(a)})();
//# sourceMappingURL=app.30fc4e48.js.map