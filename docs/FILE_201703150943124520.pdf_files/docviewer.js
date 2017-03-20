/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=
function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:
function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(
function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:
function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=
function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],
function(){return v})})(window);
(function(){

var special = jQuery.event.special,
uid1 = 'D' + (+new Date()),
uid2 = 'D' + (+new Date() + 1);

special.scrollstart = {
setup: function() {

var timer,
handler =  function(evt) {

var _self = this,
_args = arguments;

if (timer) {
clearTimeout(timer);
} else {
evt.type = 'scrollstart';
jQuery.event.handle.apply(_self, _args);
}

timer = setTimeout( function(){
timer = null;
}, special.scrollstop.latency);

};

jQuery(this).bind('scroll', handler).data(uid1, handler);

},
teardown: function(){
jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
}
};

special.scrollstop = {
latency: 10,
setup: function() {

var timer,
handler = function(evt) {

var _self = this,
_args = arguments;

if (timer) {
clearTimeout(timer);
}

timer = setTimeout( function(){

timer = null;
evt.type = 'scrollstop';
jQuery.event.handle.apply(_self, _args);

}, special.scrollstop.latency);

};

jQuery(this).bind('scroll', handler).data(uid2, handler);

},
teardown: function() {
jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
}
};

})();
/*
* canvg.js - Javascript SVG parser and renderer on Canvas
* MIT Licensed
* Gabe Lerner (gabelerner@gmail.com)
* http://code.google.com/p/canvg/
*
* Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
*/
if(!window.console) {
window.console = {};
window.console.log = function(str) {};
window.console.dir = function(str) {};
}

// <3 IE
if(!Array.indexOf){
Array.prototype.indexOf = function(obj){
for(var i=0; i<this.length; i++){
if(this[i]==obj){
return i;
}
}
return -1;
}
}

var imgLoadedList = new Array();

(function(){
// canvg(target, s)
// empty parameters: replace all 'svg' elements on page with 'canvas' elements
// target: canvas element or the id of a canvas element
// s: svg string, url to svg file, or xml document
// opts: optional hash of options
//		 ignoreMouse: true => ignore mouse events
//		 ignoreAnimation: true => ignore animations
//		 ignoreDimensions: true => does not try to resize canvas
//		 ignoreClear: true => does not clear canvas
//		 offsetX: int => draws at a x offset
//		 offsetY: int => draws at a y offset
//		 scaleWidth: int => scales horizontally to width
//		 scaleHeight: int => scales vertically to height
//		 renderCallback: function => will call the function after the first render is completed
//		 forceRedraw: function => will call the function on every frame, if it returns true, will redraw
this.canvg = function (target, s, opts) {
// no parameters
if (target == null && s == null && opts == null) {
var svgTags = document.getElementsByTagName('svg');
var len = svgTags.length;
for (var i=0; i<len; i++) {
var svgTag = svgTags[0];
if ( !svgTag ) break;

var c = document.createElement('canvas');
c.width = svgTag.clientWidth;
c.height = svgTag.clientHeight;
svgTag.parentNode.insertBefore(c, svgTag);
svgTag.parentNode.removeChild(svgTag);
var div = document.createElement('div');
div.appendChild(svgTag);
var svgObj = canvg(c, div.innerHTML);
}
return;
}

if (typeof target == 'string') {
target = document.getElementById(target);
}

var svg = build();
target.svg = svg;
svg.opts = opts;

var ctx = target.getContext('2d');
if (typeof(s.documentElement) != 'undefined') {
// load from xml doc
svg.loadXmlDoc(ctx, s);
}
else if (s.substr(0,1) == '<') {
// load from xml string
svg.loadXml(ctx, s);
}
else {
// load from url
svg.load(ctx, s);
}
return svg;
}

function build() {
var svg = { };

svg.FRAMERATE = 30;

// globals
svg.init = function(ctx) {
svg.Definitions = {};
svg.Styles = {};
svg.Animations = [];
svg.Images = [];
svg.ctx = ctx;
svg.ViewPort = new (function () {
this.viewPorts = [];
this.Clear = function() { this.viewPorts = []; }
this.SetCurrent = function(width, height) { this.viewPorts.push({ width: width, height: height }); }
this.RemoveCurrent = function() { this.viewPorts.pop(); }
this.Current = function() { return this.viewPorts[this.viewPorts.length - 1]; }
this.width = function() { return this.Current().width; }
this.height = function() { return this.Current().height; }
this.ComputeSize = function(d) {
if (d != null && typeof(d) == 'number') return d;
if (d == 'x') return this.width();
if (d == 'y') return this.height();
return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
}
});
}
svg.init();

// images loaded
svg.ImagesLoaded = function() {
for (var i=0; i<svg.Images.length; i++) {
if (!svg.Images[i].loaded) return false;
}
return true;
}

// trim
svg.trim = function(s) { return s.replace(/^\s+|\s+$/g, ''); }

// compress spaces
svg.compressSpaces = function(s) { return s.replace(/[\s\r\t\n]+/gm,' '); }

// ajax
svg.ajax = function(url) {
var AJAX;
if(navigator.appName != 'Microsoft Internet Explorer' && window.XMLHttpRequest){AJAX=new XMLHttpRequest();}
else{AJAX=new ActiveXObject('Microsoft.XMLHTTP');}
if(AJAX){
try {
AJAX.open('GET',url,false);
AJAX.send(null);
return AJAX.responseText;
}
catch (err) {
AJAX.async = 'false';
AJAX.load(url);
return AJAX.xml;
}
}
return null;
}

// parse xml
svg.parseXml = function(xml) {
if (window.DOMParser)
{
var parser = new DOMParser();
return parser.parseFromString(xml, 'text/xml');
}
else
{
xml = xml.replace(/<!DOCTYPE svg[^>]*>/, '');
var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
xmlDoc.async = 'false';
xmlDoc.loadXML(xml);
return xmlDoc;
}
}

svg.Property = function(name, value) {
this.name = name;
this.value = value;

this.hasValue = function() {
return (this.value != null && this.value != '');
}

// return the numerical value of the property
this.numValue = function() {
if (!this.hasValue()) return 0;

var n = parseFloat(this.value);
if ((this.value + '').match(/%$/)) {
n = n / 100.0;
}
return n;
}

this.valueOrDefault = function(def) {
if (this.hasValue()) return this.value;
return def;
}

this.numValueOrDefault = function(def) {
if (this.hasValue()) return this.numValue();
return def;
}

/* EXTENSIONS */
var that = this;

// color extensions
this.Color = {
// augment the current color value with the opacity
addOpacity: function(opacity) {
var newValue = that.value;
if (opacity != null && opacity != '') {
var color = new RGBColor(that.value);
if (color.ok) {
newValue = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + opacity + ')';
}
}
return new svg.Property(that.name, newValue);
}
}

// definition extensions
this.Definition = {
// get the definition from the definitions table
getDefinition: function() {
var name = that.value.replace(/^(url\()?#([^\)]+)\)?$/, '$2');
return svg.Definitions[name];
},

isUrl: function() {
return that.value.indexOf('url(') == 0
},

getFillStyle: function(e) {
var def = this.getDefinition();

// gradient
if (def != null && def.createGradient) {
return def.createGradient(svg.ctx, e);
}

// pattern
if (def != null && def.createPattern) {
return def.createPattern(svg.ctx, e);
}

return null;
}
}

// length extensions
this.Length = {
DPI: function(viewPort) {
return 96.0; // TODO: compute?
},

EM: function(viewPort) {
var em = 12;

var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
if (fontSize.hasValue()) em = fontSize.Length.toPixels(viewPort);

return em;
},

// get the length as pixels
toPixels: function(viewPort) {
if (!that.hasValue()) return 0;
var s = that.value+'';
if (s.match(/em$/)) return that.numValue() * this.EM(viewPort);
if (s.match(/ex$/)) return that.numValue() * this.EM(viewPort) / 2.0;
if (s.match(/px$/)) return that.numValue();
if (s.match(/pt$/)) return that.numValue() * 1.25;
if (s.match(/pc$/)) return that.numValue() * 15;
if (s.match(/cm$/)) return that.numValue() * this.DPI(viewPort) / 2.54;
if (s.match(/mm$/)) return that.numValue() * this.DPI(viewPort) / 25.4;
if (s.match(/in$/)) return that.numValue() * this.DPI(viewPort);
if (s.match(/%$/)) return that.numValue() * svg.ViewPort.ComputeSize(viewPort);
return that.numValue();
}
}

// time extensions
this.Time = {
// get the time as milliseconds
toMilliseconds: function() {
if (!that.hasValue()) return 0;
var s = that.value+'';
if (s.match(/s$/)) return that.numValue() * 1000;
if (s.match(/ms$/)) return that.numValue();
return that.numValue();
}
}

// angle extensions
this.Angle = {
// get the angle as radians
toRadians: function() {
if (!that.hasValue()) return 0;
var s = that.value+'';
if (s.match(/deg$/)) return that.numValue() * (Math.PI / 180.0);
if (s.match(/grad$/)) return that.numValue() * (Math.PI / 200.0);
if (s.match(/rad$/)) return that.numValue();
return that.numValue() * (Math.PI / 180.0);
}
}
}

// fonts
svg.Font = new (function() {
this.Styles = ['normal','italic','oblique','inherit'];
this.Variants = ['normal','small-caps','inherit'];
this.Weights = ['normal','bold','bolder','lighter','100','200','300','400','500','600','700','800','900','inherit'];

this.CreateFont = function(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
var f = inherit != null ? this.Parse(inherit) : this.CreateFont('', '', '', '', '', svg.ctx.font);
return {
fontFamily: fontFamily || f.fontFamily,
fontSize: fontSize || f.fontSize,
fontStyle: fontStyle || f.fontStyle,
fontWeight: fontWeight || f.fontWeight,
fontVariant: fontVariant || f.fontVariant,
toString: function () { return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(' ') }
}
}

var that = this;
this.Parse = function(s) {
var f = {};
var d = svg.trim(svg.compressSpaces(s || '')).split(' ');
var set = { fontSize: false, fontStyle: false, fontWeight: false, fontVariant: false }
var ff = '';
for (var i=0; i<d.length; i++) {
if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) { if (d[i] != 'inherit') f.fontStyle = d[i]; set.fontStyle = true; }
else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) { if (d[i] != 'inherit') f.fontVariant = d[i]; set.fontStyle = set.fontVariant = true;	}
else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {	if (d[i] != 'inherit') f.fontWeight = d[i]; set.fontStyle = set.fontVariant = set.fontWeight = true; }
else if (!set.fontSize) { if (d[i] != 'inherit') f.fontSize = d[i].split('/')[0]; set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true; }
else { if (d[i] != 'inherit') ff += d[i]; }
} if (ff != '') f.fontFamily = ff;
return f;
}
});

// points and paths
svg.ToNumberArray = function(s) {
var a = svg.trim(svg.compressSpaces((s || '').replace(/,/g, ' '))).split(' ');
for (var i=0; i<a.length; i++) {
a[i] = parseFloat(a[i]);
}
return a;
}
svg.Point = function(x, y) {
this.x = x;
this.y = y;

this.angleTo = function(p) {
return Math.atan2(p.y - this.y, p.x - this.x);
}

this.applyTransform = function(v) {
var xp = this.x * v[0] + this.y * v[2] + v[4];
var yp = this.x * v[1] + this.y * v[3] + v[5];
this.x = xp;
this.y = yp;
}
}
svg.CreatePoint = function(s) {
var a = svg.ToNumberArray(s);
return new svg.Point(a[0], a[1]);
}
svg.CreatePath = function(s) {
var a = svg.ToNumberArray(s);
var path = [];
for (var i=0; i<a.length; i+=2) {
path.push(new svg.Point(a[i], a[i+1]));
}
return path;
}

// bounding box
svg.BoundingBox = function(x1, y1, x2, y2) { // pass in initial points if you want
this.x1 = Number.NaN;
this.y1 = Number.NaN;
this.x2 = Number.NaN;
this.y2 = Number.NaN;

this.x = function() { return this.x1; }
this.y = function() { return this.y1; }
this.width = function() { return this.x2 - this.x1; }
this.height = function() { return this.y2 - this.y1; }

this.addPoint = function(x, y) {
if (x != null) {
if (isNaN(this.x1) || isNaN(this.x2)) {
this.x1 = x;
this.x2 = x;
}
if (x < this.x1) this.x1 = x;
if (x > this.x2) this.x2 = x;
}

if (y != null) {
if (isNaN(this.y1) || isNaN(this.y2)) {
this.y1 = y;
this.y2 = y;
}
if (y < this.y1) this.y1 = y;
if (y > this.y2) this.y2 = y;
}
}
this.addX = function(x) { this.addPoint(x, null); }
this.addY = function(y) { this.addPoint(null, y); }

this.addBoundingBox = function(bb) {
this.addPoint(bb.x1, bb.y1);
this.addPoint(bb.x2, bb.y2);
}

this.addQuadraticCurve = function(p0x, p0y, p1x, p1y, p2x, p2y) {
var cp1x = p0x + 2/3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
var cp1y = p0y + 2/3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
var cp2x = cp1x + 1/3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
var cp2y = cp1y + 1/3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y,	cp2y, p2x, p2y);
}

this.addBezierCurve = function(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
// from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
var p0 = [p0x, p0y], p1 = [p1x, p1y], p2 = [p2x, p2y], p3 = [p3x, p3y];
this.addPoint(p0[0], p0[1]);
this.addPoint(p3[0], p3[1]);

for (i=0; i<=1; i++) {
var f = function(t) {
return Math.pow(1-t, 3) * p0[i]
+ 3 * Math.pow(1-t, 2) * t * p1[i]
+ 3 * (1-t) * Math.pow(t, 2) * p2[i]
+ Math.pow(t, 3) * p3[i];
}

var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
var c = 3 * p1[i] - 3 * p0[i];

if (a == 0) {
if (b == 0) continue;
var t = -c / b;
if (0 < t && t < 1) {
if (i == 0) this.addX(f(t));
if (i == 1) this.addY(f(t));
}
continue;
}

var b2ac = Math.pow(b, 2) - 4 * c * a;
if (b2ac < 0) continue;
var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
if (0 < t1 && t1 < 1) {
if (i == 0) this.addX(f(t1));
if (i == 1) this.addY(f(t1));
}
var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
if (0 < t2 && t2 < 1) {
if (i == 0) this.addX(f(t2));
if (i == 1) this.addY(f(t2));
}
}
}

this.isPointInBox = function(x, y) {
return (this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2);
}

this.addPoint(x1, y1);
this.addPoint(x2, y2);
}

// transforms
svg.Transform = function(v) {
var that = this;
this.Type = {}

// translate
this.Type.translate = function(s) {
this.p = svg.CreatePoint(s);
this.apply = function(ctx) {
ctx.translate(this.p.x || 0.0, this.p.y || 0.0);
}
this.applyToPoint = function(p) {
p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
}
}

// rotate
this.Type.rotate = function(s) {
var a = svg.ToNumberArray(s);
this.angle = new svg.Property('angle', a[0]);
this.cx = a[1] || 0;
this.cy = a[2] || 0;
this.apply = function(ctx) {
ctx.translate(this.cx, this.cy);
ctx.rotate(this.angle.Angle.toRadians());
ctx.translate(-this.cx, -this.cy);
}
this.applyToPoint = function(p) {
var a = this.angle.Angle.toRadians();
p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
p.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
p.applyTransform([1, 0, 0, 1, -this.p.x || 0.0, -this.p.y || 0.0]);
}
}

this.Type.scale = function(s) {
this.p = svg.CreatePoint(s);
this.apply = function(ctx) {
ctx.scale(this.p.x || 1.0, this.p.y || this.p.x || 1.0);
}
this.applyToPoint = function(p) {
p.applyTransform([this.p.x || 0.0, 0, 0, this.p.y || 0.0, 0, 0]);
}
}

this.Type.matrix = function(s) {
this.m = svg.ToNumberArray(s);
this.apply = function(ctx) {
ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
}
this.applyToPoint = function(p) {
p.applyTransform(this.m);
}
}

this.Type.SkewBase = function(s) {
this.base = that.Type.matrix;
this.base(s);
this.angle = new svg.Property('angle', s);
}
this.Type.SkewBase.prototype = new this.Type.matrix;

this.Type.skewX = function(s) {
this.base = that.Type.SkewBase;
this.base(s);
this.m = [1, 0, Math.tan(this.angle.Angle.toRadians()), 1, 0, 0];
}
this.Type.skewX.prototype = new this.Type.SkewBase;

this.Type.skewY = function(s) {
this.base = that.Type.SkewBase;
this.base(s);
this.m = [1, Math.tan(this.angle.Angle.toRadians()), 0, 1, 0, 0];
}
this.Type.skewY.prototype = new this.Type.SkewBase;

this.transforms = [];

this.apply = function(ctx) {
for (var i=0; i<this.transforms.length; i++) {
this.transforms[i].apply(ctx);
}
}

this.applyToPoint = function(p) {
for (var i=0; i<this.transforms.length; i++) {
this.transforms[i].applyToPoint(p);
}
}

v = svg.trim(v);
var data = v.split(/\s(?=[a-z])/);
for (var i=0; i<data.length; i++) {
var type = data[i].split('(')[0];
var s = data[i].split('(')[1].replace(')','');
var transform = new this.Type[type](s);
this.transforms.push(transform);
}
}

// aspect ratio
svg.AspectRatio = function(ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
// aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
aspectRatio = svg.compressSpaces(aspectRatio);
aspectRatio = aspectRatio.replace(/^defer\s/,''); // ignore defer
var align = aspectRatio.split(' ')[0] || 'xMidYMid';
var meetOrSlice = aspectRatio.split(' ')[1] || 'meet';

// calculate scale
var scaleX = width / desiredWidth;
var scaleY = height / desiredHeight;
var scaleMin = Math.min(scaleX, scaleY);
var scaleMax = Math.max(scaleX, scaleY);
if (meetOrSlice == 'meet') { desiredWidth *= scaleMin; desiredHeight *= scaleMin; }
if (meetOrSlice == 'slice') { desiredWidth *= scaleMax; desiredHeight *= scaleMax; }

refX = new svg.Property('refX', refX);
refY = new svg.Property('refY', refY);
if (refX.hasValue() && refY.hasValue()) {
ctx.translate(-scaleMin * refX.Length.toPixels('x'), -scaleMin * refY.Length.toPixels('y'));
}
else {
// align
if (align.match(/^xMid/) && ((meetOrSlice == 'meet' && scaleMin == scaleY) || (meetOrSlice == 'slice' && scaleMax == scaleY))) ctx.translate(width / 2.0 - desiredWidth / 2.0, 0);
if (align.match(/YMid$/) && ((meetOrSlice == 'meet' && scaleMin == scaleX) || (meetOrSlice == 'slice' && scaleMax == scaleX))) ctx.translate(0, height / 2.0 - desiredHeight / 2.0);
if (align.match(/^xMax/) && ((meetOrSlice == 'meet' && scaleMin == scaleY) || (meetOrSlice == 'slice' && scaleMax == scaleY))) ctx.translate(width - desiredWidth, 0);
if (align.match(/YMax$/) && ((meetOrSlice == 'meet' && scaleMin == scaleX) || (meetOrSlice == 'slice' && scaleMax == scaleX))) ctx.translate(0, height - desiredHeight);
}

// scale
if (align == 'none') ctx.scale(scaleX, scaleY);
else if (meetOrSlice == 'meet') ctx.scale(scaleMin, scaleMin);
else if (meetOrSlice == 'slice') ctx.scale(scaleMax, scaleMax);

// translate
ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);
}

// elements
svg.Element = {}

svg.Element.ElementBase = function(node) {
this.attributes = {};
this.styles = {};
this.children = [];

// get or create attribute
this.attribute = function(name, createIfNotExists) {
var a = this.attributes[name];
if (a != null) return a;

a = new svg.Property(name, '');
if (createIfNotExists == true) this.attributes[name] = a;
return a;
}

// get or create style
this.style = function(name, createIfNotExists) {
var s = this.styles[name];
if (s != null) return s;

var a = this.attribute(name);
if (a != null && a.hasValue()) {
return a;
}

s = new svg.Property(name, '');
if (createIfNotExists == true) this.styles[name] = s;
return s;
}

// base render
this.render = function(ctx) {
// don't render display=none
if (this.attribute('display').value == 'none') return;

// don't render visibility=hidden
if (this.attribute('visibility').value == 'hidden') return;

ctx.save();
this.setContext(ctx);
this.renderChildren(ctx);
this.clearContext(ctx);
ctx.restore();
}

// base set context
this.setContext = function(ctx) {
// OVERRIDE ME!
}

// base clear context
this.clearContext = function(ctx) {
// OVERRIDE ME!
}

// base render children
this.renderChildren = function(ctx) {
for (var i=0; i<this.children.length; i++) {
this.children[i].render(ctx);
}
}

this.addChild = function(childNode, create) {
var child = childNode;
if (create) child = svg.CreateElement(childNode);
child.parent = this;
this.children.push(child);
}

if (node != null && node.nodeType == 1) { //ELEMENT_NODE
// add children
for (var i=0; i<node.childNodes.length; i++) {
var childNode = node.childNodes[i];
if (childNode.nodeType == 1) this.addChild(childNode, true); //ELEMENT_NODE
}

// add attributes
for (var i=0; i<node.attributes.length; i++) {
var attribute = node.attributes[i];
this.attributes[attribute.nodeName] = new svg.Property(attribute.nodeName, attribute.nodeValue);
}

// add tag styles
var styles = svg.Styles[node.nodeName];
if (styles != null) {
for (var name in styles) {
this.styles[name] = styles[name];
}
}

// add class styles
if (this.attribute('class').hasValue()) {
var classes = svg.compressSpaces(this.attribute('class').value).split(' ');
for (var j=0; j<classes.length; j++) {
styles = svg.Styles['.'+classes[j]];
if (styles != null) {
for (var name in styles) {
this.styles[name] = styles[name];
}
}
styles = svg.Styles[node.nodeName+'.'+classes[j]];
if (styles != null) {
for (var name in styles) {
this.styles[name] = styles[name];
}
}
}
}

// add inline styles
if (this.attribute('style').hasValue()) {
var styles = this.attribute('style').value.split(';');
for (var i=0; i<styles.length; i++) {
if (svg.trim(styles[i]) != '') {
var style = styles[i].split(':');
var name = svg.trim(style[0]);
var value = svg.trim(style[1]);
this.styles[name] = new svg.Property(name, value);
}
}
}

// add id
if (this.attribute('id').hasValue()) {
if (svg.Definitions[this.attribute('id').value] == null) {
svg.Definitions[this.attribute('id').value] = this;
}
}
}
}

svg.Element.RenderedElementBase = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.setContext = function(ctx) {
// fill
if (this.style('fill').Definition.isUrl()) {
var fs = this.style('fill').Definition.getFillStyle(this);
if (fs != null) ctx.fillStyle = fs;
}
else if (this.style('fill').hasValue()) {
var fillStyle = this.style('fill');
if (this.style('fill-opacity').hasValue()) fillStyle = fillStyle.Color.addOpacity(this.style('fill-opacity').value);
ctx.fillStyle = (fillStyle.value == 'none' ? 'rgba(0,0,0,0)' : fillStyle.value);
}

// stroke
/*
* reflect parent stroke properties (START)
* by goodoi 11.04.03
*/
if (!this.style('stroke').value) {
if (this.parent && this.parent.style('stroke').hasValue()) {
this.style('stroke', true).value = this.parent.style('stroke').value;
}
}
if (!this.style('stroke-width').value) {
if (this.parent && this.parent.style('stroke-width').hasValue()) {
this.style('stroke-width', true).value = this.parent.style('stroke-width').value;
}
}
if (!this.style('stroke-opacity').value) {
if (this.parent && this.parent.style('stroke-opacity').hasValue()) {
this.style('stroke-opacity', true).value = this.parent.style('stroke-opacity').value;
}
}
/*
* reflect parent stroke properties (END)
* by goodoi 11.04.03
*/

if (this.style('stroke').Definition.isUrl()) {
var fs = this.style('stroke').Definition.getFillStyle(this);
if (fs != null) ctx.strokeStyle = fs;
}
else if (this.style('stroke').hasValue()) {
var strokeStyle = this.style('stroke');
if (this.style('stroke-opacity').hasValue()) strokeStyle = strokeStyle.Color.addOpacity(this.style('stroke-opacity').value);
ctx.strokeStyle = (strokeStyle.value == 'none' ? 'rgba(0,0,0,0)' : strokeStyle.value);
}
if (this.style('stroke-width').hasValue()) ctx.lineWidth = this.style('stroke-width').Length.toPixels();
if (this.style('stroke-linecap').hasValue()) ctx.lineCap = this.style('stroke-linecap').value;
if (this.style('stroke-linejoin').hasValue()) ctx.lineJoin = this.style('stroke-linejoin').value;
if (this.style('stroke-miterlimit').hasValue()) ctx.miterLimit = this.style('stroke-miterlimit').value;

// font
if (typeof(ctx.font) != 'undefined') {
ctx.font = svg.Font.CreateFont(
this.style('font-style').value,
this.style('font-variant').value,
this.style('font-weight').value,
this.style('font-size').hasValue() ? this.style('font-size').Length.toPixels() + 'px' : '',
this.style('font-family').value).toString();
}

// transform
if (this.attribute('transform').hasValue()) {
var transform = new svg.Transform(this.attribute('transform').value);
transform.apply(ctx);
}

// clip
if (this.attribute('clip-path').hasValue()) {
var clip = this.attribute('clip-path').Definition.getDefinition();
if (clip != null) clip.apply(ctx);
}

// opacity
if (this.style('opacity').hasValue()) {
ctx.globalAlpha = this.style('opacity').numValue();
}
}
}
svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase;

