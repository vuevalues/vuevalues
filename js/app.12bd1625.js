(function(e){function t(t){for(var r,s,i=t[0],a=t[1],u=t[2],b=0,f=[];b<i.length;b++)s=i[b],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuevalues/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b0c0"),n("a4d3"),n("e01a"),n("d3b7"),n("ddb0"),{key:0}),o={class:"center"},s={style:{"text-align":"center"}},i={style:{"margin-right":"8px"}},a=Object(r["f"])("div",{class:"line"},null,-1),u={key:0},l=Object(r["e"])(" No source found. Append the URL with ?id=(github gist ID) to load a test. "),b=Object(r["f"])("a",{href:"https://humanoidsandvichdispenser.github.io/vuevalues/?id=54094bd6b5432660dabd06bb5549c31f",class:"mute"},"Click here",-1),f=Object(r["e"])(" to view a sample test. "),d=Object(r["f"])("br",null,null,-1),g={key:1},j={key:2},O=Object(r["f"])("div",{class:"header center"},"Results",-1),h=Object(r["f"])("div",{class:"line"},null,-1);function p(e,t,n,p,v,m){var y=this,x=Object(r["i"])("Question"),S=Object(r["i"])("Responses"),P=Object(r["i"])("Progress");return Object(r["g"])(),Object(r["c"])("div",null,["home"==v.currentPage?(Object(r["g"])(),Object(r["c"])("div",c,[Object(r["f"])("h1",o,Object(r["j"])(v.info.name),1),Object(r["f"])("div",s,[Object(r["f"])("span",i,Object(r["j"])(v.info.author),1),Object(r["f"])("a",{href:"https://gist.githubusercontent.com/"+v.infoSource,class:"mute"},"view source",8,["href"])]),a,Object(r["f"])("div",null,Object(r["j"])(v.info.description),1),void 0==v.info.name?(Object(r["g"])(),Object(r["c"])("div",u,[l,b,f])):Object(r["d"])("",!0),void 0!=v.info.name?(Object(r["g"])(),Object(r["c"])("div",{key:1,class:"btn accent",onClick:t[1]||(t[1]=function(e){y.reset(),v.currentPage="answer"})},"Start Test")):Object(r["d"])("",!0),d])):Object(r["d"])("",!0),"answer"==v.currentPage?(Object(r["g"])(),Object(r["c"])("div",g,[v.questionIndex<v.info.questions.length?(Object(r["g"])(),Object(r["c"])(x,{key:0,questionIndex:v.questionIndex,maxQuestions:v.info.questions.length,currentQuestion:v.info.questions[v.questionIndex].question},null,8,["questionIndex","maxQuestions","currentQuestion"])):Object(r["d"])("",!0),Object(r["f"])(S,{onRespond:t[2]||(t[2]=function(e){m.addScore(e),m.nextQuestion()})})])):Object(r["d"])("",!0),"results"==v.currentPage?(Object(r["g"])(),Object(r["c"])("div",j,[O,(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(v.scorePercentages,(function(e,t){return Object(r["g"])(),Object(r["c"])(P,{key:t,leftColor:v.info.values[t].valueColor,rightColor:v.info.values[t].converseColor,progress:Math.round(100*e),leftLabel:v.info.values[t].name,rightLabel:v.info.values[t].converse},null,8,["leftColor","rightColor","progress","leftLabel","rightLabel"])})),128)),h,Object(r["f"])("div",{class:"btn accent",onClick:t[3]||(t[3]=function(e){return v.currentPage="home"})},"Back to Home")])):Object(r["d"])("",!0)])}n("159b"),n("b64b"),n("a9e3"),n("2b3d"),n("3ca3"),n("841c"),n("ac1f");var v={class:"question-container"},m={class:"question-counter header"},y={class:"question-content"};function x(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("div",v,[Object(r["f"])("div",m,"Question "+Object(r["j"])(n.questionIndex+1)+" of "+Object(r["j"])(n.maxQuestions),1),Object(r["f"])("div",y,Object(r["j"])(n.currentQuestion),1)])}var S={props:{questionIndex:Number,maxQuestions:Number,currentQuestion:String}};n("d83d");S.render=x;var P=S,k={class:"response-btn-container"};function q(e,t){var n=this;return Object(r["g"])(),Object(r["c"])("div",k,[Object(r["f"])("div",{id:"strongly-agree-btn",class:"btn",onClick:t[1]||(t[1]=function(e){return n.$emit("respond",1)})},"Strongly Agree"),Object(r["f"])("div",{id:"agree-btn",class:"btn",onClick:t[2]||(t[2]=function(e){return n.$emit("respond",.5)})},"Agree"),Object(r["f"])("div",{id:"neutral-btn",class:"btn",onClick:t[3]||(t[3]=function(e){return n.$emit("respond",0)})},"Neutral/Unsure"),Object(r["f"])("div",{id:"disagree-btn",class:"btn",onClick:t[4]||(t[4]=function(e){return n.$emit("respond",-.5)})},"Disagree"),Object(r["f"])("div",{id:"strongly-disagree-btn",class:"btn",onClick:t[5]||(t[5]=function(e){return n.$emit("respond",-1)})},"Strongly Disagree")])}n("ebb2");const C={};C.render=q;var w=C,I=(n("99af"),{class:"progress-bar-component"}),Q={class:"percentage"},L={class:"percentage"};function N(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("div",I,[Object(r["f"])("div",{class:"label",style:"color: ".concat(n.leftColor,";")},[Object(r["e"])(Object(r["j"])(n.leftLabel)+" ",1),Object(r["f"])("span",Q,Object(r["j"])(n.progress)+"%",1)],4),Object(r["f"])("div",{class:"label right",style:"color: ".concat(n.rightColor,";")},[Object(r["f"])("span",L,Object(r["j"])(100-n.progress)+"%",1),Object(r["e"])(" "+Object(r["j"])(n.rightLabel),1)],4),Object(r["f"])("div",{class:"progress-bar-container",style:"background-color: ".concat(n.rightColor,";")},[Object(r["f"])("div",{class:"progress-bar",style:"background-color: ".concat(n.leftColor,"; width: ").concat(n.progress,"%")},null,4)],4)])}var M={props:{leftColor:String,rightColor:String,leftLabel:String,rightLabel:String,centerLabel:String,progress:Number}};n("d1a2");M.render=N;var R=M,_={name:"App",components:{Question:P,Responses:w,Progress:R},data:function(){return{questionIndex:0,infoSource:"",info:{},scores:[],scorePercentages:[],currentPage:"home"}},methods:{calculateMaxScore:function(e){var t=0;return this.info.questions.forEach((function(n){void 0!=n.effects[e]&&(n.effects[e]>0?t+=n.effects[e]:t+=-n.effects[e])})),t},calculatePercentageScores:function(){var e=this,t=[];return this.scores.forEach((function(n,r){var c;t[r]=null!==(c=(n+e.calculateMaxScore(r))/(2*e.calculateMaxScore(r)))&&void 0!==c?c:.5})),t},addScore:function(e){var t=this,n=this.info.questions[this.questionIndex].effects;console.log(n),Object.keys(n).forEach((function(r){void 0==t.scores[Number(r)]&&(t.scores[Number(r)]=0),t.scores[Number(r)]+=n[r]*e})),console.log(this.scores)},nextQuestion:function(){++this.questionIndex==this.info.questions.length&&(this.questionIndex=0,console.log("-- YOUR FINAL SCORES --"),this.scorePercentages=this.calculatePercentageScores(),this.currentPage="results")},reset:function(){this.scores=[],this.scorePercentages=[]}},mounted:function(){var e=this,t=new URLSearchParams(window.location.search);this.infoSource=t.get("id"),fetch("https://gist.githubusercontent.com/raw/"+this.infoSource).then((function(e){return e.text()})).then((function(t){console.log(t),e.info=JSON.parse(t)})).catch((function(e){console.error(e)}))}};n("ae06");_.render=p;var A=_;Object(r["b"])(A).mount("#app")},6601:function(e,t,n){},"849a":function(e,t,n){},"879d":function(e,t,n){},ae06:function(e,t,n){"use strict";n("6601")},d1a2:function(e,t,n){"use strict";n("849a")},d83d:function(e,t,n){"use strict";n("879d")},df29:function(e,t,n){},ebb2:function(e,t,n){"use strict";n("df29")}});
//# sourceMappingURL=app.12bd1625.js.map