"use strict";(self.webpackChunkangular_ant=self.webpackChunkangular_ant||[]).push([[985],{8985:(vi,Yt,Ft)=>{Ft.d(Yt,{Z:()=>di});var dt={initialViewIndex:0,inline:!1,button:!0,navbar:!0,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,interval:5e3,keyboard:!0,backdrop:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,zIndex:2015,zIndexInline:0,url:"src",container:"body",filter:null,toggleOnDblclick:!0,ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,zoom:null,zoomed:null},ct=typeof window<"u",k=ct?window:{},c="viewer",U="move",j="zoom",Z=c+"-active",Xt=c+"-close",K=c+"-fade",at=c+"-fixed",Pt=c+"-fullscreen",gt=c+"-fullscreen-exit",R=c+"-hide",qt=c+"-hide-md-down",Ht=c+"-hide-sm-down",Bt=c+"-hide-xs-down",C=c+"-in",$=c+"-invisible",G=c+"-loading",Ut=c+"-move",mt=c+"-open",F=c+"-show",E=c+"-transition",q="click",pt="dblclick",wt="dragstart",Et="keydown",A="load",Dt=k.PointerEvent?"pointerdown":"touchstart mousedown",St=k.PointerEvent?"pointermove":"touchmove mousemove",It=k.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",_="transitionend",H="viewed",Ct="wheel mousewheel DOMMouseScroll",rt=c+"Action",J=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"],jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kt=function(){function n(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}}();function ot(n){return"string"==typeof n}var $t=Number.isNaN||k.isNaN;function b(n){return"number"==typeof n&&!$t(n)}function W(n){return typeof n>"u"}function M(n){return"object"===(typeof n>"u"?"undefined":jt(n))&&null!==n}var Gt=Object.prototype.hasOwnProperty;function Q(n){if(!M(n))return!1;try{var t=n.constructor,i=t.prototype;return t&&i&&Gt.call(i,"isPrototypeOf")}catch{return!1}}function D(n){return"function"==typeof n}function w(n,t){if(n&&D(t))if(Array.isArray(n)||b(n.length)){var i=n.length,e=void 0;for(e=0;e<i&&!1!==t.call(n,n[e],e,n);e+=1);}else M(n)&&Object.keys(n).forEach(function(s){t.call(n,n[s],s,n)});return n}var S=Object.assign||function(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];return M(t)&&e.length>0&&e.forEach(function(r){M(r)&&Object.keys(r).forEach(function(a){t[a]=r[a]})}),t},Jt=/^(?:width|height|left|top|marginLeft|marginTop)$/;function z(n,t){var i=n.style;w(t,function(e,s){Jt.test(s)&&b(e)&&(e+="px"),i[s]=e})}function d(n,t){if(t){if(b(n.length))return void w(n,function(e){d(e,t)});if(n.classList)return void n.classList.add(t);var i=n.className.trim();i?i.indexOf(t)<0&&(n.className=i+" "+t):n.className=t}}function g(n,t){if(t){if(b(n.length))return void w(n,function(i){g(i,t)});if(n.classList)return void n.classList.remove(t);n.className.indexOf(t)>=0&&(n.className=n.className.replace(t,""))}}function B(n,t,i){if(t){if(b(n.length))return void w(n,function(e){B(e,t,i)});i?d(n,t):g(n,t)}}var ti=/([a-z\d])([A-Z])/g;function tt(n){return n.replace(ti,"$1-$2").toLowerCase()}function V(n,t){return M(n[t])?n[t]:n.dataset?n.dataset[t]:n.getAttribute("data-"+tt(t))}function it(n,t,i){M(i)?n[t]=i:n.dataset?n.dataset[t]=i:n.setAttribute("data-"+tt(t),i)}var At=/\s\s*/,Ot=function(){var n=!1;if(ct){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return n=!0,t},set:function(r){t=r}});k.addEventListener("test",i,e),k.removeEventListener("test",i,e)}return n}();function y(n,t,i){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i;t.trim().split(At).forEach(function(r){if(!Ot){var a=n.listeners;a&&a[r]&&a[r][i]&&(s=a[r][i],delete a[r][i],0===Object.keys(a[r]).length&&delete a[r],0===Object.keys(a).length&&delete n.listeners)}n.removeEventListener(r,s,e)})}function v(n,t,i){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i;t.trim().split(At).forEach(function(r){if(e.once&&!Ot){var a=n.listeners,o=void 0===a?{}:a;s=function(){for(var l=arguments.length,f=Array(l),u=0;u<l;u++)f[u]=arguments[u];delete o[r][i],n.removeEventListener(r,s,e),i.apply(n,f)},o[r]||(o[r]={}),o[r][i]&&n.removeEventListener(r,o[r][i],e),o[r][i]=s,n.listeners=o}n.addEventListener(r,s,e)})}function L(n,t,i){var e=void 0;return D(Event)&&D(CustomEvent)?e=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):(e=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,i),n.dispatchEvent(e)}function et(n){var t=n.rotate,i=n.scaleX,e=n.scaleY,s=n.translateX,r=n.translateY,a=[];b(s)&&0!==s&&a.push("translateX("+s+"px)"),b(r)&&0!==r&&a.push("translateY("+r+"px)"),b(t)&&0!==t&&a.push("rotate("+t+"deg)"),b(i)&&1!==i&&a.push("scaleX("+i+")"),b(e)&&1!==e&&a.push("scaleY("+e+")");var o=a.length?a.join(" "):"none";return{WebkitTransform:o,msTransform:o,transform:o}}var ht=k.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(k.navigator.userAgent);function Rt(n,t){var i=document.createElement("img");if(n.naturalWidth&&!ht)return t(n.naturalWidth,n.naturalHeight),i;var e=document.body||document.documentElement;return i.onload=function(){t(i.width,i.height),ht||e.removeChild(i)},i.src=n.src,ht||(i.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",e.appendChild(i)),i}function nt(n){switch(n){case 2:return Bt;case 3:return Ht;case 4:return qt;default:return""}}function st(n,t){var i=n.pageX,e=n.pageY,s={endX:i,endY:e};return t?s:S({startX:i,startY:e},s)}var ri={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,i=this.parent,e=void 0;t.inline&&(e={width:Math.max(i.offsetWidth,t.minWidth),height:Math.max(i.offsetHeight,t.minHeight)},this.parentData=e),(this.fulled||!e)&&(e=this.containerData),this.viewerData=S({},e)},renderViewer:function(){this.options.inline&&!this.fulled&&z(this.viewer,this.viewerData)},initList:function(){var t=this,i=this.element,e=this.options,s=this.list,r=[];w(this.images,function(a,o){var h=a.src,l=a.alt||function ni(n){return ot(n)?n.replace(/^.*\//,"").replace(/[?&#].*$/,""):""}(h),f=e.url;ot(f)?f=a.getAttribute(f):D(f)&&(f=f.call(t,a)),(h||f)&&r.push('<li><img src="'+(h||f)+'" role="button" data-viewer-action="view" data-index="'+o+'" data-original-url="'+(f||h)+'" alt="'+l+'"></li>')}),s.innerHTML=r.join(""),this.items=s.getElementsByTagName("li"),w(this.items,function(a){var o=a.firstElementChild;it(o,"filled",!0),e.loading&&d(a,G),v(o,A,function(h){e.loading&&g(a,G),t.loadImage(h)},{once:!0})}),e.transition&&v(i,H,function(){d(s,E)},{once:!0})},renderList:function(t){var i=t||this.index,e=this.items[i].offsetWidth||30,s=e+1;z(this.list,S({width:s*this.length},et({translateX:(this.viewerData.width-e)/2-s*i})))},resetList:function(){var t=this.list;t.innerHTML="",g(t,E),z(t,et({translateX:0}))},initImage:function(t){var i=this,e=this.options,s=this.image,r=this.viewerData,a=this.footer.offsetHeight,o=r.width,h=Math.max(r.height-a,a),l=this.imageData||{},f=void 0;this.imageInitializing={abort:function(){f.onload=null}},f=Rt(s,function(u,m){var p=u/m,T=o,I=h;i.imageInitializing=!1,h*p>o?I=o/p:T=h*p;var x={naturalWidth:u,naturalHeight:m,aspectRatio:p,ratio:(T=Math.min(.9*T,u))/u,width:T,height:I=Math.min(.9*I,m),left:(o-T)/2,top:(h-I)/2},Y=S({},x);e.rotatable&&(x.rotate=l.rotate||0,Y.rotate=0),e.scalable&&(x.scaleX=l.scaleX||1,x.scaleY=l.scaleY||1,Y.scaleX=1,Y.scaleY=1),i.imageData=x,i.initialImageData=Y,t&&t()})},renderImage:function(t){var i=this,e=this.image,s=this.imageData;if(z(e,S({width:s.width,height:s.height,marginLeft:s.left,marginTop:s.top},et(s))),t)if((this.viewing||this.zooming)&&this.options.transition){var r=function(){i.imageRendering=!1,t()};this.imageRendering={abort:function(){y(e,_,r)}},v(e,_,r,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},oi={bind:function(){var t=this.canvas,i=this.element,e=this.viewer;v(e,q,this.onClick=this.click.bind(this)),v(e,Ct,this.onWheel=this.wheel.bind(this)),v(e,wt,this.onDragStart=this.dragstart.bind(this)),this.options.toggleOnDblclick&&v(t,pt,this.onDblclick=this.dblclick.bind(this)),v(t,Dt,this.onPointerDown=this.pointerdown.bind(this)),v(i.ownerDocument,St,this.onPointerMove=this.pointermove.bind(this)),v(i.ownerDocument,It,this.onPointerUp=this.pointerup.bind(this)),v(i.ownerDocument,Et,this.onKeyDown=this.keydown.bind(this)),v(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.canvas,i=this.element,e=this.viewer;y(e,q,this.onClick),y(e,Ct,this.onWheel),y(e,wt,this.onDragStart),this.options.toggleOnDblclick&&y(t,pt,this.onDblclick),y(t,Dt,this.onPointerDown),y(i.ownerDocument,St,this.onPointerMove),y(i.ownerDocument,It,this.onPointerUp),y(i.ownerDocument,Et,this.onKeyDown),y(window,"resize",this.onResize)}},hi={click:function(t){var i=t.target,e=this.options,s=this.imageData;switch(V(i,rt)){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(V(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-s.scaleX||-1);break;case"flip-vertical":this.scaleY(-s.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.target.parentElement===this.canvas&&this.toggle()},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var i=this.element,e=this.options,s=this.image,r=this.index,a=this.viewerData;g(s,$),e.loading&&g(this.canvas,G),s.style.cssText="height:0;margin-left:"+a.width/2+"px;margin-top:"+a.height/2+"px;max-width:none!important;position:absolute;width:0;",this.initImage(function(){B(s,Ut,e.movable),B(s,E,e.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,D(e.viewed)&&v(i,H,e.viewed,{once:!0}),L(i,H,{originalImage:t.images[r],index:r,image:s})})})},loadImage:function(t){var i=t.target,e=i.parentNode,s=e.offsetWidth||30,r=e.offsetHeight||50,a=!!V(i,"filled");Rt(i,function(o,h){var l=o/h,f=s,u=r;r*l>s?a?f=r*l:u=s/l:a?u=s/l:f=r*l,z(i,S({width:f,height:u},et({translateX:(s-f)/2,translateY:(r-u)/2})))})},keydown:function(t){var i=this.options;if(this.fulled&&i.keyboard)switch(t.keyCode||t.which||t.charCode){case 27:this.played?this.stop():i.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(i.loop);break;case 38:t.preventDefault(),this.zoom(i.zoomRatio,!0);break;case 39:this.next(i.loop);break;case 40:t.preventDefault(),this.zoom(-i.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle())}},dragstart:function(t){"img"===t.target.tagName.toLowerCase()&&t.preventDefault()},pointerdown:function(t){var i=this.options,e=this.pointers;if(this.viewed&&!this.showing&&!this.viewing&&!this.hiding){t.preventDefault(),t.changedTouches?w(t.changedTouches,function(r){e[r.identifier]=st(r)}):e[t.pointerId||0]=st(t);var s=!!i.movable&&U;Object.keys(e).length>1?s=j:("touch"===t.pointerType||"touchstart"===t.type)&&this.isSwitchable()&&(s="switch"),i.transition&&(s===U||s===j)&&g(this.image,E),this.action=s}},pointermove:function(t){var i=this.pointers;!this.viewed||!this.action||(t.preventDefault(),t.changedTouches?w(t.changedTouches,function(s){S(i[s.identifier],st(s,!0))}):S(i[t.pointerId||0],st(t,!0)),this.change(t))},pointerup:function(t){var i=this.action,e=this.pointers;t.changedTouches?w(t.changedTouches,function(s){delete e[s.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),this.options.transition&&(i===U||i===j)&&d(this.image,E),this.action=!1)},resize:function(){var t=this;if(this.isShown&&!this.hiding&&(this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement)return void this.stop();w(this.player.getElementsByTagName("img"),function(i){v(i,A,t.loadImage.bind(t),{once:!0}),L(i,A)})}},wheel:function(t){var i=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50);var e=Number(this.options.zoomRatio)||.1,s=1;t.deltaY?s=t.deltaY>0?1:-1:t.wheelDelta?s=-t.wheelDelta/120:t.detail&&(s=t.detail>0?1:-1),this.zoom(-s*e,!0,t)}}},li={show:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(D(e.show)&&v(i,"show",e.show,{once:!0}),!1===L(i,"show")||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var s=this.viewer;if(g(s,R),e.transition&&!t){var r=this.shown.bind(this);this.transitioning={abort:function(){y(s,_,r),g(s,C)}},d(s,E),v(s,_,r,{once:!0}),d(s,C)}else d(s,C),this.shown();return this},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.hiding||!this.isShown&&!this.showing)return this;if(D(e.hide)&&v(i,"hide",e.hide,{once:!0}),!1===L(i,"hide"))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var s=this.viewer;if(e.transition&&!t){var r=this.hidden.bind(this),a=function(){v(s,_,r,{once:!0}),g(s,C)};this.transitioning={abort:function(){this.viewed?y(this.image,_,a):y(s,_,r)}},this.viewed?(v(this.image,_,a,{once:!0}),this.zoomTo(0,!1,!1,!0)):a()}else g(s,C),this.hidden();return this},view:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;if(i=Number(i)||0,!this.isShown)return this.index=i,this.show();if(this.hiding||this.played||i<0||i>=this.length||this.viewed&&i===this.index)return this;this.viewing&&this.viewing.abort();var e=this.element,s=this.options,r=this.title,a=this.canvas,o=this.items[i],h=o.querySelector("img"),l=V(h,"originalUrl"),f=h.getAttribute("alt"),u=document.createElement("img");if(u.src=l,u.alt=f,D(s.view)&&v(e,"view",s.view,{once:!0}),!1===L(e,"view",{originalImage:this.images[i],index:i,image:u})||!this.isShown||this.hiding||this.played)return this;this.image=u,g(this.items[this.index],Z),d(o,Z),this.viewed=!1,this.index=i,this.imageData={},d(u,$),s.loading&&d(a,G),a.innerHTML="",a.appendChild(u),this.renderList(),r.innerHTML="";var m=function(){var I=t.imageData,x=Array.isArray(s.title)?s.title[1]:s.title;r.innerHTML=D(x)?x.call(t,u,I):f+" ("+I.naturalWidth+" \xd7 "+I.naturalHeight+")"},p=void 0;return v(e,H,m,{once:!0}),this.viewing={abort:function(){y(e,H,m),u.complete?this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort():(y(u,A,p),this.timeout&&clearTimeout(this.timeout))}},u.complete?this.load():(v(u,A,p=this.load.bind(this),{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){g(u,$),t.timeout=!1},1e3)),this},prev:function(){var i=this.index-1;return i<0&&(i=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?this.length-1:0),this.view(i),this},next:function(){var i=this.length-1,e=this.index+1;return e>i&&(e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?0:i),this.view(e),this},move:function(t,i){var e=this.imageData;return this.moveTo(W(t)?t:e.left+Number(t),W(i)?i:e.top+Number(i)),this},moveTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.movable){var s=!1;b(t)&&(e.left=t,s=!0),b(i)&&(e.top=i,s=!0),s&&this.renderImage()}return this},zoom:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.imageData;return t=Number(t),this.zoomTo(s.width*(t=t<0?1/(1-t):1+t)/s.naturalWidth,i,e),this},zoomTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.element,o=this.options,h=this.pointers,l=this.imageData;if(b(t=Math.max(0,t))&&this.viewed&&!this.played&&(r||o.zoomable)){if(!r){var f=Math.max(.01,o.minZoomRatio),u=Math.min(100,o.maxZoomRatio);t=Math.min(Math.max(t,f),u)}s&&t>.95&&t<1.05&&(t=1);var m=l.naturalWidth*t,p=l.naturalHeight*t,T=l.width/l.naturalWidth;if(D(o.zoom)&&v(a,"zoom",o.zoom,{once:!0}),!1===L(a,"zoom",{ratio:t,oldRatio:T,originalEvent:s}))return this;if(this.zooming=!0,s){var I=function ei(n){var t=n.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}(this.viewer),x=h&&Object.keys(h).length?function ai(n){var t=0,i=0,e=0;return w(n,function(s){t+=s.startX,i+=s.startY,e+=1}),{pageX:t/=e,pageY:i/=e}}(h):{pageX:s.pageX,pageY:s.pageY};l.left-=(x.pageX-I.left-l.left)/l.width*(m-l.width),l.top-=(x.pageY-I.top-l.top)/l.height*(p-l.height)}else l.left-=(m-l.width)/2,l.top-=(p-l.height)/2;l.width=m,l.height=p,l.ratio=t,this.renderImage(function(){e.zooming=!1,D(o.zoomed)&&v(a,"zoomed",o.zoomed,{once:!0}),L(a,"zoomed",{ratio:t,oldRatio:T,originalEvent:s})}),i&&this.tooltip()}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i=this.imageData;return b(t=Number(t))&&this.viewed&&!this.played&&this.options.rotatable&&(i.rotate=t,this.renderImage()),this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.scalable){var s=!1;b(t)&&(e.scaleX=t,s=!0),b(i)&&(e.scaleY=i,s=!0),s&&this.renderImage()}return this},play:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isShown||this.played)return this;var e=this.options,s=this.player,r=this.loadImage.bind(this),a=[],o=0,h=0;return this.played=!0,this.onLoadWhenPlay=r,i&&this.requestFullscreen(),d(s,F),w(this.items,function(f,u){var m=f.querySelector("img"),p=document.createElement("img");p.src=V(m,"originalUrl"),p.alt=m.getAttribute("alt"),o+=1,d(p,K),B(p,E,e.transition),function Qt(n,t){return n.classList?n.classList.contains(t):n.className.indexOf(t)>-1}(f,Z)&&(d(p,C),h=u),a.push(p),v(p,A,r,{once:!0}),s.appendChild(p)}),b(e.interval)&&e.interval>0&&o>1&&function f(){t.playing=setTimeout(function(){g(a[h],C),d(a[h=(h+=1)<o?h:0],C),f()},e.interval)}(),this},stop:function(){var t=this;if(!this.played)return this;var i=this.player;return this.played=!1,clearTimeout(this.playing),w(i.getElementsByTagName("img"),function(e){y(e,A,t.onLoadWhenPlay)}),g(i,F),i.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,i=this.options,e=this.viewer,s=this.image,r=this.list;return!this.isShown||this.played||this.fulled||!i.inline||(this.fulled=!0,this.open(),d(this.button,gt),i.transition&&(g(r,E),this.viewed&&g(s,E)),d(e,at),e.setAttribute("style",""),z(e,{zIndex:i.zIndex}),this.initContainer(),this.viewerData=S({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){d(s,E),d(r,E)},0)})})),this},exit:function(){var t=this,i=this.options,e=this.viewer,s=this.image,r=this.list;return this.isShown&&!this.played&&this.fulled&&i.inline?(this.fulled=!1,this.close(),g(this.button,gt),i.transition&&(g(r,E),this.viewed&&g(s,E)),g(e,at),z(e,{zIndex:i.zIndexInline}),this.viewerData=S({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){d(s,E),d(r,E)},0)})}),this):this},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox;return this.viewed&&!this.played&&i.tooltip?(e.textContent=Math.round(100*this.imageData.ratio)+"%",this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&L(e,_),d(e,F),d(e,K),d(e,E),d(e,C)):d(e,F),this.tooltipping=setTimeout(function(){i.transition?(v(e,_,function(){g(e,F),g(e,K),g(e,E),t.fading=!1},{once:!0}),g(e,C),t.fading=!0):g(e,F),t.tooltipping=!1},1e3),this):this},toggle:function(){return this.zoomTo(1===this.imageData.ratio?this.initialImageData.ratio:1,!0),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=S({},this.initialImageData),this.renderImage()),this},update:function(){var t=this.element,i=this.options,e=this.isImg;if(e&&!t.parentNode)return this.destroy();var s=[];if(w(e?[t]:t.querySelectorAll("img"),function(o){i.filter?i.filter(o)&&s.push(o):s.push(o)}),!s.length)return this;if(this.images=s,this.length=s.length,this.ready){var r=[];if(w(this.items,function(o,h){var l=o.querySelector("img"),f=s[h];f?f.src!==l.src&&r.push(h):r.push(h)}),z(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var a=r.indexOf(this.index);a>=0?(this.viewed=!1,this.view(Math.max(this.index-(a+1),0))):d(this.items[this.index],Z)}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,i=this.options;return V(t,c)?(this.destroyed=!0,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||y(t,q,this.onStart),function ii(n,t){if(M(n[t]))try{delete n[t]}catch{n[t]=void 0}else if(n.dataset)try{delete n.dataset[t]}catch{n.dataset[t]=void 0}else n.removeAttribute("data-"+tt(t))}(t,c),this):this}},ui={open:function(){var t=this.body;d(t,mt),t.style.paddingRight=this.scrollbarWidth+(parseFloat(this.initialBodyPaddingRight)||0)+"px"},close:function(){var t=this.body;g(t,mt),t.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var t=this.element,i=this.options;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,D(i.shown)&&v(t,"shown",i.shown,{once:!0}),!1!==L(t,"shown")&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options;this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),d(this.viewer,R),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(D(i.hidden)&&v(t,"hidden",i.hidden,{once:!0}),L(t,"hidden"))},requestFullscreen:function(){var t=this.element.ownerDocument;if(this.fulled&&!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement&&!t.msFullscreenElement){var i=t.documentElement;i.requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}},exitFullscreen:function(){if(this.fulled){var t=this.element.ownerDocument;t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()}},change:function(t){var i=this.options,e=this.pointers,s=e[Object.keys(e)[0]],r=s.endX-s.startX,a=s.endY-s.startY;switch(this.action){case U:this.move(r,a);break;case j:this.zoom(function si(n){var t=S({},n),i=[];return w(n,function(e,s){delete t[s],w(t,function(r){var a=Math.abs(e.startX-r.startX),o=Math.abs(e.startY-r.startY),h=Math.abs(e.endX-r.endX),l=Math.abs(e.endY-r.endY),f=Math.sqrt(a*a+o*o),u=Math.sqrt(h*h+l*l);i.push((u-f)/f)})}),i.sort(function(e,s){return Math.abs(e)<Math.abs(s)}),i[0]}(e),!1,t);break;case"switch":this.action="switched";var o=Math.abs(r);o>1&&o>Math.abs(a)&&(this.pointers={},r>1?this.prev(i.loop):r<-1&&this.next(i.loop))}w(e,function(h){h.startX=h.endX,h.startY=h.endY})},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.left>=0&&t.top>=0&&t.width<=i.width&&t.height<=i.height}},fi=k.Viewer,Mt=function(){function n(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),!t||1!==t.nodeType)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=S({},dt,Q(i)&&i),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.init()}return Kt(n,[{key:"init",value:function(){var i=this,e=this.element,s=this.options;if(!V(e,c)){it(e,c,this);var r="img"===e.tagName.toLowerCase(),a=[];if(w(r?[e]:e.querySelectorAll("img"),function(u){D(s.filter)?s.filter.call(i,u)&&a.push(u):a.push(u)}),a.length){this.isImg=r,this.length=a.length,this.images=a;var o=e.ownerDocument,h=o.body||o.documentElement;if(this.body=h,this.scrollbarWidth=window.innerWidth-o.documentElement.clientWidth,this.initialBodyPaddingRight=window.getComputedStyle(h).paddingRight,W(document.createElement(c).style.transition)&&(s.transition=!1),s.inline){var l=0,f=function(){if((l+=1)===i.length){var m=void 0;i.initializing=!1,i.delaying={abort:function(){clearTimeout(m)}},m=setTimeout(function(){i.delaying=!1,i.build()},0)}};this.initializing={abort:function(){w(a,function(m){m.complete||y(m,A,f)})}},w(a,function(u){u.complete?f():v(u,A,f,{once:!0})})}else v(e,q,this.onStart=function(u){var m=u.target;"img"===m.tagName.toLowerCase()&&i.view(i.images.indexOf(m))})}}}},{key:"build",value:function(){if(!this.ready){var i=this.element,e=this.options,s=i.parentNode,r=document.createElement("div");r.innerHTML='<div class="viewer-container" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list"></ul></div></div><div class="viewer-tooltip"></div><div role="button" class="viewer-button" data-viewer-action="mix"></div><div class="viewer-player"></div></div>';var a=r.querySelector("."+c+"-container"),o=a.querySelector("."+c+"-title"),h=a.querySelector("."+c+"-toolbar"),l=a.querySelector("."+c+"-navbar"),f=a.querySelector("."+c+"-button"),u=a.querySelector("."+c+"-canvas");if(this.parent=s,this.viewer=a,this.title=o,this.toolbar=h,this.navbar=l,this.button=f,this.canvas=u,this.footer=a.querySelector("."+c+"-footer"),this.tooltipBox=a.querySelector("."+c+"-tooltip"),this.player=a.querySelector("."+c+"-player"),this.list=a.querySelector("."+c+"-list"),d(o,e.title?nt(Array.isArray(e.title)?e.title[0]:e.title):R),d(l,e.navbar?nt(e.navbar):R),B(f,R,!e.button),e.backdrop&&(d(a,c+"-backdrop"),!e.inline&&!0===e.backdrop&&it(u,rt,"hide")),e.toolbar){var m=document.createElement("ul"),p=Q(e.toolbar),T=J.slice(0,3),I=J.slice(7,9),x=J.slice(9);p||d(h,nt(e.toolbar)),w(p?e.toolbar:J,function(N,ci){var lt=p&&Q(N),P=p?tt(ci):N,ut=lt&&!W(N.show)?N.show:N;if(ut&&(e.zoomable||-1===T.indexOf(P))&&(e.rotatable||-1===I.indexOf(P))&&(e.scalable||-1===x.indexOf(P))){var Vt=lt&&!W(N.size)?N.size:N,ft=lt&&!W(N.click)?N.click:N,O=document.createElement("li");O.setAttribute("role","button"),d(O,c+"-"+P),D(ft)||it(O,rt,P),b(ut)&&d(O,nt(ut)),-1!==["small","large"].indexOf(Vt)?d(O,c+"-"+Vt):"play"===P&&d(O,c+"-large"),D(ft)&&v(O,q,ft),m.appendChild(O)}}),h.appendChild(m)}else d(h,R);if(!e.rotatable){var Y=h.querySelectorAll('li[class*="rotate"]');d(Y,$),w(Y,function(N){h.appendChild(N)})}if(e.inline)d(f,Pt),z(a,{zIndex:e.zIndexInline}),"static"===window.getComputedStyle(s).position&&z(s,{position:"relative"}),s.insertBefore(a,i.nextSibling);else{d(f,Xt),d(a,at),d(a,K),d(a,R),z(a,{zIndex:e.zIndex});var X=e.container;ot(X)&&(X=i.ownerDocument.querySelector(X)),X||(X=this.body),X.appendChild(a)}if(e.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,D(e.ready)&&v(i,"ready",e.ready,{once:!0}),!1===L(i,"ready"))return void(this.ready=!1);this.ready&&e.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=fi,n}},{key:"setDefaults",value:function(i){S(dt,Q(i)&&i)}}]),n}();S(Mt.prototype,ri,oi,hi,li,ui);const di=Mt}}]);