svg.Element.PathElementBase = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

this.path = function(ctx) {
if (ctx != null) ctx.beginPath();
return new svg.BoundingBox();
}

this.renderChildren = function(ctx) {
this.path(ctx);
svg.Mouse.checkPath(this, ctx);
if (ctx.fillStyle != '') ctx.fill();
if (ctx.strokeStyle != '') ctx.stroke();

var markers = this.getMarkers();
if (markers != null) {
if (this.attribute('marker-start').Definition.isUrl()) {
var marker = this.attribute('marker-start').Definition.getDefinition();
marker.render(ctx, markers[0][0], markers[0][1]);
}
if (this.attribute('marker-mid').Definition.isUrl()) {
var marker = this.attribute('marker-mid').Definition.getDefinition();
for (var i=1;i<markers.length-1;i++) {
marker.render(ctx, markers[i][0], markers[i][1]);
}
}
if (this.attribute('marker-end').Definition.isUrl()) {
var marker = this.attribute('marker-end').Definition.getDefinition();
marker.render(ctx, markers[markers.length-1][0], markers[markers.length-1][1]);
}
}
}

this.getBoundingBox = function() {
return this.path();
}

this.getMarkers = function() {
return null;
}
}
svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase;

// svg element
svg.Element.svg = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

this.baseClearContext = this.clearContext;
this.clearContext = function(ctx) {
this.baseClearContext(ctx);
svg.ViewPort.RemoveCurrent();
}

this.baseSetContext = this.setContext;
this.setContext = function(ctx) {
// initial values
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;

this.baseSetContext(ctx);

// create new view port
if (this.attribute('x').hasValue() && this.attribute('y').hasValue()) {
ctx.translate(this.attribute('x').Length.toPixels('x'), this.attribute('y').Length.toPixels('y'));
}

var width = svg.ViewPort.width();
var height = svg.ViewPort.height();
if (typeof(this.root) == 'undefined' && this.attribute('width').hasValue() && this.attribute('height').hasValue()) {
width = this.attribute('width').Length.toPixels('x');
height = this.attribute('height').Length.toPixels('y');

var x = 0;
var y = 0;
if (this.attribute('refX').hasValue() && this.attribute('refY').hasValue()) {
x = -this.attribute('refX').Length.toPixels('x');
y = -this.attribute('refY').Length.toPixels('y');
}

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(width, y);
ctx.lineTo(width, height);
ctx.lineTo(x, height);
ctx.closePath();
ctx.clip();
}
svg.ViewPort.SetCurrent(width, height);

// viewbox
if (this.attribute('viewBox').hasValue()) {
var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
var minX = viewBox[0];
var minY = viewBox[1];
width = viewBox[2];
height = viewBox[3];

svg.AspectRatio(ctx,
this.attribute('preserveAspectRatio').value,
svg.ViewPort.width(),
width,
svg.ViewPort.height(),
height,
minX,
minY,
this.attribute('refX').value,
this.attribute('refY').value);

svg.ViewPort.RemoveCurrent();
svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
}
}
}
svg.Element.svg.prototype = new svg.Element.RenderedElementBase;

// rect element
svg.Element.rect = function(node) {
this.base = svg.Element.PathElementBase;
this.base(node);

this.path = function(ctx) {
var x = this.attribute('x').Length.toPixels('x');
var y = this.attribute('y').Length.toPixels('y');
var width = this.attribute('width').Length.toPixels('x');
var height = this.attribute('height').Length.toPixels('y');
var rx = this.attribute('rx').Length.toPixels('x');
var ry = this.attribute('ry').Length.toPixels('y');
if (this.attribute('rx').hasValue() && !this.attribute('ry').hasValue()) ry = rx;
if (this.attribute('ry').hasValue() && !this.attribute('rx').hasValue()) rx = ry;

if (ctx != null) {
ctx.beginPath();
ctx.moveTo(x + rx, y);
ctx.lineTo(x + width - rx, y);
ctx.quadraticCurveTo(x + width, y, x + width, y + ry)
ctx.lineTo(x + width, y + height - ry);
ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height)
ctx.lineTo(x + rx, y + height);
ctx.quadraticCurveTo(x, y + height, x, y + height - ry)
ctx.lineTo(x, y + ry);
ctx.quadraticCurveTo(x, y, x + rx, y)
ctx.closePath();
}

return new svg.BoundingBox(x, y, x + width, y + height);
}
}
svg.Element.rect.prototype = new svg.Element.PathElementBase;

// circle element
svg.Element.circle = function(node) {
this.base = svg.Element.PathElementBase;
this.base(node);

this.path = function(ctx) {
var cx = this.attribute('cx').Length.toPixels('x');
var cy = this.attribute('cy').Length.toPixels('y');
var r = this.attribute('r').Length.toPixels();

if (ctx != null) {
ctx.beginPath();
ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
ctx.closePath();
}

return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
}
}
svg.Element.circle.prototype = new svg.Element.PathElementBase;

// ellipse element
svg.Element.ellipse = function(node) {
this.base = svg.Element.PathElementBase;
this.base(node);

this.path = function(ctx) {
var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
var rx = this.attribute('rx').Length.toPixels('x');
var ry = this.attribute('ry').Length.toPixels('y');
var cx = this.attribute('cx').Length.toPixels('x');
var cy = this.attribute('cy').Length.toPixels('y');

if (ctx != null) {
ctx.beginPath();
ctx.moveTo(cx, cy - ry);
ctx.bezierCurveTo(cx + (KAPPA * rx), cy - ry,  cx + rx, cy - (KAPPA * ry), cx + rx, cy);
ctx.bezierCurveTo(cx + rx, cy + (KAPPA * ry), cx + (KAPPA * rx), cy + ry, cx, cy + ry);
ctx.bezierCurveTo(cx - (KAPPA * rx), cy + ry, cx - rx, cy + (KAPPA * ry), cx - rx, cy);
ctx.bezierCurveTo(cx - rx, cy - (KAPPA * ry), cx - (KAPPA * rx), cy - ry, cx, cy - ry);
ctx.closePath();
}

return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
}
}
svg.Element.ellipse.prototype = new svg.Element.PathElementBase;

// line element
svg.Element.line = function(node) {
this.base = svg.Element.PathElementBase;
this.base(node);

this.getPoints = function() {
return [
new svg.Point(this.attribute('x1').Length.toPixels('x'), this.attribute('y1').Length.toPixels('y')),
new svg.Point(this.attribute('x2').Length.toPixels('x'), this.attribute('y2').Length.toPixels('y'))];
}

this.path = function(ctx) {
var points = this.getPoints();

if (ctx != null) {
ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y);
ctx.lineTo(points[1].x, points[1].y);
}

return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
}

this.getMarkers = function() {
var points = this.getPoints();
var a = points[0].angleTo(points[1]);
return [[points[0], a], [points[1], a]];
}
}
svg.Element.line.prototype = new svg.Element.PathElementBase;

// polyline element
svg.Element.polyline = function(node) {
this.base = svg.Element.PathElementBase;
this.base(node);

this.points = svg.CreatePath(this.attribute('points').value);
this.path = function(ctx) {
var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);
if (ctx != null) {
ctx.beginPath();
ctx.moveTo(this.points[0].x, this.points[0].y);
}
for (var i=1; i<this.points.length; i++) {
bb.addPoint(this.points[i].x, this.points[i].y);
if (ctx != null) ctx.lineTo(this.points[i].x, this.points[i].y);
}
return bb;
}

this.getMarkers = function() {
var markers = [];
for (var i=0; i<this.points.length - 1; i++) {
markers.push([this.points[i], this.points[i].angleTo(this.points[i+1])]);
}
markers.push([this.points[this.points.length-1], markers[markers.length-1][1]]);
return markers;
}
}
svg.Element.polyline.prototype = new svg.Element.PathElementBase;

// polygon element
svg.Element.polygon = function(node) {
this.base = svg.Element.polyline;
this.base(node);

this.basePath = this.path;
this.path = function(ctx) {
var bb = this.basePath(ctx);
if (ctx != null) {
ctx.lineTo(this.points[0].x, this.points[0].y);
ctx.closePath();
}
return bb;
}
}
svg.Element.polygon.prototype = new svg.Element.polyline;

// path element
svg.Element.path = function(node) {
this.base = svg.Element.PathElementBase;
this.base(node);

var d = this.attribute('d').value;
// TODO: floating points, convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF
d = d.replace(/,/gm,' '); // get rid of all commas
d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from commands
d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from commands
d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,'$1 $2'); // separate commands from points
d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,'$1 $2'); // separate commands from points
d = d.replace(/([0-9])([+\-])/gm,'$1 $2'); // separate digits when no comma
d = d.replace(/(\.[0-9]*)(\.)/gm,'$1 $2'); // separate digits when no comma
d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,'$1 $3 $4 '); // shorthand elliptical arc path syntax
d = svg.compressSpaces(d); // compress multiple spaces
d = svg.trim(d);
this.PathParser = new (function(d) {
this.tokens = d.split(' ');

this.reset = function() {
this.i = -1;
this.command = '';
this.previousCommand = '';
this.start = new svg.Point(0, 0);
this.control = new svg.Point(0, 0);
this.current = new svg.Point(0, 0);
this.points = [];
this.angles = [];
}

this.isEnd = function() {
return this.i >= this.tokens.length - 1;
}

this.isCommandOrEnd = function() {
if (this.isEnd()) return true;
return this.tokens[this.i + 1].match(/[A-Za-z]/) != null;
}

this.isRelativeCommand = function() {
return this.command == this.command.toLowerCase();
}

this.getToken = function() {
this.i = this.i + 1;
return this.tokens[this.i];
}

this.getScalar = function() {
return parseFloat(this.getToken());
}

this.nextCommand = function() {
this.previousCommand = this.command;
this.command = this.getToken();
}

this.getPoint = function() {
var p = new svg.Point(this.getScalar(), this.getScalar());
return this.makeAbsolute(p);
}

this.getAsControlPoint = function() {
var p = this.getPoint();
this.control = p;
return p;
}

this.getAsCurrentPoint = function() {
var p = this.getPoint();
this.current = p;
return p;
}

this.getReflectedControlPoint = function() {
if (this.previousCommand.toLowerCase() != 'c' && this.previousCommand.toLowerCase() != 's') {
return this.current;
}

// reflect point
var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
return p;
}

this.makeAbsolute = function(p) {
if (this.isRelativeCommand()) {
p.x = this.current.x + p.x;
p.y = this.current.y + p.y;
}
return p;
}

this.addMarker = function(p, from) {
this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
}

this.addMarkerAngle = function(p, a) {
this.points.push(p);
this.angles.push(a);
}

this.getMarkerPoints = function() { return this.points; }
this.getMarkerAngles = function() {
for (var i=0; i<this.angles.length; i++) {
if (this.angles[i] == null) {
for (var j=i+1; j<this.angles.length; j++) {
if (this.angles[j] != null) {
this.angles[i] = this.angles[j];
break;
}
}
}
}
return this.angles;
}
})(d);

this.path = function(ctx) {
var pp = this.PathParser;
pp.reset();

var bb = new svg.BoundingBox();
if (ctx != null) ctx.beginPath();
while (!pp.isEnd()) {
pp.nextCommand();
switch (pp.command.toUpperCase()) {
case 'M':
var p = pp.getAsCurrentPoint();
pp.addMarker(p);
bb.addPoint(p.x, p.y);
if (ctx != null) ctx.moveTo(p.x, p.y);
pp.start = pp.current;
while (!pp.isCommandOrEnd()) {
var p = pp.getAsCurrentPoint();
pp.addMarker(p);
bb.addPoint(p.x, p.y);
if (ctx != null) ctx.lineTo(p.x, p.y);
}
break;
case 'L':
while (!pp.isCommandOrEnd()) {
var c = pp.current;
var p = pp.getAsCurrentPoint();
pp.addMarker(p, c);
bb.addPoint(p.x, p.y);
if (ctx != null) ctx.lineTo(p.x, p.y);
}
break;
case 'H':
while (!pp.isCommandOrEnd()) {
var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
pp.addMarker(newP, pp.current);
pp.current = newP;
bb.addPoint(pp.current.x, pp.current.y);
if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
}
break;
case 'V':
while (!pp.isCommandOrEnd()) {
var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
pp.addMarker(newP, pp.current);
pp.current = newP;
bb.addPoint(pp.current.x, pp.current.y);
if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
}
break;
case 'C':
while (!pp.isCommandOrEnd()) {
var curr = pp.current;
var p1 = pp.getPoint();
var cntrl = pp.getAsControlPoint();
var cp = pp.getAsCurrentPoint();
pp.addMarker(cp, cntrl);
bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
}
break;
case 'S':
while (!pp.isCommandOrEnd()) {
var curr = pp.current;
var p1 = pp.getReflectedControlPoint();
var cntrl = pp.getAsControlPoint();
var cp = pp.getAsCurrentPoint();
pp.addMarker(cp, cntrl);
bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
}
break;
case 'Q':
while (!pp.isCommandOrEnd()) {
var curr = pp.current;
var cntrl = pp.getAsControlPoint();
var cp = pp.getAsCurrentPoint();
pp.addMarker(cp, cntrl);
bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
}
break;
case 'T':
while (!pp.isCommandOrEnd()) {
var curr = pp.current;
var cntrl = pp.getReflectedControlPoint();
pp.control = cntrl;
var cp = pp.getAsCurrentPoint();
pp.addMarker(cp, cntrl);
bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
}
break;
case 'A':
while (!pp.isCommandOrEnd()) {
var curr = pp.current;
var rx = pp.getScalar();
var ry = pp.getScalar();
var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
var largeArcFlag = pp.getScalar();
var sweepFlag = pp.getScalar();
var cp = pp.getAsCurrentPoint();

// Conversion from endpoint to center parameterization
// http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
// x1', y1'
var currp = new svg.Point(
Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0,
-Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0
);
// adjust radii
var l = Math.pow(currp.x,2)/Math.pow(rx,2)+Math.pow(currp.y,2)/Math.pow(ry,2);
if (l > 1) {
rx *= Math.sqrt(l);
ry *= Math.sqrt(l);
}
// cx', cy'
var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt(
((Math.pow(rx,2)*Math.pow(ry,2))-(Math.pow(rx,2)*Math.pow(currp.y,2))-(Math.pow(ry,2)*Math.pow(currp.x,2))) /
(Math.pow(rx,2)*Math.pow(currp.y,2)+Math.pow(ry,2)*Math.pow(currp.x,2))
);
if (isNaN(s)) s = 0;
var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
// cx, cy
var centp = new svg.Point(
(curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y,
(curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y
);
// vector magnitude
var m = function(v) { return Math.sqrt(Math.pow(v[0],2) + Math.pow(v[1],2)); }
// ratio between two vectors
var r = function(u, v) { return (u[0]*v[0]+u[1]*v[1]) / (m(u)*m(v)) }
// angle between two vectors
var a = function(u, v) { return (u[0]*v[1] < u[1]*v[0] ? -1 : 1) * Math.acos(r(u,v)); }
// initial angle
var a1 = a([1,0], [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry]);
// angle delta
var u = [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry];
var v = [(-currp.x-cpp.x)/rx,(-currp.y-cpp.y)/ry];
var ad = a(u, v);
if (r(u,v) <= -1) ad = Math.PI;
if (r(u,v) >= 1) ad = 0;

if (sweepFlag == 0 && ad > 0) ad = ad - 2 * Math.PI;
if (sweepFlag == 1 && ad < 0) ad = ad + 2 * Math.PI;

// for markers
var halfWay = new svg.Point(
centp.x - rx * Math.cos((a1 + ad) / 2),
centp.y - ry * Math.sin((a1 + ad) / 2)
);
pp.addMarkerAngle(halfWay, (a1 + ad) / 2 + (sweepFlag == 0 ? 1 : -1) * Math.PI / 2);
pp.addMarkerAngle(cp, ad + (sweepFlag == 0 ? 1 : -1) * Math.PI / 2);

bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
if (ctx != null) {
var r = rx > ry ? rx : ry;
var sx = rx > ry ? 1 : rx / ry;
var sy = rx > ry ? ry / rx : 1;

ctx.translate(centp.x, centp.y);
ctx.rotate(xAxisRotation);
ctx.scale(sx, sy);
ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
ctx.scale(1/sx, 1/sy);
ctx.rotate(-xAxisRotation);
ctx.translate(-centp.x, -centp.y);
}
}
break;
case 'Z':
if (ctx != null) ctx.closePath();
pp.current = pp.start;
}
}

return bb;
}

this.getMarkers = function() {
var points = this.PathParser.getMarkerPoints();
var angles = this.PathParser.getMarkerAngles();

var markers = [];
for (var i=0; i<points.length; i++) {
markers.push([points[i], angles[i]]);
}
return markers;
}
}
svg.Element.path.prototype = new svg.Element.PathElementBase;

// pattern element
svg.Element.pattern = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.createPattern = function(ctx, element) {
// render me using a temporary svg element
var tempSvg = new svg.Element.svg();
tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
tempSvg.attributes['x'] = new svg.Property('x', this.attribute('x').value);
tempSvg.attributes['y'] = new svg.Property('y', this.attribute('y').value);
tempSvg.attributes['width'] = new svg.Property('width', this.attribute('width').value);
tempSvg.attributes['height'] = new svg.Property('height', this.attribute('height').value);
tempSvg.children = this.children;

/*
var c = document.createElement('canvas');
//c.width = this.attribute('width').Length.toPixels();
//c.height = this.attribute('height').Length.toPixels();
var slideDiv = document.getElementById('slide');
var tViewbox = svg.ToNumberArray(this.parent.parent.attribute('viewBox').value);
c.width = slideDiv.clientWidth * (this.attribute('width').Length.toPixels() / tViewbox[2]);
c.height = slideDiv.clientHeight * (this.attribute('height').Length.toPixels() / tViewbox[3]);
*/
tempSvg.render(ctx);
return ctx.createPattern(ctx.canvas, 'repeat');
}
}
svg.Element.pattern.prototype = new svg.Element.ElementBase;

// marker element
svg.Element.marker = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.baseRender = this.render;
this.render = function(ctx, point, angle) {
ctx.translate(point.x, point.y);
if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(angle);
if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
ctx.save();

// render me using a temporary svg element
var tempSvg = new svg.Element.svg();
tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
tempSvg.attributes['refX'] = new svg.Property('refX', this.attribute('refX').value);
tempSvg.attributes['refY'] = new svg.Property('refY', this.attribute('refY').value);
tempSvg.attributes['width'] = new svg.Property('width', this.attribute('markerWidth').value);
tempSvg.attributes['height'] = new svg.Property('height', this.attribute('markerHeight').value);
tempSvg.attributes['fill'] = new svg.Property('fill', this.attribute('fill').valueOrDefault('black'));
tempSvg.attributes['stroke'] = new svg.Property('stroke', this.attribute('stroke').valueOrDefault('none'));
tempSvg.children = this.children;
tempSvg.render(ctx);

ctx.restore();
if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(1/ctx.lineWidth, 1/ctx.lineWidth);
if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(-angle);
ctx.translate(-point.x, -point.y);
}
}
svg.Element.marker.prototype = new svg.Element.ElementBase;

// definitions element
svg.Element.defs = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.render = function(ctx) {
// NOOP
}
}
svg.Element.defs.prototype = new svg.Element.ElementBase;

// base for gradients
svg.Element.GradientBase = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.gradientUnits = this.attribute('gradientUnits').valueOrDefault('objectBoundingBox');

this.stops = [];
for (var i=0; i<this.children.length; i++) {
var child = this.children[i];
this.stops.push(child);
}

this.getGradient = function() {
// OVERRIDE ME!
}

this.createGradient = function(ctx, element) {
var stopsContainer = this;
if (this.attribute('xlink:href').hasValue()) {
stopsContainer = this.attribute('xlink:href').Definition.getDefinition();
}

var g = this.getGradient(ctx, element);
for (var i=0; i<stopsContainer.stops.length; i++) {
g.addColorStop(stopsContainer.stops[i].offset, stopsContainer.stops[i].color);
}
return g;
}
}
svg.Element.GradientBase.prototype = new svg.Element.ElementBase;

// linear gradient element
svg.Element.linearGradient = function(node) {
this.base = svg.Element.GradientBase;
this.base(node);

this.getGradient = function(ctx, element) {
var bb = element.getBoundingBox();

var x1 = (this.gradientUnits == 'objectBoundingBox'
? bb.x() + bb.width() * this.attribute('x1').numValue()
: this.attribute('x1').Length.toPixels('x'));
var y1 = (this.gradientUnits == 'objectBoundingBox'
? bb.y() + bb.height() * this.attribute('y1').numValue()
: this.attribute('y1').Length.toPixels('y'));
var x2 = (this.gradientUnits == 'objectBoundingBox'
? bb.x() + bb.width() * this.attribute('x2').numValue()
: this.attribute('x2').Length.toPixels('x'));
var y2 = (this.gradientUnits == 'objectBoundingBox'
? bb.y() + bb.height() * this.attribute('y2').numValue()
: this.attribute('y2').Length.toPixels('y'));

var p1 = new svg.Point(x1, y1);
var p2 = new svg.Point(x2, y2);
if (this.attribute('gradientTransform').hasValue()) {
var transform = new svg.Transform(this.attribute('gradientTransform').value);
transform.applyToPoint(p1);
transform.applyToPoint(p2);
}

return ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
}
}
svg.Element.linearGradient.prototype = new svg.Element.GradientBase;

// radial gradient element
svg.Element.radialGradient = function(node) {
this.base = svg.Element.GradientBase;
this.base(node);

this.getGradient = function(ctx, element) {
var bb = element.getBoundingBox();

var cx = (this.gradientUnits == 'objectBoundingBox'
? bb.x() + bb.width() * this.attribute('cx').numValue()
: this.attribute('cx').Length.toPixels('x'));
var cy = (this.gradientUnits == 'objectBoundingBox'
? bb.y() + bb.height() * this.attribute('cy').numValue()
: this.attribute('cy').Length.toPixels('y'));

var fx = cx;
var fy = cy;
if (this.attribute('fx').hasValue()) {
fx = (this.gradientUnits == 'objectBoundingBox'
? bb.x() + bb.width() * this.attribute('fx').numValue()
: this.attribute('fx').Length.toPixels('x'));
}
if (this.attribute('fy').hasValue()) {
fy = (this.gradientUnits == 'objectBoundingBox'
? bb.y() + bb.height() * this.attribute('fy').numValue()
: this.attribute('fy').Length.toPixels('y'));
}

var r = (this.gradientUnits == 'objectBoundingBox'
? (bb.width() + bb.height()) / 2.0 * this.attribute('r').numValue()
: this.attribute('r').Length.toPixels());

var c = new svg.Point(cx, cy);
var f = new svg.Point(fx, fy);
if (this.attribute('gradientTransform').hasValue()) {
var transform = new svg.Transform(this.attribute('gradientTransform').value);
transform.applyToPoint(c);
transform.applyToPoint(f);

for (var i=0; i<transform.transforms.length; i++) {
// average the scaling part of the transform, apply to radius
var scale1 = transform.transforms[i].m[0];
var scale2 = transform.transforms[i].m[3];
r = r * ((scale1 + scale2) / 2.0);
}
}

return ctx.createRadialGradient(f.x, f.y, 0, c.x, c.y, r);
}
}
svg.Element.radialGradient.prototype = new svg.Element.GradientBase;

// gradient stop element
svg.Element.stop = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.offset = this.attribute('offset').numValue();

var stopColor = this.style('stop-color');
if (this.style('stop-opacity').hasValue()) stopColor = stopColor.Color.addOpacity(this.style('stop-opacity').value);
this.color = stopColor.value;
}
svg.Element.stop.prototype = new svg.Element.ElementBase;

// animation base element
svg.Element.AnimateBase = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

svg.Animations.push(this);

this.duration = 0.0;
this.begin = this.attribute('begin').Time.toMilliseconds();
this.maxDuration = this.begin + this.attribute('dur').Time.toMilliseconds();

this.getProperty = function() {
var attributeType = this.attribute('attributeType').value;
var attributeName = this.attribute('attributeName').value;

if (attributeType == 'CSS') {
return this.parent.style(attributeName, true);
}
return this.parent.attribute(attributeName, true);
};

this.initialValue = null;
this.removed = false;

this.calcValue = function() {
// OVERRIDE ME!
return '';
}

this.update = function(delta) {
// set initial value
if (this.initialValue == null) {
this.initialValue = this.getProperty().value;
}

// if we're past the end time
if (this.duration > this.maxDuration) {
// loop for indefinitely repeating animations
if (this.attribute('repeatCount').value == 'indefinite') {
this.duration = 0.0
}
else if (this.attribute('fill').valueOrDefault('remove') == 'remove' && !this.removed) {
this.removed = true;
this.getProperty().value = this.initialValue;
return true;
}
else {
return false; // no updates made
}
}
this.duration = this.duration + delta;

// if we're past the begin time
var updated = false;
if (this.begin < this.duration) {
var newValue = this.calcValue(); // tween

if (this.attribute('type').hasValue()) {
// for transform, etc.
var type = this.attribute('type').value;
newValue = type + '(' + newValue + ')';
}

this.getProperty().value = newValue;
updated = true;
}

return updated;
}

// fraction of duration we've covered
this.progress = function() {
return ((this.duration - this.begin) / (this.maxDuration - this.begin));
}
}
svg.Element.AnimateBase.prototype = new svg.Element.ElementBase;

// animate element
svg.Element.animate = function(node) {
this.base = svg.Element.AnimateBase;
this.base(node);

this.calcValue = function() {
var from = this.attribute('from').numValue();
var to = this.attribute('to').numValue();

// tween value linearly
return from + (to - from) * this.progress();
};
}
svg.Element.animate.prototype = new svg.Element.AnimateBase;

// animate color element
svg.Element.animateColor = function(node) {
this.base = svg.Element.AnimateBase;
this.base(node);

this.calcValue = function() {
var from = new RGBColor(this.attribute('from').value);
var to = new RGBColor(this.attribute('to').value);

if (from.ok && to.ok) {
// tween color linearly
var r = from.r + (to.r - from.r) * this.progress();
var g = from.g + (to.g - from.g) * this.progress();
var b = from.b + (to.b - from.b) * this.progress();
return 'rgb('+parseInt(r,10)+','+parseInt(g,10)+','+parseInt(b,10)+')';
}
return this.attribute('from').value;
};
}
svg.Element.animateColor.prototype = new svg.Element.AnimateBase;

// animate transform element
svg.Element.animateTransform = function(node) {
this.base = svg.Element.animate;
this.base(node);
}
svg.Element.animateTransform.prototype = new svg.Element.animate;

// font element
svg.Element.font = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.fontFace = null;
this.missingGlyph = null;
this.glyphs = [];
for (var i=0; i<this.children.length; i++) {
var child = this.children[i];
if (child.type == 'font-face') this.fontFace = child;
else if (child.type == 'missing-glyph') this.missingGlyph = child;
else if (child.type == 'glyph') this.glyphs[child.unicode] = child;
}
}
svg.Element.font.prototype = new svg.Element.ElementBase;

// font-face element
svg.Element.fontface = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.ascent = this.attribute('ascent').value;
this.descent = this.attribute('descent').value;
this.unitsPerEm = this.attribute('units-per-em').numValue();
}
svg.Element.fontface.prototype = new svg.Element.ElementBase;

// missing-glyph element
svg.Element.missingglyph = function(node) {
this.base = svg.Element.path;
this.base(node);

this.horizAdvX = 0;
}
svg.Element.missingglyph.prototype = new svg.Element.path;

// glyph element
svg.Element.glyph = function(node) {
this.base = svg.Element.path;
this.base(node);

this.horizAdvX = this.attribute('horiz-adv-x').numValue();
this.unicode = this.attribute('unicode').value;
}
svg.Element.glyph.prototype = new svg.Element.path;

// text element
svg.Element.text = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

if (node != null) {
// add children
this.children = [];
for (var i=0; i<node.childNodes.length; i++) {
var childNode = node.childNodes[i];
if (childNode.nodeType == 1) { // capture tspan and tref nodes
this.addChild(childNode, true);
}
else if (childNode.nodeType == 3) { // capture text
this.addChild(new svg.Element.tspan(childNode), false);
}
}
}

this.baseSetContext = this.setContext;
this.setContext = function(ctx) {
this.baseSetContext(ctx);
if (this.attribute('text-anchor').hasValue()) {
var textAnchor = this.attribute('text-anchor').value;
ctx.textAlign = textAnchor == 'middle' ? 'center' : textAnchor;
}
if (this.attribute('alignment-baseline').hasValue()) ctx.textBaseline = this.attribute('alignment-baseline').value;
}

this.renderChildren = function(ctx) {
var x = this.attribute('x').Length.toPixels('x');
var y = this.attribute('y').Length.toPixels('y');
for (var i=0; i<this.children.length; i++) {
var child = this.children[i];

if (child.attribute('x').hasValue()) {
child.x = child.attribute('x').Length.toPixels('x');
}
else {
if (child.attribute('dx').hasValue()) x += child.attribute('dx').Length.toPixels('x');
child.x = x;
x += child.measureText(ctx);
}

if (child.attribute('y').hasValue()) {
child.y = child.attribute('y').Length.toPixels('y');
}
else {
if (child.attribute('dy').hasValue()) y += child.attribute('dy').Length.toPixels('y');
child.y = y;
}

child.render(ctx);
}
}
}
svg.Element.text.prototype = new svg.Element.RenderedElementBase;

// text base
svg.Element.TextElementBase = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

this.renderChildren = function(ctx) {
var customFont = this.parent.style('font-family').Definition.getDefinition();
if (customFont != null) {
var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
var text = this.getText();

if (this.parent.attribute('text-anchor').value == 'middle') {
this.x = this.x - this.measureText(ctx) / 2.0;
}

for (var i=0; i<text.length; i++) {
var c = text[i];
var glyph = customFont.glyphs[c];
if (glyph == null) glyph = customFont.missingGlyph;

var scale = fontSize / customFont.fontFace.unitsPerEm;
ctx.translate(this.x, this.y);
ctx.scale(scale, -scale);
var lw = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;
glyph.render(ctx);
ctx.lineWidth = lw;
ctx.scale(1/scale, -1/scale);
ctx.translate(-this.x, -this.y);

this.x += fontSize * glyph.horizAdvX / customFont.fontFace.unitsPerEm;
}
return;
}

if (ctx.strokeStyle != '') ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
if (ctx.fillStyle != '') ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
}

this.getText = function() {
// OVERRIDE ME
}

this.measureText = function(ctx) {
var customFont = this.parent.style('font-family').Definition.getDefinition();
if (customFont != null) {
var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
var measure = 0;
var text = this.getText();
for (var i=0; i<text.length; i++) {
var c = text[i];
var glyph = customFont.glyphs[c];
if (glyph == null) glyph = customFont.missingGlyph;
measure += glyph.horizAdvX;
}
measure = fontSize * measure / customFont.fontFace.unitsPerEm;
return measure;
}

var textToMeasure = svg.compressSpaces(this.getText());
if (!ctx.measureText) return textToMeasure.length * 10;
return ctx.measureText(textToMeasure).width;
}
}
svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase;

// tspan
svg.Element.tspan = function(node) {
this.base = svg.Element.TextElementBase;
this.base(node);

//								 TEXT			  ELEMENT
this.text = node.nodeType == 3 ? node.nodeValue : node.childNodes[0].nodeValue;
this.getText = function() {
return this.text;
}
}
svg.Element.tspan.prototype = new svg.Element.TextElementBase;

// tref
svg.Element.tref = function(node) {
this.base = svg.Element.TextElementBase;
this.base(node);

this.getText = function() {
var element = this.attribute('xlink:href').Definition.getDefinition();
if (element != null) return element.children[0].getText();
}
}
svg.Element.tref.prototype = new svg.Element.TextElementBase;

// a element
svg.Element.a = function(node) {
this.base = svg.Element.TextElementBase;
this.base(node);

this.hasText = true;
for (var i=0; i<node.childNodes.length; i++) {
if (node.childNodes[i].nodeType != 3) this.hasText = false;
}

// this might contain text
this.text = this.hasText ? node.childNodes[0].nodeValue : '';
this.getText = function() {
return this.text;
}

this.baseRenderChildren = this.renderChildren;
this.renderChildren = function(ctx) {
if (this.hasText) {
// render as text element
this.baseRenderChildren(ctx);
var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.Length.toPixels('y'), this.x + this.measureText(ctx), this.y));
}
else {
// render as temporary group
var g = new svg.Element.g();
g.children = this.children;
g.parent = this;
g.render(ctx);
}
}

this.onclick = function() {
window.open(this.attribute('xlink:href').value);
}

this.onmousemove = function() {
svg.ctx.canvas.style.cursor = 'pointer';
}
}
svg.Element.a.prototype = new svg.Element.TextElementBase;

// image element
svg.Element.image = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

svg.Images.push(this);
this.img = document.createElement('img');
this.loaded = false;
var that = this;
this.img.onload = function() { that.loaded = true; }
this.img.src = this.attribute('xlink:href').value;

this.renderChildren = function(ctx) {
var x = this.attribute('x').Length.toPixels('x');
var y = this.attribute('y').Length.toPixels('y');

var width = this.attribute('width').Length.toPixels('x');
var height = this.attribute('height').Length.toPixels('y');
if (width == 0 || height == 0) return;

ctx.save();
ctx.translate(x, y);
svg.AspectRatio(ctx,
this.attribute('preserveAspectRatio').value,
width,
this.img.width,
height,
this.img.height,
0,
0);
try {
ctx.drawImage(this.img, 0, 0);
}catch(err) {
console.log('ctx.drawImage error');
}
ctx.restore();
}
}
svg.Element.image.prototype = new svg.Element.RenderedElementBase;

// group element
svg.Element.g = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

this.getBoundingBox = function() {
var bb = new svg.BoundingBox();
for (var i=0; i<this.children.length; i++) {
bb.addBoundingBox(this.children[i].getBoundingBox());
}
return bb;
};
}
svg.Element.g.prototype = new svg.Element.RenderedElementBase;

// symbol element
svg.Element.symbol = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

this.baseSetContext = this.setContext;
this.setContext = function(ctx) {
this.baseSetContext(ctx);

// viewbox
if (this.attribute('viewBox').hasValue()) {
var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
var minX = viewBox[0];
var minY = viewBox[1];
width = viewBox[2];
height = viewBox[3];

svg.AspectRatio(ctx,
this.attribute('preserveAspectRatio').value,
this.attribute('width').Length.toPixels('x'),
width,
this.attribute('height').Length.toPixels('y'),
height,
minX,
minY);

svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
}
}
}
svg.Element.symbol.prototype = new svg.Element.RenderedElementBase;

// style element
svg.Element.style = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

// text, or spaces then CDATA
if(node.childNodes.length <= 0) return;
var css = node.childNodes[0].nodeValue + (node.childNodes.length > 1 ? node.childNodes[1].nodeValue : '');
css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ''); // remove comments
css = svg.compressSpaces(css); // replace whitespace
var cssDefs = css.split('}');
for (var i=0; i<cssDefs.length; i++) {
if (svg.trim(cssDefs[i]) != '') {
var cssDef = cssDefs[i].split('{');
var cssClasses = cssDef[0].split(',');
var cssProps = cssDef[1].split(';');
for (var j=0; j<cssClasses.length; j++) {
var cssClass = svg.trim(cssClasses[j]);
if (cssClass != '') {
var props = {};
for (var k=0; k<cssProps.length; k++) {
var prop = cssProps[k].indexOf(':');
var name = cssProps[k].substr(0, prop);
var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);
if (name != null && value != null) {
props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
}
}
svg.Styles[cssClass] = props;
if (cssClass == '@font-face') {
var fontFamily = props['font-family'].value.replace(/"/g,'');
var srcs = props['src'].value.split(',');
for (var s=0; s<srcs.length; s++) {
if (srcs[s].indexOf('format("svg")') > 0) {
var urlStart = srcs[s].indexOf('url');
var urlEnd = srcs[s].indexOf(')', urlStart);
var url = srcs[s].substr(urlStart + 6, urlEnd - urlStart - 7);
var doc = svg.parseXml(svg.ajax(url));
var fonts = doc.getElementsByTagName('font');
for (var f=0; f<fonts.length; f++) {
var font = svg.CreateElement(fonts[f]);
svg.Definitions[fontFamily] = font;
}
}
}
}
}
}
}
}
}
svg.Element.style.prototype = new svg.Element.ElementBase;

// use element
svg.Element.use = function(node) {
this.base = svg.Element.RenderedElementBase;
this.base(node);

this.baseSetContext = this.setContext;
this.setContext = function(ctx) {
this.baseSetContext(ctx);
if (this.attribute('x').hasValue()) ctx.translate(this.attribute('x').Length.toPixels('x'), 0);
if (this.attribute('y').hasValue()) ctx.translate(0, this.attribute('y').Length.toPixels('y'));
}

this.getDefinition = function() {
var element = this.attribute('xlink:href').Definition.getDefinition();
if (this.attribute('width').hasValue()) element.attribute('width', true).value = this.attribute('width').value;
if (this.attribute('height').hasValue()) element.attribute('height', true).value = this.attribute('height').value;
return element;
}

this.path = function(ctx) {
var element = this.getDefinition();
if (element != null) element.path(ctx);
}

this.renderChildren = function(ctx) {
var element = this.getDefinition();
if (element != null) element.render(ctx);
}
}
svg.Element.use.prototype = new svg.Element.RenderedElementBase;

// clip element
svg.Element.clipPath = function(node) {
this.base = svg.Element.ElementBase;
this.base(node);

this.apply = function(ctx) {
for (var i=0; i<this.children.length; i++) {
if (this.children[i].path) {
this.children[i].path(ctx);
ctx.clip();
}
}
}
}
svg.Element.clipPath.prototype = new svg.Element.ElementBase;

// title element, do nothing
svg.Element.title = function(node) {
}
svg.Element.title.prototype = new svg.Element.ElementBase;

// desc element, do nothing
svg.Element.desc = function(node) {
}
svg.Element.desc.prototype = new svg.Element.ElementBase;

svg.Element.MISSING = function(node) {
console.log('ERROR: Element \'' + node.nodeName + '\' not yet implemented.');
}
svg.Element.MISSING.prototype = new svg.Element.ElementBase;

// element factory
svg.CreateElement = function(node) {
var className = node.nodeName.replace(/^[^:]+:/,''); // remove namespace
className = className.replace(/\-/g,''); // remove dashes
var e = null;
if (typeof(svg.Element[className]) != 'undefined') {
e = new svg.Element[className](node);
}
else {
e = new svg.Element.MISSING(node);
}

e.type = node.nodeName;
return e;
}

// load from url
svg.load = function(ctx, url) {
svg.loadXml(ctx, svg.ajax(url));
}

// load from xml
svg.loadXml = function(ctx, xml) {
svg.loadXmlDoc(ctx, svg.parseXml(xml));
}

svg.loadXmlDoc = function(ctx, dom) {
svg.init(ctx);

var mapXY = function(p) {
var e = ctx.canvas;
while (e) {
p.x -= e.offsetLeft;
p.y -= e.offsetTop;
e = e.offsetParent;
}
if (window.scrollX) p.x += window.scrollX;
if (window.scrollY) p.y += window.scrollY;
return p;
}

// bind mouse
if (svg.opts == null || svg.opts['ignoreMouse'] != true) {
ctx.canvas.onclick = function(e) {
var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
svg.Mouse.onclick(p.x, p.y);
};
ctx.canvas.onmousemove = function(e) {
var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
svg.Mouse.onmousemove(p.x, p.y);
};
}

var e = svg.CreateElement(dom.documentElement);
e.root = true;

// render loop
var isFirstRender = true;
svg.draw = function() {
svg.ViewPort.Clear();
svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);

if (svg.opts == null || svg.opts['ignoreDimensions'] != true) {
// set canvas size
if (e.style('width').hasValue()) {
if(e.style('width').Length.toPixels('x') != 0)
ctx.canvas.width = e.style('width').Length.toPixels('x');
ctx.canvas.style.width = ctx.canvas.width + 'px';
}
if (e.style('height').hasValue()) {
if(e.style('height').Length.toPixels('y') != 0)
ctx.canvas.height = e.style('height').Length.toPixels('y');
ctx.canvas.style.height = ctx.canvas.height + 'px';
}

/*
* svg style copy START
* by goodoi 10.04.12
*/
//if (e.style('position').hasValue()) {
//	ctx.canvas.style.position = e.style('position').value;
//}
//if (e.style('overflow').hasValue()) {
//	ctx.canvas.style.overflow = e.style('overflow').value;
//}
//if (e.style('top').hasValue()) {
//	ctx.canvas.style.top = e.style('top').value;
//}
//if (e.style('left').hasValue()) {
//	ctx.canvas.style.left = e.style('left').value;
//}
/*
* svg style copy END
* by goodoi 10.04.12
*/
}

var viewPortWidth = ctx.canvas.clientWidth;
if ( svg.opts['width'] ) {
viewPortWidth = svg.opts['width'];
}

var viewPortHeight = ctx.canvas.clientHeight;
if ( svg.opts['height'] ) {
viewPortHeight = svg.opts['height'];
}

svg.ViewPort.SetCurrent(viewPortWidth, viewPortHeight);

if (svg.opts != null && svg.opts['offsetX'] != null) e.attribute('x', true).value = svg.opts['offsetX'];
if (svg.opts != null && svg.opts['offsetY'] != null) e.attribute('y', true).value = svg.opts['offsetY'];
if (svg.opts != null && svg.opts['scaleWidth'] != null && svg.opts['scaleHeight'] != null) {
e.attribute('width', true).value = svg.opts['scaleWidth'];
e.attribute('height', true).value = svg.opts['scaleHeight'];
e.attribute('viewBox', true).value = '0 0 ' + viewPortWidth + ' ' + viewPortHeight;
e.attribute('preserveAspectRatio', true).value = 'none';
}

// clear and render
if (svg.opts == null || svg.opts['ignoreClear'] != true) {
ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
}
e.render(ctx);
if (isFirstRender) {
isFirstRender = false;
if (svg.opts != null && typeof(svg.opts['renderCallback']) == 'function') svg.opts['renderCallback']();
}
}
}

svg.Mouse = new (function() {
this.events = [];
this.hasEvents = function() { return this.events.length != 0; }

this.onclick = function(x, y) {
this.events.push({ type: 'onclick', x: x, y: y,
run: function(e) { if (e.onclick) e.onclick(); }
});
}

this.onmousemove = function(x, y) {
this.events.push({ type: 'onmousemove', x: x, y: y,
run: function(e) { if (e.onmousemove) e.onmousemove(); }
});
}

this.eventElements = [];

this.checkPath = function(element, ctx) {
for (var i=0; i<this.events.length; i++) {
var e = this.events[i];
if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) this.eventElements[i] = element;
}
}

this.checkBoundingBox = function(element, bb) {
for (var i=0; i<this.events.length; i++) {
var e = this.events[i];
if (bb.isPointInBox(e.x, e.y)) this.eventElements[i] = element;
}
}

this.runEvents = function() {
svg.ctx.canvas.style.cursor = '';

for (var i=0; i<this.events.length; i++) {
var e = this.events[i];
var element = this.eventElements[i];
while (element) {
e.run(element);
element = element.parent;
}
}

// done running, clear
this.events = [];
this.eventElements = [];
}
});

return svg;
}
})();

if (typeof(CanvasRenderingContext2D) != 'undefined' && CanvasRenderingContext2D) {
CanvasRenderingContext2D.prototype.drawSvg = function(s, dx, dy, dw, dh) {
canvg(this.canvas, s, {
ignoreMouse: true,
ignoreAnimation: true,
ignoreDimensions: true,
ignoreClear: true,
offsetX: dx,
offsetY: dy,
scaleWidth: dw,
scaleHeight: dh
});
}
}
/**
* A class to parse color values
* @author Stoyan Stefanov <sstoo@gmail.com>
* @link   http://www.phpied.com/rgb-color-parser-in-javascript/
* @license Use it if you like it
*/
function RGBColor(color_string)
{
this.ok = false;

// strip any leading #
if (color_string.charAt(0) == '#') { // remove # if any
color_string = color_string.substr(1,6);
}

color_string = color_string.replace(/ /g,'');
color_string = color_string.toLowerCase();

// before getting into regexps, try simple matches
// and overwrite the input
var simple_colors = {
aliceblue: 'f0f8ff',
antiquewhite: 'faebd7',
aqua: '00ffff',
aquamarine: '7fffd4',
azure: 'f0ffff',
beige: 'f5f5dc',
bisque: 'ffe4c4',
black: '000000',
blanchedalmond: 'ffebcd',
blue: '0000ff',
blueviolet: '8a2be2',
brown: 'a52a2a',
burlywood: 'deb887',
cadetblue: '5f9ea0',
chartreuse: '7fff00',
chocolate: 'd2691e',
coral: 'ff7f50',
cornflowerblue: '6495ed',
cornsilk: 'fff8dc',
crimson: 'dc143c',
cyan: '00ffff',
darkblue: '00008b',
darkcyan: '008b8b',
darkgoldenrod: 'b8860b',
darkgray: 'a9a9a9',
darkgreen: '006400',
darkkhaki: 'bdb76b',
darkmagenta: '8b008b',
darkolivegreen: '556b2f',
darkorange: 'ff8c00',
darkorchid: '9932cc',
darkred: '8b0000',
darksalmon: 'e9967a',
darkseagreen: '8fbc8f',
darkslateblue: '483d8b',
darkslategray: '2f4f4f',
darkturquoise: '00ced1',
darkviolet: '9400d3',
deeppink: 'ff1493',
deepskyblue: '00bfff',
dimgray: '696969',
dodgerblue: '1e90ff',
feldspar: 'd19275',
firebrick: 'b22222',
floralwhite: 'fffaf0',
forestgreen: '228b22',
fuchsia: 'ff00ff',
gainsboro: 'dcdcdc',
ghostwhite: 'f8f8ff',
gold: 'ffd700',
goldenrod: 'daa520',
gray: '808080',
green: '008000',
greenyellow: 'adff2f',
honeydew: 'f0fff0',
hotpink: 'ff69b4',
indianred : 'cd5c5c',
indigo : '4b0082',
ivory: 'fffff0',
khaki: 'f0e68c',
lavender: 'e6e6fa',
lavenderblush: 'fff0f5',
lawngreen: '7cfc00',
lemonchiffon: 'fffacd',
lightblue: 'add8e6',
lightcoral: 'f08080',
lightcyan: 'e0ffff',
lightgoldenrodyellow: 'fafad2',
lightgrey: 'd3d3d3',
lightgreen: '90ee90',
lightpink: 'ffb6c1',
lightsalmon: 'ffa07a',
lightseagreen: '20b2aa',
lightskyblue: '87cefa',
lightslateblue: '8470ff',
lightslategray: '778899',
lightsteelblue: 'b0c4de',
lightyellow: 'ffffe0',
lime: '00ff00',
limegreen: '32cd32',
linen: 'faf0e6',
magenta: 'ff00ff',
maroon: '800000',
mediumaquamarine: '66cdaa',
mediumblue: '0000cd',
mediumorchid: 'ba55d3',
mediumpurple: '9370d8',
mediumseagreen: '3cb371',
mediumslateblue: '7b68ee',
mediumspringgreen: '00fa9a',
mediumturquoise: '48d1cc',
mediumvioletred: 'c71585',
midnightblue: '191970',
mintcream: 'f5fffa',
mistyrose: 'ffe4e1',
moccasin: 'ffe4b5',
navajowhite: 'ffdead',
navy: '000080',
oldlace: 'fdf5e6',
olive: '808000',
olivedrab: '6b8e23',
orange: 'ffa500',
orangered: 'ff4500',
orchid: 'da70d6',
palegoldenrod: 'eee8aa',
palegreen: '98fb98',
paleturquoise: 'afeeee',
palevioletred: 'd87093',
papayawhip: 'ffefd5',
peachpuff: 'ffdab9',
peru: 'cd853f',
pink: 'ffc0cb',
plum: 'dda0dd',
powderblue: 'b0e0e6',
purple: '800080',
red: 'ff0000',
rosybrown: 'bc8f8f',
royalblue: '4169e1',
saddlebrown: '8b4513',
salmon: 'fa8072',
sandybrown: 'f4a460',
seagreen: '2e8b57',
seashell: 'fff5ee',
sienna: 'a0522d',
silver: 'c0c0c0',
skyblue: '87ceeb',
slateblue: '6a5acd',
slategray: '708090',
snow: 'fffafa',
springgreen: '00ff7f',
steelblue: '4682b4',
tan: 'd2b48c',
teal: '008080',
thistle: 'd8bfd8',
tomato: 'ff6347',
turquoise: '40e0d0',
violet: 'ee82ee',
violetred: 'd02090',
wheat: 'f5deb3',
white: 'ffffff',
whitesmoke: 'f5f5f5',
yellow: 'ffff00',
yellowgreen: '9acd32'
};
for (var key in simple_colors) {
if (color_string == key) {
color_string = simple_colors[key];
}
}
// emd of simple type-in colors

// array of color definition objects
var color_defs = [
{
re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
process: function (bits){
return [
parseInt(bits[1]),
parseInt(bits[2]),
parseInt(bits[3])
];
}
},
{
re: /^(\w{2})(\w{2})(\w{2})$/,
example: ['#00ff00', '336699'],
process: function (bits){
return [
parseInt(bits[1], 16),
parseInt(bits[2], 16),
parseInt(bits[3], 16)
];
}
},
{
re: /^(\w{1})(\w{1})(\w{1})$/,
example: ['#fb0', 'f0f'],
process: function (bits){
return [
parseInt(bits[1] + bits[1], 16),
parseInt(bits[2] + bits[2], 16),
parseInt(bits[3] + bits[3], 16)
];
}
}
];

// search through the definitions to find a match
for (var i = 0; i < color_defs.length; i++) {
var re = color_defs[i].re;
var processor = color_defs[i].process;
var bits = re.exec(color_string);
if (bits) {
channels = processor(bits);
this.r = channels[0];
this.g = channels[1];
this.b = channels[2];
this.ok = true;
}

}

// validate/cleanup values
this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

// some getters
this.toRGB = function () {
return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
}
this.toHex = function () {
var r = this.r.toString(16);
var g = this.g.toString(16);
var b = this.b.toString(16);
if (r.length == 1) r = '0' + r;
if (g.length == 1) g = '0' + g;
if (b.length == 1) b = '0' + b;
return '#' + r + g + b;
}

// help
this.getHelpXML = function () {

var examples = new Array();
// add regexps
for (var i = 0; i < color_defs.length; i++) {
var example = color_defs[i].example;
for (var j = 0; j < example.length; j++) {
examples[examples.length] = example[j];
}
}
// add type-in colors
for (var sc in simple_colors) {
examples[examples.length] = sc;
}

var xml = document.createElement('ul');
xml.setAttribute('id', 'rgbcolor-examples');
for (var i = 0; i < examples.length; i++) {
try {
var list_item = document.createElement('li');
var list_color = new RGBColor(examples[i]);
var example_div = document.createElement('div');
example_div.style.cssText =
'margin: 3px; '
+ 'border: 1px solid black; '
+ 'background:' + list_color.toHex() + '; '
+ 'color:' + list_color.toHex()
;
example_div.appendChild(document.createTextNode('test'));
var list_item_value = document.createTextNode(
' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
);
list_item.appendChild(example_div);
list_item.appendChild(list_item_value);
xml.appendChild(list_item);

} catch(e){}
}
return xml;

}

}

var BROWSER = {
PC : {
isIE : function() {
return ( !BROWSER.isMobile() && navigator.appName == 'Microsoft Internet Explorer');
},

isFirefox : function() {
return ( !BROWSER.isMobile() && navigator.userAgent.indexOf('Firefox') > -1 );
},

isChrome : function() {
return ( !BROWSER.isMobile() && navigator.userAgent.indexOf('Chrome') > -1 );
},

isSafari : function() {
return ( !BROWSER.isMobile() && navigator.userAgent.indexOf('Safari') > -1 );
},

isOpera : function() {
return ( !BROWSER.isMobile() && navigator.userAgent.indexOf('Opera') > -1 );
}
},

MOBILE : {
isAndroid : function() {
return ( navigator.userAgent.indexOf('Android') > -1 );
},

isIOS : function() {
return ( navigator.userAgent.indexOf('iPad') > -1 ) || ( navigator.userAgent.indexOf('iPhone') > -1 ) || ( navigator.userAgent.indexOf('iPod') > -1 );
},

isWindowMobile : function() {
return ( navigator.userAgent.indexOf('IEMobile') > -1 );
}
},

isMobile : function() {
return BROWSER.MOBILE.isAndroid() || BROWSER.MOBILE.isIOS() || BROWSER.MOBILE.isWindowMobile();
},

VERSION : {
firefox : function() {
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Firefox/') + 8;
var versionStr = ua.substr(versionIdx);
versionStr = versionStr.substr(0, versionStr.indexOf('.'));
try {
return parseInt(versionStr);
} catch (e) {
// nothing
}
return 0;
},
IE : function() {
var ua = navigator.userAgent;
// find Trident Engine Version
var engineIdx = ua.indexOf('Trident/') + 8;
var engineVerStr = ua.substr(engineIdx);
engineVerStr = engineVerStr.substr(0, engineVerStr.indexOf('.'));
try {
var engineNum = parseInt(engineVerStr);
if(engineNum==7) { return 11;
} else if(engineNum==6) { return 10;
} else if(engineNum==5) { return 9;
} else if(engineNum==4) { return 8;
} else if(engineNum==3) { return 7; }
} catch (e) {
// maybe IE-6
}

// find MSIE compatible
var versionIdx = ua.indexOf('MSIE ') + 5;
var versionStr = ua.substr(versionIdx);
versionStr = versionStr.substr(0, versionStr.indexOf('.'));
try {
return parseInt(versionStr);
} catch (e) {
// nothing
}
return 0;
},
android : function() {
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Android ') + 8;
var versionStr = ua.substr(versionIdx, 1);
try {
return parseInt(versionStr);
} catch (e) {
// nothing
}
return 0;
},
IOS : function() {
var ua = navigator.userAgent;
//var versionIdx = ua.indexOf('CPU OS ') + 7;
var versionIdx = ua.indexOf('OS ') + 3;
var versionStr = ua.substr(versionIdx, 1);
try {
return parseInt(versionStr);
} catch (e) {
// nothing
}
return 0;
},
isAndroidICS : function() {
if (BROWSER.MOBILE.isAndroid()){
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Android ') + 8;
var versionStr = ua.substr(versionIdx, 3);
if (versionStr =='4.0'){
return true;
}
}
return false;
},
isAndroidJellyBean : function() {
if (BROWSER.MOBILE.isAndroid()){
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Android ') + 8;
var versionStr = ua.substr(versionIdx, 3);
if (versionStr =='4.1' || versionStr =='4.2' || versionStr =='4.3'){
return true;
}
}
return false;
}
},

GRAPHIC : {
isDrawCanvas : function() {
return (BROWSER.PC.isFirefox() && BROWSER.VERSION.firefox() < 4) // FF v3.0 less
|| (BROWSER.MOBILE.isAndroid() && BROWSER.VERSION.android() < 3) // android v2.0 less
|| (BROWSER.MOBILE.isIOS() && BROWSER.VERSION.IOS() < 5); // IOS v4.0 less
},

isDrawSVG : function() {
return BROWSER.PC.isSafari() // safari
|| BROWSER.PC.isChrome() // chrome
|| BROWSER.PC.isOpera() // opera
|| (BROWSER.PC.isFirefox() && 4 <= BROWSER.VERSION.firefox()) // FF v4.0 higher
|| (BROWSER.MOBILE.isIOS() && 5 <= BROWSER.VERSION.IOS()) // IOS v5.0 higher
|| BROWSER.MOBILE.isWindowMobile() // window mobile
|| (BROWSER.MOBILE.isAndroid() && 3 <= BROWSER.VERSION.android()); // android v3.0 higher
},

isIScrollUse : function() {
if (BROWSER.MOBILE.isAndroid())
{
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Android ') + 8;
var versionStr = ua.substr(versionIdx, 3);
try {
var ver = parseFloat(versionStr);
if(ver <= '4.0'){
return 1;
}
} catch (e) {
// nothing
}
}
return 0;
},
isHeaderAbsoluteUse : function() {
if (BROWSER.MOBILE.isAndroid())
{
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Android ') + 8;
var versionStr = ua.substr(versionIdx, 3);
try {
var ver = parseFloat(versionStr);
if(ver == '4.0' || ver >= '4.2'){
return 1;
}
} catch (e) {
// nothing
}
}
return 0;
},

isHeaderFixedUse : function() {
if (BROWSER.MOBILE.isAndroid())
{
var ua = navigator.userAgent;
var versionIdx = ua.indexOf('Android ') + 8;
var versionStr = ua.substr(versionIdx, 3);
try {
var ver = parseFloat(versionStr);
if(ver == '4.1'){
return 1;
}
} catch (e) {
// nothing
}
}
return 0;
},
isDrawVML : function() {
return BROWSER.PC.isIE();
}
},

adjustXhtml : function() {
return !(BROWSER.PC.isIE() && BROWSER.VERSION.IE()<10);
},

adjustHtml : function() {
return !BROWSER.adjustXhtml();
}
}
var isSvgFile = function(fileName) {
if (fileName != null) {
var lastIndex = fileName.lastIndexOf('.');
if(fileName.substr(lastIndex+1) == 'svg') {
return true;
}
}

return false;
}
var safariBlipFill2Image = function() {
$('[class~=HasBlipFill]').hide();
$('[class~=SafariBlipFillImage]').show();
}
var androidBlipFill2Image = function() {
//$('[class~=HasBlipFill]').hide();
//$('[class~=AndroidBlipFillImage]').show();
var fillList = $('[class~=HasBlipFill]');
var fillLen = fillList.length;
for (var i=0; i<fillLen; i++) {
fillList[i].setAttribute('style', 'display:none');
}

var imgList = $('[class~=AndroidBlipFillImage]');
var imgLen = imgList.length;
for (var i=0; i<imgLen; i++) {
var styleAttr = imgList[i].getAttribute('style');
styleAttr = styleAttr.replace('display:none', '');
imgList[i].setAttribute('style', styleAttr);
}
}

var onesvg2canvas = function(canvasObj, svgParentId) {

this.svg2canvas = function(index, svgObj) {
if ( !svgObj ) {
return;
}

var opts = {}
opts['ignoreMouse'] = true;
opts['ignoreAnimation'] = true;
opts['ignoreClear'] = true;
opts['ignoreDimensions'] = true;

var svgData = null;

if(svgObj.nodeName.toUpperCase() == 'OBJECT') {
svgData = svgObj.data;
opts['width'] = $(svgObj).width();
opts['height'] = $(svgObj).height();
opts['offsetX'] = $(svgObj).offset().left - $(canvasObj).offset().left;
opts['offsetY'] = $(svgObj).offset().top - $(canvasObj).offset().top;
if ( !isSvgFile(svgData) ) return;
} else if(svgObj.nodeName.toUpperCase() == 'IMG') {
svgData = svgObj.src;
opts['width'] = $(svgObj).width();
opts['height'] = $(svgObj).height();
opts['offsetX'] = $(svgObj).offset().left - $(canvasObj).offset().left;
opts['offsetY'] = $(svgObj).offset().top - $(canvasObj).offset().top;
if ( !isSvgFile(svgData) ) return;
}

if ( svgData == null ) {
svgData = $.trim(svgParentObj.innerHTML);
}
/*svgParentObj.removeChild(svgObj);*/
$(svgObj).css('display', 'none');

var canvasSvg = canvg(canvasObj, svgData, opts);
canvasSvg.draw();
}

var svgParentObj = document.getElementById(svgParentId);
if ( !svgParentObj ) {
return;
}

var svgObjs = $(svgParentObj).children();
svgObjs.each(this.svg2canvas);
}
var allsvg2canvas = function(drawAreaId) {
if( BROWSER.GRAPHIC.isDrawVML() ) {
document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
var v_css = document.createElement('style');
v_css.setAttribute('type', 'text/css');
v_css.styleSheet.cssText = 'v\:shape,v\:fill,v\:stroke,v\:line,v\:path,v\:textpath,v\:group,v\:image,v\:rect,v\:imagedata { behavior: url(#default#VML);display:inline-block; }';
document.getElementsByTagName('head')[0].appendChild(v_css);
}

var allSvgs = [];
this.allImagesLoaded = function() {
for (var i=0; i<allSvgs.length; i++) {
if (!allSvgs[i].ImagesLoaded()) return false;
}
return true;
}

var svgObjs = $('[class~=svg]');

var drawArea = document.getElementById(drawAreaId);

if ( drawArea ) {
var c = document.createElement('canvas');
if( BROWSER.GRAPHIC.isDrawVML() ) G_vmlCanvasManager.initElement(c);
c.width = $(drawArea).width();
c.style.width = c.width
c.height = $(drawArea).height() + 30;
c.style.height = c.height;
c.style.top = 0;
c.style.left = 0;
/*if (drawAreaId == 'slide') {
c.width = drawArea.clientWidth * 3;
c.height = drawArea.clientHeight * 3;
c.style.left = (drawArea.clientWidth * -1) + 'px';
c.style.top = (drawArea.clientHeight * -1) + 'px';
}*/
c.style.position = 'absolute';

drawArea.insertBefore(c, drawArea.firstChild);
var len = svgObjs.length;
for (var i=0; i < len; i++) {
var svgObj = svgObjs[i];
if ( BROWSER.GRAPHIC.isDrawVML() ) {
if ($(svgObj).attr('class').indexOf('noIE') > -1) {
continue;
}
}
if (!svgObj) {
break;
}

var offsetX = $(svgObj).offset().left;
var offsetY = $(svgObj).offset().top;
var opts = {}
opts['ignoreMouse'] = true;
opts['ignoreAnimation'] = true;
opts['ignoreClear'] = true;
opts['ignoreDimensions'] = true;
opts['offsetX'] = offsetX;
opts['offsetY'] = offsetY;
//opts['scaleWidth'] = c.width;
//opts['scaleHeight'] = c.height;

var svgData = null;

if(svgObj.nodeName.toUpperCase() == 'OBJECT') {
svgData = svgObj.data;
opts['width'] = $(svgObj).width();
opts['height'] = $(svgObj).height();
if ( !isSvgFile(svgData) ) continue;
} else if(svgObj.nodeName.toUpperCase() == 'IMG') {
svgData = svgObj.src;
opts['width'] = $(svgObj).width();
opts['height'] = $(svgObj).height();
if ( !isSvgFile(svgData) ) continue;
}

svgObj.parentNode.removeChild(svgObj);
if ( svgData == null ) {
var div = document.createElement('div');
div.appendChild(svgObj);
svgData = $.trim(div.innerHTML);
}

var canvasSvg = canvg(c, svgData, opts);
allSvgs.push(canvasSvg);
}

this.intervalID = setInterval(function() {
var needUpdate = false;

if (allImagesLoaded()) {
needUpdate = true;
}

// render if needed
if (needUpdate) {
for (var i=0; i<allSvgs.length; i++) {
allSvgs[i].draw();
}
clearInterval(this.intervalID);
return;
}
}, 50);
}
}





var svg2canvg = function(img, forceFlag) {
if( (forceFlag==null || forceFlag==false) && !BROWSER.GRAPHIC.isDrawCanvas() ) return;
if(img == null) return;

var url = null;
if(img.nodeName.toUpperCase() == 'OBJECT') url = img.data;
else if(img.nodeName.toUpperCase() == 'IMG') url = img.src;
if(url == null) return;

if (!isSvgFile(url)) return;

var imgObj = $(img);
var c = document.createElement('canvas');
if( BROWSER.GRAPHIC.isDrawVML() ) G_vmlCanvasManager.initElement(c);
var imgWidth = imgObj.width();
var imgHeight = imgObj.height();
c.width = imgWidth;
c.height = imgHeight;

var opts = {};
opts['ignoreMouse'] = true;
opts['ignoreAnimation'] = true;
opts['ignoreClear'] = true;
opts['ignoreDimensions'] = true;
opts['width'] = imgWidth;
opts['height'] = imgHeight;

$(c).insertBefore(imgObj);
imgObj.remove();

var svgObj = canvg(c, url, opts);
svgObj.draw();
}

var img2vml = function(img) {
if( !BROWSER.GRAPHIC.isDrawVML() ) return;
if(img == null) return;

var lastIndex = img.src.lastIndexOf('.');
if(img.src.substr(lastIndex+1) != 'svg') return;

var v = document.createElement('v:rect');
img.parentNode.insertBefore(v, img);
v.style.width = img.width;
v.style.height = img.height;
v.style.top = img.offsetTop;
v.style.left = img.offsetLeft;
v.style.position = 'relative';
v.stroked = false;
var imageData = document.createElement('v:imagedata');
imageData.setAttribute('src', img.src.substr(0, lastIndex));
v.appendChild(imageData);
img.parentNode.replaceChild(v, img);
}
var img2object = function(img) {
var $img = $(img);
var src = $img.attr('src');
var $object = $('<object>');
$object.width($img.width())
.height($img.height())
.attr('data', $img.attr('src'))
.attr('style', $img.attr('style'))
.attr('type', 'image/svg+xml');
$img.replaceWith($object);
}

var objsvg2canvas = function() {
var svgObjs = $('object[class~=svg]');
var len = svgObjs.length;

for(var i=0; i<len; i++) {
svg2canvg(svgObjs[i], true);
}
}
var deferLoadImage = function(initFlag) {
if( BROWSER.GRAPHIC.isDrawVML() ) {
document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
var v_css = document.createElement('style');
v_css.setAttribute('type', 'text/css');
v_css.styleSheet.cssText = 'v\\:shape,v\\:fill,v\\:stroke,v\\:line,v\\:path,v\\:textpath,v\\:group,v\\:image,v\\:rect,v\\:imagedata { behavior: url(#default#VML);display:inline-block; }';
document.getElementsByTagName('head')[0].appendChild(v_css);
}
var imgTags = document.getElementsByTagName('img');
var len = imgTags.length;
var top, viewHeight;

if(initFlag==true) top = 0;
else top = document.documentElement.scrollTop || document.body.scrollTop;

if(self.innerHeight) {
viewHeight = self.innerHeight;
} else if(document.documentElement && document.documentElement.clientHeight) {
viewHeight = document.documentElement.clientHeight;
} else if(document.body) {
viewHeight = document.body.clientHeight;
}

var curIdx = 0;
for(var i=0; i<len; i++) {
if(top <= imgTags[curIdx].offsetTop && imgTags[curIdx].offsetTop <= top + viewHeight) {
if( BROWSER.GRAPHIC.isDrawVML() ) {
var lastIndex = imgTags[curIdx].src.lastIndexOf('.');
if(imgTags[curIdx].src.substr(lastIndex+1)=='svg') {
img2vml(imgTags[curIdx]);
curIdx--;
}
} else if ( BROWSER.GRAPHIC.isDrawSVG() ) {
var lastIndex = imgTags[curIdx].src.lastIndexOf('.');
if(imgTags[curIdx].src.substr(lastIndex+1)=='svg') {
img2object(imgTags[curIdx]);
curIdx--;
}
} else if ( BROWSER.GRAPHIC.isDrawCanvas() ) {
svg2canvg(imgTags[curIdx]);
curIdx--;
}
}
curIdx++;
}
// chart
if( BROWSER.GRAPHIC.isDrawCanvas() ) {
var obejctTags = document.getElementsByTagName('object');
len = obejctTags.length;

for(var i=0; i<len; i++) {
svg2canvg(obejctTags[0], true);
}
}
}
var loadWebView = function(param){
if( BROWSER.MOBILE.isIOS() ) {
window.setTimeout(function () {
document.location = 'iosBridge:loadWebView:'+param;
}, 50);
}
}

function showHiddenImage() {
if ( !BROWSER.GRAPHIC.isDrawCanvas() ) {
$('.hiddenImage').each(function() {
$(this).css('visibility', 'visible');
});
}
}
if(!window.console) {
window.console = {};
window.console.log = function(str) {};
window.console.dir = function(str) {};
}

if(!Array.indexOf){
Array.prototype.indexOf = function(obj){
for(var i=0; i<this.length; i++){
if(this[i]==obj){
return i;
}
}
return -1;
}
}

var DrawPage = function(imgSrcArr, drawCanvasFunc) {
this.imgSrcList = [];
this.imgLoadedList = [];
this.imgSrcArr = imgSrcArr;
this.imgLoadComplete = false;
this.drawCanvasFunc = drawCanvasFunc;

this.getImageElementBySrc = function(imgSrc) {
for (var i=0; i<this.imgLoadedList.length; i++) {
if(this.imgLoadedList[i].orgsrc == imgSrc) {
return this.imgLoadedList[i];
}
}

return new Image();
}

this.draw = function(canvasId, drawCanvasFunc) {
if (this.imgLoadComplete || this.imgSrcArr.length == 0) {
this.drawCanvasFunc(canvasId);
} else {
for(var i = 0; i < this.imgSrcArr.length; i++){
var img = new Image();
img.onload = function(){ this.state = 'load'; };
img.onerror = function(){this.state = 'load'; };

img.state = 'ready';
img.src = this.imgSrcArr[i];
img.orgsrc = this.imgSrcArr[i];

this.imgLoadedList.push(img);
}

var that = this;
var intervalId = setInterval(function() {
for(var i = 0; i < that.imgLoadedList.length; i++){
if(that.imgLoadedList[i].state != 'load'){
return;
}
}

clearInterval(intervalId);
that.imgLoadComplete = true;
that.drawCanvasFunc(canvasId);
}, 50);
}
};

this.clear = function(canvasId) {
var canvas = document.getElementById(canvasId);
var ctx = document.getElementById(canvasId).getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
}
}

var APowerPoint = function(drawSlideObjectList, opts, id, element) {
this.drawSlideObjectList = drawSlideObjectList;
this.slideCnt = this.drawSlideObjectList.length - 1;
this.opts = function(opts) {
if (!opts) {
opts = {};
}

if (!opts['width']) {
opts['width'] = 800;
}
if (!opts['height']) {
opts['height'] = 600;
}
if (!opts['abovePageCnt']) {
opts['abovePageCnt'] = 5;
}
if (!opts['underPageCnt']) {
opts['underPageCnt'] = 5;
}

return opts;
}(opts);

if (id) {
this.id = id;
} else {
this.id = 'powerpoint';
}

this.viewPageNumber = 1;
if (element) {
this.element = element;
} else {
this.element = $(document);
}
this.canvasCnt = Math.min((opts['abovePageCnt'] + opts['underPageCnt'] + 1), this.slideCnt);
this.canvasManager = null;
this.aSlides = [];



this.load = function(callback) {
this.createSlides(this.opts['width'], this.opts['height']);
this.canvasManager = new CanvasManager(this.aSlides);
this.createCanvases(this.opts['width'], this.opts['height']);

var that = this;

this.onscrollstop = function(e) {
var doc = $(this);
var scrollTop = doc.scrollTop();
if (typeof e == "number") {
scrollTop = e;
}

var viewPageTopPos = scrollTop + opts['height'];/*+ ($(window).height() / 2)*/;
var newViewPageNumber = parseInt(viewPageTopPos / opts['height']) + 1;

var isPageMove = (newViewPageNumber != that.viewPageNumber);
if (isPageMove) {
that.viewPageNumber = newViewPageNumber;
var pageIndexes = that.getPageIndexes(that.viewPageNumber);
that.canvasManager.drawCanvases(pageIndexes['s'], pageIndexes['e']);
}
};

this.element.bind('scrollstop', this.onscrollstop);

callback();
}

this.createSlides = function(w, h) {
for (var i=0; i<this.slideCnt; i++) {
var aSlide = new ASlide($('#' + this.id), i+1, w, h, this.drawSlideObjectList[(i+1)]);
this.aSlides.push(aSlide);
}
}

this.createCanvases = function(w, h) {
for (var i=0; i<this.canvasCnt; i++) {
var aCanvas = this.canvasManager.createCanvas(w, h);
this.aSlides[i].appendACanvas(aCanvas);
this.aSlides[i].drawCanvas();
}
}

this.getPageIndexes = function(pageNumber) {
var startPageIdx = Math.max(pageNumber - this.opts['abovePageCnt'] - 1, 0);
var endPageIdx = Math.min(pageNumber + this.opts['underPageCnt'], this.slideCnt);
endPageIdx = Math.max(endPageIdx, this.canvasCnt);
startPageIdx = Math.min(startPageIdx, (endPageIdx - this.canvasCnt));

return {'s' : startPageIdx, 'e' : endPageIdx};
}
}

var ACanvasUseInfo = function() {
this.canvasUseInfoMap = {};

this.init = function() {
var that = this;
$.each(this.canvasUseInfoMap, function(key, value) {
that.canvasUseInfoMap[key] = false;
});
}

this.setUse = function(canvasId, isUse) {
this.canvasUseInfoMap[canvasId] = isUse;
}

this.isUse = function(canvasId) {
return this.canvasUseInfoMap[canvasId];
}

this.getNotUseCanvasIds = function() {
var canvasIds = [];
var that = this;
$.each(this.canvasUseInfoMap, function(key, value) {
if (!that.isUse(key)) {
canvasIds.push(key);
}
});
return canvasIds;
}

this.length = function() {
var len = 0;
$.each(this.canvasUseInfoMap, function(key, value) {
len++;
});

return len;
}
}

var ASlide = function(parentElem, pageNum, width, height, drawSlideObject) {
this.drawSlideObject = drawSlideObject;
this.pageNum = pageNum;
this.width = width;
this.height = height;
this.id = 'aSlide_' + (this.pageNum);
this.aCanvas = null;
this.slideDiv = null;
this.loadingImageDiv = $('<div style="width:100%; height:100%; text-align:center;"><div style="font-size:30pt; margin: 30% auto auto; color:#A9A9A9;">Loading...</div></div>');

this.init = function() {
this.element = $('<div></div>');
this.element.attr('id', this.id);
this.element.addClass('aSlide');
this.element.css('width', this.width + 'px');
this.element.css('height', this.height + 'px');
this.element.append(this.loadingImageDiv);
parentElem.append(this.element);
}

this.getTop = function() {
return this.element.position().top;
}

this.getLeft = function() {
return this.element.position().left;
}

this.appendACanvas = function(aCanvas) {
this.aCanvas = aCanvas;
this.aCanvas.parentSlide = this;
this.element.children().first().before(aCanvas.element);
}

this.removeACanvas = function() {
// aCanvas.clear();
this.drawSlideObject.clear(this.aCanvas.id);
this.aCanvas.parentSlide = null;
this.aCanvas = null;
this.hideTextHtml();
this.loadingImageDiv.show();
}


this.drawCanvas = function() {
if (this.aCanvas) {
// this.aCanvas.clear();
this.showTextHtml(pageNum);
this.drawSlideObject.clear(this.aCanvas.id);
this.drawSlideObject.draw(this.aCanvas.id);
this.loadingImageDiv.hide();
}
}

this.showTextHtml = function(pageNum) {
if (this.drawSlideObject.getHTML) {
if (this.slideDiv) {
this.slideDiv.show();
} else {
this.slideDiv = $('<div id="slide" class="slide" style="border:0px none; background-color:#FFFFFF; left:0px; top:0px; width:100%; height:100%; font-size:8.3pt"></div>');
var html = this.drawSlideObject.getHTML();
this.slideDiv.append(html);
this.element.append(this.slideDiv);
}
}
}

this.hideTextHtml = function() {
this.slideDiv.hide();
}

this.init();
}

var ACanvas = function(id, width, height) {
this.id = id;
this.width = width;
this.height = height;
this.parentSlide = null;


this.init = function() {
this.element = $('<canvas></canvas>');
this.element.attr('id', this.id);
this.element.addClass('aCanvas');
this.element.attr('width', this.width);
this.element.attr('height', this.height);
}

this.init();
}

var CanvasManager = function(aSlides) {
this.aSlides = aSlides;
this.aCanvasUseInfo = new ACanvasUseInfo();
this.aCanvasIdMap = {};
this.aCanvasCnt = 0;

this.createCanvas = function(w, h) {
this.aCanvasCnt++;
var canvasId = 'aCanvas_' + this.aCanvasCnt;
this.aCanvasUseInfo.setUse(canvasId, true);

var aCanvas = new ACanvas(canvasId, w, h);
this.aCanvasIdMap[canvasId] = aCanvas;
return aCanvas;
}

this.getACanvas = function(canvasId) {
return this.aCanvasIdMap[canvasId];
}

this.drawCanvases = function(startPageIndex, endPageIndex) {
this.aCanvasUseInfo.init();

var noDrawASlides = this.getNoDrawASlide(startPageIndex, endPageIndex);
var notUseCanvasIds = this.aCanvasUseInfo.getNotUseCanvasIds();

var that = this;
$(notUseCanvasIds).each(function(index, canvasId) {
var aCanvas = that.getACanvas(canvasId);
var parentSlide = aCanvas.parentSlide;
if (parentSlide) {
parentSlide.removeACanvas();
}

var drawASlide = noDrawASlides[index];
if (drawASlide) {
drawASlide.appendACanvas(aCanvas);
drawASlide.drawCanvas();
}
});
}

this.getNoDrawASlide = function(startPageIdx, endPageIdx) {
var noDrawASlides = [];
for (var i=startPageIdx; i<endPageIdx; i++) {
var aCanvas = this.aSlides[i].aCanvas;
if (aCanvas) {
var canvasId = aCanvas.id;

this.aCanvasUseInfo.setUse(canvasId, true);
} else {
noDrawASlides.push(this.aSlides[i]);
}
}

return noDrawASlides;
}
}
String.prototype.endsWith = function(str)
{return (this.match(str+"$")==str)}

var APPTPageLoader = function(htmlPath, filesDirPath, width, height, containerId, containerWrapId) {
this.htmlPath = htmlPath;
this.filesDirPath = filesDirPath;
if (containerWrapId == undefined) {
containerWrap = undefined;
} else {
containerWrap = $('#' + containerWrapId);
}
this.aPowerPoint = new APowerPoint(DRAW_SLIDE_OBJECT_LIST, {'abovePageCnt':2, 'underPageCnt':2, 'width':width, 'height':height}, containerId, containerWrap);

this.slideLoadedList = [true];

this.init = function() {

var len = this.aPowerPoint.drawSlideObjectList.length;
for (var i=1; i<len; i++) {
this.slideLoadedList.push(false);
}

var that = this;
$.get(this.htmlPath, function(html) {

$(html).find('div[id^="slide_"].slide').each(function(index) {
var slideHtml = $(this).html();
var pageNum = (index + 1);

if (that.aPowerPoint.drawSlideObjectList[pageNum]) {
that.aPowerPoint.drawSlideObjectList[pageNum].getHTML = function() {
return slideHtml;
}
that.slideLoadedList[pageNum] = true;
}
});
});
}

this.loadPowerPoint = function(callBack) {
var that = this;

var intervalId = setInterval(function() {
for (var i=1; i<that.slideLoadedList.length; i++) {
if (!that.slideLoadedList[i]) {
return;
}
}

clearInterval(intervalId);
that.aPowerPoint.load(callBack);
}, 50);
}

this.init();
}
function getOuterWidth() {
var w;
if (BROWSER.MOBILE.isAndroid()){
w = screen.width;
}else{
w = window.outerWidth;
}
return w;
}

function getInnerHeight() {
var h;
if (BROWSER.MOBILE.isAndroid()){
h = screen.height;
}else{
h = window.innerHeight;
}
return h;
}

function getInnerWidth() {
var w;
if (BROWSER.MOBILE.isAndroid()){
w = screen.width;
}else{
w = window.innerWidth;
}
return w;
}

function getViewWidth() {
var viewWidth;
if (BROWSER.MOBILE.isAndroid()){
viewWidth = screen.width;
}else{
viewWidth = window.innerWidth;
}
return viewWidth;
}
function getViewHeight() {
var viewHeight;
if (BROWSER.MOBILE.isAndroid()){
viewHeight = screen.height;
}else{
viewHeight = window.innerHeight;
}
return viewHeight;
}

// Loading Chart Funtion
//var isIPAD = (navigator.userAgent.match('iPad') != null);
//var isIPHONE = (navigator.userAgent.match('iPhone') != null || navigator.userAgent.match('iPod') != null);

var browser_height;
var IntervalID;
window.onload = function() {
browser_height = getInnerHeight();
if (browser_height == undefined) {
browser_height = screen.height;
}

if (BROWSER.MOBILE.isIOS()) {
browser_height *= 1.5; // iOS 일 경우 scale 문제로 1.5배 적용
}

if( typeof init == 'function' ) {
init();
if (( typeof chart_startIdx !== 'undefined' ) && ( typeof chart_endIdx !== 'undefined' )) {

}
}
}

function interval_chart() {
i = chart_startIdx;
var chart_id = "chart"+i
var chart_obj = document.getElementById(chart_id);
if (chart_obj != undefined) {
var url = chart_id + '.xml.svg';
if(chart_svgPath!="") {
url = chart_svgPath + '/' + url;
}

var chart_top    = chart_obj.offsetTop;
var chart_width  = chart_obj.offsetWidth;
var chart_height = chart_obj.offsetHeight;

dynamic_loding_chart(chart_obj, chart_width, chart_height, url);
}

chart_startIdx += 1;
if (chart_startIdx > chart_endIdx) {
window.clearInterval(IntervalID);
}
}

function scrolling_chart()
{
var now_scroll = 0;
if (BROWSER.VERSION.isAndroidJellyBean()) {
now_scroll = $(document).scrollTop();
} else if (BROWSER.isMobile()) {
now_scroll = $(parent.parent.document).scrollTop();
} else {
now_scroll = $(document).scrollTop();
}

for(var i=chart_startIdx; i<=chart_endIdx; i++) {
var chart_id = "chart"+i
var chart_obj = document.getElementById(chart_id);
if (chart_obj != undefined) {
var url = chart_id + '.xml.svg';
if(chart_svgPath!="") {
url = chart_svgPath + '/' + url;
}

var chart_top    = chart_obj.offsetTop;
var chart_width  = chart_obj.offsetWidth;
var chart_height = chart_obj.offsetHeight;

if (chart_top > now_scroll - browser_height && chart_top < now_scroll + browser_height) {
dynamic_loding_chart(chart_obj, chart_width, chart_height, url);
}
}
}

if($('.synap_loading_chart').size() == 0) {
window.clearInterval(IntervalID);
}

}

function dynamic_loding_chart(chart_obj, width, height, url)
{
// 차트 동적 로딩 IE object 태그 제거
if ($(chart_obj).attr('class') == "synap_loading_chart") {
if (BROWSER.adjustHtml()) {
url = url + ".vml.html";

chart_obj.innerHTML = "<iframe width='"+(width+1)+"px' height='"+(height+1)+"px' align='middle' src='"+url+"'></iframe>";
/*$.get(url, function(data) {
chart_obj.innerHTML = data;
});*/
} else {
chart_obj.innerHTML = "<object type='image/svg+xml' class='svg' width='"+(width+1)+"px' height='"+(height+1)+"px' align='middle' data='"+url+"'></object>";
if (BROWSER.GRAPHIC.isDrawCanvas()) {
svg2canvg(chart_obj.firstChild, true);
}
}

$(chart_obj).attr('class','');
}
}
/*!
* iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
* Released under MIT license, http://cubiq.org/license
*/
(function(window, doc){
var m = Math,
dummyStyle = doc.createElement('div').style,
vendor = (function () {
var vendors = 't,webkitT,MozT,msT,OT'.split(','),
t,
i = 0,
l = vendors.length;

for ( ; i < l; i++ ) {
t = vendors[i] + 'ransform';
if ( t in dummyStyle ) {
return vendors[i].substr(0, vendors[i].length - 1);
}
}

return false;
})(),
cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

// Style properties
transform = prefixStyle('transform'),
transitionProperty = prefixStyle('transitionProperty'),
transitionDuration = prefixStyle('transitionDuration'),
transformOrigin = prefixStyle('transformOrigin'),
transitionTimingFunction = prefixStyle('transitionTimingFunction'),
transitionDelay = prefixStyle('transitionDelay'),

// Browser capabilities
isAndroid = (/android/gi).test(navigator.appVersion),
isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

has3d = prefixStyle('perspective') in dummyStyle,
hasTouch = 'ontouchstart' in window && !isTouchPad,
hasTransform = vendor !== false,
hasTransitionEnd = prefixStyle('transition') in dummyStyle,

RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
START_EV = hasTouch ? 'touchstart' : 'mousedown',
MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
END_EV = hasTouch ? 'touchend' : 'mouseup',
CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
TRNEND_EV = (function () {
if ( vendor === false ) return false;

var transitionEnd = {
''			: 'transitionend',
'webkit'	: 'webkitTransitionEnd',
'Moz'		: 'transitionend',
'O'			: 'otransitionend',
'ms'		: 'MSTransitionEnd'
};

return transitionEnd[vendor];
})(),

nextFrame = (function() {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) { return setTimeout(callback, 1); };
})(),
cancelFrame = (function () {
return window.cancelRequestAnimationFrame ||
window.webkitCancelAnimationFrame ||
window.webkitCancelRequestAnimationFrame ||
window.mozCancelRequestAnimationFrame ||
window.oCancelRequestAnimationFrame ||
window.msCancelRequestAnimationFrame ||
clearTimeout;
})(),

// Helpers
translateZ = has3d ? ' translateZ(0)' : '',

// Constructor
iScroll = function (el, options) {
var that = this,
i;

that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
that.wrapper.style.overflow = 'hidden';
that.scroller = that.wrapper.children[0];

// Default options
that.options = {
hScroll: true,
vScroll: true,
x: 0,
y: 0,
bounce: true,
bounceLock: false,
momentum: true,
lockDirection: true,
useTransform: true,
useTransition: false,
topOffset: 0,
checkDOMChanges: false,		// Experimental
handleClick: true,

// Scrollbar
hScrollbar: true,
vScrollbar: true,
fixedScrollbar: isAndroid,
hideScrollbar: isIDevice,
fadeScrollbar: isIDevice && has3d,
scrollbarClass: '',

// Zoom
zoom: false,
zoomMin: 1,
zoomMax: 4,
doubleTapZoom: 2,
wheelAction: 'scroll',

// Snap
snap: false,
snapThreshold: 1,

// Events
onRefresh: null,
onBeforeScrollStart: function (e) { e.preventDefault(); },
onScrollStart: null,
onBeforeScrollMove: null,
onScrollMove: null,
onBeforeScrollEnd: null,
onScrollEnd: null,
onTouchEnd: null,
onDestroy: null,
onZoomStart: null,
onZoom: null,
onZoomEnd: null
};

// User defined options
for (i in options) that.options[i] = options[i];

// Set starting position
that.x = that.options.x;
that.y = that.options.y;

// Normalize options
that.options.useTransform = hasTransform && that.options.useTransform;
that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
that.options.zoom = that.options.useTransform && that.options.zoom;
that.options.useTransition = hasTransitionEnd && that.options.useTransition;

// Helpers FIX ANDROID BUG!
// translate3d and scale doesn't work together!
// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
if ( that.options.zoom && isAndroid ){
translateZ = '';
}

// Set some default styles
that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
that.scroller.style[transitionDuration] = '0';
that.scroller.style[transformOrigin] = '0 0';
if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';

if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

if (that.options.useTransition) that.options.fixedScrollbar = true;

that.refresh();

that._bind(RESIZE_EV, window);
that._bind(START_EV);
if (!hasTouch) {
if (that.options.wheelAction != 'none') {
that._bind('DOMMouseScroll');
that._bind('mousewheel');
}
}

if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
that._checkDOMChanges();
}, 500);
};

// Prototype
iScroll.prototype = {
enabled: true,
x: 0,
y: 0,
steps: [],
scale: 1,
currPageX: 0, currPageY: 0,
pagesX: [], pagesY: [],
aniTime: null,
wheelZoomCount: 0,

handleEvent: function (e) {
var that = this;
switch(e.type) {
case START_EV:
if (!hasTouch && e.button !== 0) return;
that._start(e);
break;
case MOVE_EV: that._move(e); break;
case END_EV:
case CANCEL_EV: that._end(e); break;
case RESIZE_EV: that._resize(); break;
case 'DOMMouseScroll': case 'mousewheel': that._wheel(e); break;
case TRNEND_EV: that._transitionEnd(e); break;
}
},

_checkDOMChanges: function () {
if (this.moved || this.zoomed || this.animating ||
(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

this.refresh();
},

_scrollbar: function (dir) {
var that = this,
bar;

if (!that[dir + 'Scrollbar']) {
if (that[dir + 'ScrollbarWrapper']) {
if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
that[dir + 'ScrollbarWrapper'] = null;
that[dir + 'ScrollbarIndicator'] = null;
}

return;
}

if (!that[dir + 'ScrollbarWrapper']) {
// Create the scrollbar wrapper
bar = doc.createElement('div');

if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

that.wrapper.appendChild(bar);
that[dir + 'ScrollbarWrapper'] = bar;

// Create the scrollbar indicator
bar = doc.createElement('div');
if (!that.options.scrollbarClass) {
bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
}
bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

that[dir + 'ScrollbarWrapper'].appendChild(bar);
that[dir + 'ScrollbarIndicator'] = bar;
}

if (dir == 'h') {
that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
} else {
that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
}

// Reset position
that._scrollbarPos(dir, true);
},

_resize: function () {
var that = this;
setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
},

_pos: function (x, y) {
if (this.zoomed) return;

x = this.hScroll ? x : 0;
y = this.vScroll ? y : 0;

if (this.options.useTransform) {
this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
} else {
x = m.round(x);
y = m.round(y);
this.scroller.style.left = x + 'px';
this.scroller.style.top = y + 'px';
}

this.x = x;
this.y = y;

this._scrollbarPos('h');
this._scrollbarPos('v');
},

_scrollbarPos: function (dir, hidden) {
var that = this,
pos = dir == 'h' ? that.x : that.y,
size;

if (!that[dir + 'Scrollbar']) return;

pos = that[dir + 'ScrollbarProp'] * pos;

if (pos < 0) {
if (!that.options.fixedScrollbar) {
size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
if (size < 8) size = 8;
that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
}
pos = 0;
} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
if (!that.options.fixedScrollbar) {
size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
if (size < 8) size = 8;
that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
} else {
pos = that[dir + 'ScrollbarMaxScroll'];
}
}

that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
},

_start: function (e) {
var that = this,
point = hasTouch ? e.touches[0] : e,
matrix, x, y,
c1, c2;

if (!that.enabled) return;

if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

that.moved = false;
that.animating = false;
that.zoomed = false;
that.distX = 0;
that.distY = 0;
that.absDistX = 0;
that.absDistY = 0;
that.dirX = 0;
that.dirY = 0;

// Gesture start
if (that.options.zoom && hasTouch && e.touches.length > 1) {
c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
}

if (that.options.momentum) {
if (that.options.useTransform) {
// Very lame general purpose alternative to CSSMatrix
matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
x = +(matrix[12] || matrix[4]);
y = +(matrix[13] || matrix[5]);
} else {
x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
}

if (x != that.x || y != that.y) {
if (that.options.useTransition) that._unbind(TRNEND_EV);
else cancelFrame(that.aniTime);
that.steps = [];
that._pos(x, y);
if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
}
}

that.absStartX = that.x;	// Needed by snap threshold
that.absStartY = that.y;

that.startX = that.x;
that.startY = that.y;
that.pointX = point.pageX;
that.pointY = point.pageY;

that.startTime = e.timeStamp || Date.now();

if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

that._bind(MOVE_EV, window);
that._bind(END_EV, window);
that._bind(CANCEL_EV, window);
},

_move: function (e) {
var that = this,
point = hasTouch ? e.touches[0] : e,
deltaX = point.pageX - that.pointX,
deltaY = point.pageY - that.pointY,
newX = that.x + deltaX,
newY = that.y + deltaY,
c1, c2, scale,
timestamp = e.timeStamp || Date.now();

if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

// Zoom
if (that.options.zoom && hasTouch && e.touches.length > 1) {
c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
that.touchesDist = m.sqrt(c1*c1+c2*c2);

that.zoomed = true;

scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

that.lastScale = scale / this.scale;

newX = this.originX - this.originX * that.lastScale + this.x;
newY = this.originY - this.originY * that.lastScale + this.y;

this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

if (that.options.onZoom) that.options.onZoom.call(that, e);
return;
}

that.pointX = point.pageX;
that.pointY = point.pageY;

// Slow down if outside of the boundaries
if (newX > 0 || newX < that.maxScrollX) {
newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
}
if (newY > that.minScrollY || newY < that.maxScrollY) {
newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
}

that.distX += deltaX;
that.distY += deltaY;
that.absDistX = m.abs(that.distX);
that.absDistY = m.abs(that.distY);

if (that.absDistX < 6 && that.absDistY < 6) {
return;
}

// Lock direction
if (that.options.lockDirection) {
if (that.absDistX > that.absDistY + 5) {
newY = that.y;
deltaY = 0;
} else if (that.absDistY > that.absDistX + 5) {
newX = that.x;
deltaX = 0;
}
}

that.moved = true;
that._pos(newX, newY);
that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

if (timestamp - that.startTime > 300) {
that.startTime = timestamp;
that.startX = that.x;
that.startY = that.y;
}

if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
},

_end: function (e) {
if (hasTouch && e.touches.length !== 0) return;

var that = this,
point = hasTouch ? e.changedTouches[0] : e,
target, ev,
momentumX = { dist:0, time:0 },
momentumY = { dist:0, time:0 },
duration = (e.timeStamp || Date.now()) - that.startTime,
newPosX = that.x,
newPosY = that.y,
distX, distY,
newDuration,
snap,
scale;

that._unbind(MOVE_EV, window);
that._unbind(END_EV, window);
that._unbind(CANCEL_EV, window);

if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

if (that.zoomed) {
scale = that.scale * that.lastScale;
scale = Math.max(that.options.zoomMin, scale);
scale = Math.min(that.options.zoomMax, scale);
that.lastScale = scale / that.scale;
that.scale = scale;

that.x = that.originX - that.originX * that.lastScale + that.x;
that.y = that.originY - that.originY * that.lastScale + that.y;

that.scroller.style[transitionDuration] = '200ms';
that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;

that.zoomed = false;
that.refresh();

if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
return;
}

if (!that.moved) {
if (hasTouch) {
if (that.doubleTapTimer && that.options.zoom) {
// Double tapped
clearTimeout(that.doubleTapTimer);
that.doubleTapTimer = null;
if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
if (that.options.onZoomEnd) {
setTimeout(function() {
that.options.onZoomEnd.call(that, e);
}, 200); // 200 is default zoom duration
}
} else if (this.options.handleClick) {
that.doubleTapTimer = setTimeout(function () {
that.doubleTapTimer = null;

// Find the last touched element
target = point.target;
while (target.nodeType != 1) target = target.parentNode;

if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
ev = doc.createEvent('MouseEvents');
ev.initMouseEvent('click', true, true, e.view, 1,
point.screenX, point.screenY, point.clientX, point.clientY,
e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
0, null);
ev._fake = true;
target.dispatchEvent(ev);
}
}, that.options.zoom ? 250 : 0);
}
}

that._resetPos(400);

if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
return;
}

if (duration < 300 && that.options.momentum) {
momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

newPosX = that.x + momentumX.dist;
newPosY = that.y + momentumY.dist;

if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
}

if (momentumX.dist || momentumY.dist) {
newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

// Do we need to snap?
if (that.options.snap) {
distX = newPosX - that.absStartX;
distY = newPosY - that.absStartY;
if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
else {
snap = that._snap(newPosX, newPosY);
newPosX = snap.x;
newPosY = snap.y;
newDuration = m.max(snap.time, newDuration);
}
}

that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
return;
}

// Do we need to snap?
if (that.options.snap) {
distX = newPosX - that.absStartX;
distY = newPosY - that.absStartY;
if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
else {
snap = that._snap(that.x, that.y);
if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
}

if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
return;
}

that._resetPos(200);
if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
},

_resetPos: function (time) {
var that = this,
resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

if (resetX == that.x && resetY == that.y) {
if (that.moved) {
that.moved = false;
if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
}

if (that.hScrollbar && that.options.hideScrollbar) {
if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
that.hScrollbarWrapper.style.opacity = '0';
}
if (that.vScrollbar && that.options.hideScrollbar) {
if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
that.vScrollbarWrapper.style.opacity = '0';
}

return;
}

that.scrollTo(resetX, resetY, time || 0);
},

_wheel: function (e) {
var that = this,
wheelDeltaX, wheelDeltaY,
deltaX, deltaY,
deltaScale;

if ('wheelDeltaX' in e) {
wheelDeltaX = e.wheelDeltaX / 12;
wheelDeltaY = e.wheelDeltaY / 12;
} else if('wheelDelta' in e) {
wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
} else if ('detail' in e) {
wheelDeltaX = wheelDeltaY = -e.detail * 3;
} else {
return;
}

if (that.options.wheelAction == 'zoom') {
deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;

if (deltaScale != that.scale) {
if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
that.wheelZoomCount++;

that.zoom(e.pageX, e.pageY, deltaScale, 400);

setTimeout(function() {
that.wheelZoomCount--;
if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
}, 400);
}

return;
}

deltaX = that.x + wheelDeltaX;
deltaY = that.y + wheelDeltaY;

if (deltaX > 0) deltaX = 0;
else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

if (deltaY > that.minScrollY) deltaY = that.minScrollY;
else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;

if (that.maxScrollY < 0) {
that.scrollTo(deltaX, deltaY, 0);
}
},

_transitionEnd: function (e) {
var that = this;

if (e.target != that.scroller) return;

that._unbind(TRNEND_EV);

that._startAni();
},


/**
*
* Utilities
*
*/
_startAni: function () {
var that = this,
startX = that.x, startY = that.y,
startTime = Date.now(),
step, easeOut,
animate;

if (that.animating) return;

if (!that.steps.length) {
that._resetPos(400);
return;
}

step = that.steps.shift();

if (step.x == startX && step.y == startY) step.time = 0;

that.animating = true;
that.moved = true;

if (that.options.useTransition) {
that._transitionTime(step.time);
that._pos(step.x, step.y);
that.animating = false;
if (step.time) that._bind(TRNEND_EV);
else that._resetPos(0);
return;
}

animate = function () {
var now = Date.now(),
newX, newY;

if (now >= startTime + step.time) {
that._pos(step.x, step.y);
that.animating = false;
if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
that._startAni();
return;
}

now = (now - startTime) / step.time - 1;
easeOut = m.sqrt(1 - now * now);
newX = (step.x - startX) * easeOut + startX;
newY = (step.y - startY) * easeOut + startY;
that._pos(newX, newY);
if (that.animating) that.aniTime = nextFrame(animate);
};

animate();
},

_transitionTime: function (time) {
time += 'ms';
this.scroller.style[transitionDuration] = time;
if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
},

_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
var deceleration = 0.0006,
speed = m.abs(dist) / time,
newDist = (speed * speed) / (2 * deceleration),
newTime = 0, outsideDist = 0;

// Proportinally reduce speed if we are outside of the boundaries
if (dist > 0 && newDist > maxDistUpper) {
outsideDist = size / (6 / (newDist / speed * deceleration));
maxDistUpper = maxDistUpper + outsideDist;
speed = speed * maxDistUpper / newDist;
newDist = maxDistUpper;
} else if (dist < 0 && newDist > maxDistLower) {
outsideDist = size / (6 / (newDist / speed * deceleration));
maxDistLower = maxDistLower + outsideDist;
speed = speed * maxDistLower / newDist;
newDist = maxDistLower;
}

newDist = newDist * (dist < 0 ? -1 : 1);
newTime = speed / deceleration;

return { dist: newDist, time: m.round(newTime) };
},

_offset: function (el) {
var left = -el.offsetLeft,
top = -el.offsetTop;

while (el = el.offsetParent) {
left -= el.offsetLeft;
top -= el.offsetTop;
}

if (el != this.wrapper) {
left *= this.scale;
top *= this.scale;
}

return { left: left, top: top };
},

_snap: function (x, y) {
var that = this,
i, l,
page, time,
sizeX, sizeY;

// Check page X
page = that.pagesX.length - 1;
for (i=0, l=that.pagesX.length; i<l; i++) {
if (x >= that.pagesX[i]) {
page = i;
break;
}
}
if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
x = that.pagesX[page];
sizeX = m.abs(x - that.pagesX[that.currPageX]);
sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
that.currPageX = page;

// Check page Y
page = that.pagesY.length-1;
for (i=0; i<page; i++) {
if (y >= that.pagesY[i]) {
page = i;
break;
}
}
if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
y = that.pagesY[page];
sizeY = m.abs(y - that.pagesY[that.currPageY]);
sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
that.currPageY = page;

// Snap with constant speed (proportional duration)
time = m.round(m.max(sizeX, sizeY)) || 200;

return { x: x, y: y, time: time };
},

_bind: function (type, el, bubble) {
(el || this.scroller).addEventListener(type, this, !!bubble);
},

_unbind: function (type, el, bubble) {
(el || this.scroller).removeEventListener(type, this, !!bubble);
},


/**
*
* Public methods
*
*/
destroy: function () {
var that = this;

that.scroller.style[transform] = '';

// Remove the scrollbars
that.hScrollbar = false;
that.vScrollbar = false;
that._scrollbar('h');
that._scrollbar('v');

// Remove the event listeners
that._unbind(RESIZE_EV, window);
that._unbind(START_EV);
that._unbind(MOVE_EV, window);
that._unbind(END_EV, window);
that._unbind(CANCEL_EV, window);

if (!that.options.hasTouch) {
that._unbind('DOMMouseScroll');
that._unbind('mousewheel');
}

if (that.options.useTransition) that._unbind(TRNEND_EV);

if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);

if (that.options.onDestroy) that.options.onDestroy.call(that);
},

refresh: function () {
var that = this,
offset,
i, l,
els,
pos = 0,
page = 0;

if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
that.wrapperW = that.wrapper.clientWidth || 1;
that.wrapperH = that.wrapper.clientHeight || 1;

that.minScrollY = -that.options.topOffset || 0;
that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
that.maxScrollX = that.wrapperW - that.scrollerW;
that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
that.dirX = 0;
that.dirY = 0;

if (that.options.onRefresh) that.options.onRefresh.call(that);

that.hScroll = that.options.hScroll && that.maxScrollX < 0;
that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

that.hScrollbar = that.hScroll && that.options.hScrollbar;
that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

offset = that._offset(that.wrapper);
that.wrapperOffsetLeft = -offset.left;
that.wrapperOffsetTop = -offset.top;

// Prepare snap
if (typeof that.options.snap == 'string') {
that.pagesX = [];
that.pagesY = [];
els = that.scroller.querySelectorAll(that.options.snap);
for (i=0, l=els.length; i<l; i++) {
pos = that._offset(els[i]);
pos.left += that.wrapperOffsetLeft;
pos.top += that.wrapperOffsetTop;
that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
}
} else if (that.options.snap) {
that.pagesX = [];
while (pos >= that.maxScrollX) {
that.pagesX[page] = pos;
pos = pos - that.wrapperW;
page++;
}
if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

pos = 0;
page = 0;
that.pagesY = [];
while (pos >= that.maxScrollY) {
that.pagesY[page] = pos;
pos = pos - that.wrapperH;
page++;
}
if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
}

// Prepare the scrollbars
that._scrollbar('h');
that._scrollbar('v');

if (!that.zoomed) {
that.scroller.style[transitionDuration] = '0';
that._resetPos(400);
}
},

scrollTo: function (x, y, time, relative) {
var that = this,
step = x,
i, l;

that.stop();

if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];

for (i=0, l=step.length; i<l; i++) {
if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
}

that._startAni();
},

scrollToElement: function (el, time) {
var that = this, pos;
el = el.nodeType ? el : that.scroller.querySelector(el);
if (!el) return;

pos = that._offset(el);
pos.left += that.wrapperOffsetLeft;
pos.top += that.wrapperOffsetTop;

pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

that.scrollTo(pos.left, pos.top, time);
},

scrollToPage: function (pageX, pageY, time) {
var that = this, x, y;

time = time === undefined ? 400 : time;

if (that.options.onScrollStart) that.options.onScrollStart.call(that);

if (that.options.snap) {
pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

that.currPageX = pageX;
that.currPageY = pageY;
x = that.pagesX[pageX];
y = that.pagesY[pageY];
} else {
x = -that.wrapperW * pageX;
y = -that.wrapperH * pageY;
if (x < that.maxScrollX) x = that.maxScrollX;
if (y < that.maxScrollY) y = that.maxScrollY;
}

that.scrollTo(x, y, time);
},

disable: function () {
this.stop();
this._resetPos(0);
this.enabled = false;

// If disabled after touchstart we make sure that there are no left over events
this._unbind(MOVE_EV, window);
this._unbind(END_EV, window);
this._unbind(CANCEL_EV, window);
},

enable: function () {
this.enabled = true;
},

stop: function () {
if (this.options.useTransition) this._unbind(TRNEND_EV);
else cancelFrame(this.aniTime);
this.steps = [];
this.moved = false;
this.animating = false;
},

zoom: function (x, y, scale, time) {
var that = this,
relScale = scale / that.scale;

if (!that.options.useTransform) return;

that.zoomed = true;
time = time === undefined ? 200 : time;
x = x - that.wrapperOffsetLeft - that.x;
y = y - that.wrapperOffsetTop - that.y;
that.x = x - x * relScale + that.x;
that.y = y - y * relScale + that.y;

that.scale = scale;
that.refresh();

that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

that.scroller.style[transitionDuration] = time + 'ms';
that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
that.zoomed = false;
},

isReady: function () {
return !this.moved && !this.zoomed && !this.animating;
}
};

function prefixStyle (style) {
if ( vendor === '' ) return style;

style = style.charAt(0).toUpperCase() + style.substr(1);
return vendor + style;
}

dummyStyle = null;	// for the sake of it

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})(window, document);
