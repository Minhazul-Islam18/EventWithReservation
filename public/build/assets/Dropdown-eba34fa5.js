import{r as C,g as ht,b as yt,j as he}from"./app-f645d299.js";var Ue=function(t){return t.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},ze=typeof window<"u"&&window.document&&window.document.createElement?C.useLayoutEffect:C.useEffect,S="top",k="bottom",L="right",$="left",Re="auto",ue=[S,k,L,$],Z="start",se="end",gt="clippingParents",tt="viewport",ae="popper",wt="reference",Xe=ue.reduce(function(e,t){return e.concat([t+"-"+Z,t+"-"+se])},[]),rt=[].concat(ue,[Re]).reduce(function(e,t){return e.concat([t,t+"-"+Z,t+"-"+se])},[]),bt="beforeRead",xt="read",Ot="afterRead",Et="beforeMain",At="main",jt="afterMain",Pt="beforeWrite",Dt="write",Rt="afterWrite",St=[bt,xt,Ot,Et,At,jt,Pt,Dt,Rt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=M(e).Element;return e instanceof t||e instanceof Element}function T(e){var t=M(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Se(e){if(typeof ShadowRoot>"u")return!1;var t=M(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function $t(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!T(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(u){var s=a[u];s===!1?o.removeAttribute(u):o.setAttribute(u,s===!0?"":s)}))})}function Bt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},u=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=u.reduce(function(i,c){return i[c]="",i},{});!T(a)||!V(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(i){a.removeAttribute(i)}))})}}const Ct={name:"applyStyles",enabled:!0,phase:"write",fn:$t,effect:Bt,requires:["computeStyles"]};function F(e){return e.split("-")[0]}var J=Math.max,be=Math.min,_=Math.round;function Pe(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function nt(){return!/^((?!chrome|android).)*safari/i.test(Pe())}function ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&T(e)&&(a=e.offsetWidth>0&&_(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&_(n.height)/e.offsetHeight||1);var u=K(e)?M(e):window,s=u.visualViewport,i=!nt()&&r,c=(n.left+(i&&s?s.offsetLeft:0))/a,f=(n.top+(i&&s?s.offsetTop:0))/o,l=n.width/a,m=n.height/o;return{width:l,height:m,top:f,right:c+l,bottom:f+m,left:c,x:c,y:f}}function $e(e){var t=ee(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function at(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Se(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(e){return M(e).getComputedStyle(e)}function Mt(e){return["table","td","th"].indexOf(V(e))>=0}function I(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function xe(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Se(e)?e.host:null)||I(e)}function Ye(e){return!T(e)||N(e).position==="fixed"?null:e.offsetParent}function Tt(e){var t=/firefox/i.test(Pe()),r=/Trident/i.test(Pe());if(r&&T(e)){var n=N(e);if(n.position==="fixed")return null}var a=xe(e);for(Se(a)&&(a=a.host);T(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(e){for(var t=M(e),r=Ye(e);r&&Mt(r)&&N(r).position==="static";)r=Ye(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?t:r||Tt(e)||t}function Be(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return J(e,be(t,r))}function kt(e,t,r){var n=oe(e,t,r);return n>r?r:n}function ot(){return{top:0,right:0,bottom:0,left:0}}function it(e){return Object.assign({},ot(),e)}function st(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Lt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,it(typeof t!="number"?t:st(t,ue))};function Wt(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,u=r.modifiersData.popperOffsets,s=F(r.placement),i=Be(s),c=[$,L].indexOf(s)>=0,f=c?"height":"width";if(!(!o||!u)){var l=Lt(a.padding,r),m=$e(o),p=i==="y"?S:$,y=i==="y"?k:L,h=r.rects.reference[f]+r.rects.reference[i]-u[i]-r.rects.popper[f],v=u[i]-r.rects.reference[i],b=ce(o),O=b?i==="y"?b.clientHeight||0:b.clientWidth||0:0,E=h/2-v/2,d=l[p],g=O-m[f]-l[y],w=O/2-m[f]/2+E,x=oe(d,w,g),P=i;r.modifiersData[n]=(t={},t[P]=x,t.centerOffset=x-w,t)}}function Ht(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||at(t.elements.popper,a)&&(t.elements.arrow=a))}const Ft={name:"arrow",enabled:!0,phase:"main",fn:Wt,effect:Ht,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(e){return e.split("-")[1]}var Vt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Nt(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:_(r*a)/a||0,y:_(n*a)/a||0}}function Ge(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,u=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,l=e.isFixed,m=u.x,p=m===void 0?0:m,y=u.y,h=y===void 0?0:y,v=typeof f=="function"?f({x:p,y:h}):{x:p,y:h};p=v.x,h=v.y;var b=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=$,d=S,g=window;if(c){var w=ce(r),x="clientHeight",P="clientWidth";if(w===M(r)&&(w=I(r),N(w).position!=="static"&&s==="absolute"&&(x="scrollHeight",P="scrollWidth")),w=w,a===S||(a===$||a===L)&&o===se){d=k;var j=l&&w===g&&g.visualViewport?g.visualViewport.height:w[x];h-=j-n.height,h*=i?1:-1}if(a===$||(a===S||a===k)&&o===se){E=L;var A=l&&w===g&&g.visualViewport?g.visualViewport.width:w[P];p-=A-n.width,p*=i?1:-1}}var D=Object.assign({position:s},c&&Vt),W=f===!0?Nt({x:p,y:h},M(r)):{x:p,y:h};if(p=W.x,h=W.y,i){var R;return Object.assign({},D,(R={},R[d]=O?"0":"",R[E]=b?"0":"",R.transform=(g.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",R))}return Object.assign({},D,(t={},t[d]=O?h+"px":"",t[E]=b?p+"px":"",t.transform="",t))}function qt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,u=o===void 0?!0:o,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:F(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ge(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ge(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const It={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qt,data:{}};var ye={passive:!0};function Ut(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,u=n.resize,s=u===void 0?!0:u,i=M(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,ye)}),s&&i.addEventListener("resize",r.update,ye),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ye)}),s&&i.removeEventListener("resize",r.update,ye)}}const zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ut,data:{}};var Xt={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return Xt[t]})}var Yt={start:"end",end:"start"};function Je(e){return e.replace(/start|end/g,function(t){return Yt[t]})}function Ce(e){var t=M(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Me(e){return ee(I(e)).left+Ce(e).scrollLeft}function Gt(e,t){var r=M(e),n=I(e),a=r.visualViewport,o=n.clientWidth,u=n.clientHeight,s=0,i=0;if(a){o=a.width,u=a.height;var c=nt();(c||!c&&t==="fixed")&&(s=a.offsetLeft,i=a.offsetTop)}return{width:o,height:u,x:s+Me(e),y:i}}function Jt(e){var t,r=I(e),n=Ce(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),u=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+Me(e),i=-n.scrollTop;return N(a||r).direction==="rtl"&&(s+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:u,x:s,y:i}}function Te(e){var t=N(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ft(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:T(e)&&Te(e)?e:ft(xe(e))}function ie(e,t){var r;t===void 0&&(t=[]);var n=ft(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=M(n),u=a?[o].concat(o.visualViewport||[],Te(n)?n:[]):n,s=t.concat(u);return a?s:s.concat(ie(xe(u)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Kt(e,t){var r=ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ke(e,t,r){return t===tt?De(Gt(e,r)):K(t)?Kt(t,r):De(Jt(I(e)))}function Qt(e){var t=ie(xe(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,n=r&&T(e)?ce(e):e;return K(n)?t.filter(function(a){return K(a)&&at(a,n)&&V(a)!=="body"}):[]}function Zt(e,t,r,n){var a=t==="clippingParents"?Qt(e):[].concat(t),o=[].concat(a,[r]),u=o[0],s=o.reduce(function(i,c){var f=Ke(e,c,n);return i.top=J(f.top,i.top),i.right=be(f.right,i.right),i.bottom=be(f.bottom,i.bottom),i.left=J(f.left,i.left),i},Ke(e,u,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ut(e){var t=e.reference,r=e.element,n=e.placement,a=n?F(n):null,o=n?te(n):null,u=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(a){case S:i={x:u,y:t.y-r.height};break;case k:i={x:u,y:t.y+t.height};break;case L:i={x:t.x+t.width,y:s};break;case $:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=a?Be(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case Z:i[c]=i[c]-(t[f]/2-r[f]/2);break;case se:i[c]=i[c]+(t[f]/2-r[f]/2);break}}return i}function fe(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,u=o===void 0?e.strategy:o,s=r.boundary,i=s===void 0?gt:s,c=r.rootBoundary,f=c===void 0?tt:c,l=r.elementContext,m=l===void 0?ae:l,p=r.altBoundary,y=p===void 0?!1:p,h=r.padding,v=h===void 0?0:h,b=it(typeof v!="number"?v:st(v,ue)),O=m===ae?wt:ae,E=e.rects.popper,d=e.elements[y?O:m],g=Zt(K(d)?d:d.contextElement||I(e.elements.popper),i,f,u),w=ee(e.elements.reference),x=ut({reference:w,element:E,strategy:"absolute",placement:a}),P=De(Object.assign({},E,x)),j=m===ae?P:w,A={top:g.top-j.top+b.top,bottom:j.bottom-g.bottom+b.bottom,left:g.left-j.left+b.left,right:j.right-g.right+b.right},D=e.modifiersData.offset;if(m===ae&&D){var W=D[a];Object.keys(A).forEach(function(R){var U=[L,k].indexOf(R)>=0?1:-1,z=[S,k].indexOf(R)>=0?"y":"x";A[R]+=W[z]*U})}return A}function _t(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,u=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?rt:i,f=te(n),l=f?s?Xe:Xe.filter(function(y){return te(y)===f}):ue,m=l.filter(function(y){return c.indexOf(y)>=0});m.length===0&&(m=l);var p=m.reduce(function(y,h){return y[h]=fe(e,{placement:h,boundary:a,rootBoundary:o,padding:u})[F(h)],y},{});return Object.keys(p).sort(function(y,h){return p[y]-p[h]})}function er(e){if(F(e)===Re)return[];var t=ge(e);return[Je(e),t,Je(t)]}function tr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,s=u===void 0?!0:u,i=r.fallbackPlacements,c=r.padding,f=r.boundary,l=r.rootBoundary,m=r.altBoundary,p=r.flipVariations,y=p===void 0?!0:p,h=r.allowedAutoPlacements,v=t.options.placement,b=F(v),O=b===v,E=i||(O||!y?[ge(v)]:er(v)),d=[v].concat(E).reduce(function(Q,q){return Q.concat(F(q)===Re?_t(t,{placement:q,boundary:f,rootBoundary:l,padding:c,flipVariations:y,allowedAutoPlacements:h}):q)},[]),g=t.rects.reference,w=t.rects.popper,x=new Map,P=!0,j=d[0],A=0;A<d.length;A++){var D=d[A],W=F(D),R=te(D)===Z,U=[S,k].indexOf(W)>=0,z=U?"width":"height",B=fe(t,{placement:D,boundary:f,rootBoundary:l,altBoundary:m,padding:c}),H=U?R?L:$:R?k:S;g[z]>w[z]&&(H=ge(H));var pe=ge(H),X=[];if(o&&X.push(B[W]<=0),s&&X.push(B[H]<=0,B[pe]<=0),X.every(function(Q){return Q})){j=D,P=!1;break}x.set(D,X)}if(P)for(var le=y?3:1,Oe=function(q){var ne=d.find(function(de){var Y=x.get(de);if(Y)return Y.slice(0,q).every(function(Ee){return Ee})});if(ne)return j=ne,"break"},re=le;re>0;re--){var ve=Oe(re);if(ve==="break")break}t.placement!==j&&(t.modifiersData[n]._skip=!0,t.placement=j,t.reset=!0)}}const rr={name:"flip",enabled:!0,phase:"main",fn:tr,requiresIfExists:["offset"],data:{_skip:!1}};function Qe(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ze(e){return[S,L,k,$].some(function(t){return e[t]>=0})}function nr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,u=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),i=Qe(u,n),c=Qe(s,a,o),f=Ze(i),l=Ze(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}const ar={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nr};function or(e,t,r){var n=F(e),a=[$,S].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,u=o[0],s=o[1];return u=u||0,s=(s||0)*a,[$,L].indexOf(n)>=0?{x:s,y:u}:{x:u,y:s}}function ir(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,u=rt.reduce(function(f,l){return f[l]=or(l,t.rects,o),f},{}),s=u[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=u}const sr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ir};function fr(e){var t=e.state,r=e.name;t.modifiersData[r]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const ur={name:"popperOffsets",enabled:!0,phase:"read",fn:fr,data:{}};function cr(e){return e==="x"?"y":"x"}function pr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,s=u===void 0?!1:u,i=r.boundary,c=r.rootBoundary,f=r.altBoundary,l=r.padding,m=r.tether,p=m===void 0?!0:m,y=r.tetherOffset,h=y===void 0?0:y,v=fe(t,{boundary:i,rootBoundary:c,padding:l,altBoundary:f}),b=F(t.placement),O=te(t.placement),E=!O,d=Be(b),g=cr(d),w=t.modifiersData.popperOffsets,x=t.rects.reference,P=t.rects.popper,j=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,A=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(w){if(o){var R,U=d==="y"?S:$,z=d==="y"?k:L,B=d==="y"?"height":"width",H=w[d],pe=H+v[U],X=H-v[z],le=p?-P[B]/2:0,Oe=O===Z?x[B]:P[B],re=O===Z?-P[B]:-x[B],ve=t.elements.arrow,Q=p&&ve?$e(ve):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ot(),ne=q[U],de=q[z],Y=oe(0,x[B],Q[B]),Ee=E?x[B]/2-le-Y-ne-A.mainAxis:Oe-Y-ne-A.mainAxis,ct=E?-x[B]/2+le+Y+de+A.mainAxis:re+Y+de+A.mainAxis,Ae=t.elements.arrow&&ce(t.elements.arrow),pt=Ae?d==="y"?Ae.clientTop||0:Ae.clientLeft||0:0,ke=(R=D==null?void 0:D[d])!=null?R:0,lt=H+Ee-ke-pt,vt=H+ct-ke,Le=oe(p?be(pe,lt):pe,H,p?J(X,vt):X);w[d]=Le,W[d]=Le-H}if(s){var We,dt=d==="x"?S:$,mt=d==="x"?k:L,G=w[g],me=g==="y"?"height":"width",He=G+v[dt],Fe=G-v[mt],je=[S,$].indexOf(b)!==-1,Ve=(We=D==null?void 0:D[g])!=null?We:0,Ne=je?He:G-x[me]-P[me]-Ve+A.altAxis,qe=je?G+x[me]+P[me]-Ve-A.altAxis:Fe,Ie=p&&je?kt(Ne,G,qe):oe(p?Ne:He,G,p?qe:Fe);w[g]=Ie,W[g]=Ie-G}t.modifiersData[n]=W}}const lr={name:"preventOverflow",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"]};function vr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function dr(e){return e===M(e)||!T(e)?Ce(e):vr(e)}function mr(e){var t=e.getBoundingClientRect(),r=_(t.width)/e.offsetWidth||1,n=_(t.height)/e.offsetHeight||1;return r!==1||n!==1}function hr(e,t,r){r===void 0&&(r=!1);var n=T(t),a=T(t)&&mr(t),o=I(t),u=ee(e,a,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||Te(o))&&(s=dr(t)),T(t)?(i=ee(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):o&&(i.x=Me(o))),{x:u.left+s.scrollLeft-i.x,y:u.top+s.scrollTop-i.y,width:u.width,height:u.height}}function yr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var u=[].concat(o.requires||[],o.requiresIfExists||[]);u.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&a(i)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function gr(e){var t=yr(e);return St.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function wr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function br(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var _e={placement:"bottom",modifiers:[],strategy:"absolute"};function et(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function xr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?_e:a;return function(s,i,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},_e,o),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},l=[],m=!1,p={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;h(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(s)?ie(s):s.contextElement?ie(s.contextElement):[],popper:ie(i)};var E=gr(br([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(d){return d.enabled}),y(),p.update()},forceUpdate:function(){if(!m){var b=f.elements,O=b.reference,E=b.popper;if(et(O,E)){f.rects={reference:hr(O,ce(E),f.options.strategy==="fixed"),popper:$e(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<f.orderedModifiers.length;d++){if(f.reset===!0){f.reset=!1,d=-1;continue}var g=f.orderedModifiers[d],w=g.fn,x=g.options,P=x===void 0?{}:x,j=g.name;typeof w=="function"&&(f=w({state:f,options:P,name:j,instance:p})||f)}}}},update:wr(function(){return new Promise(function(v){p.forceUpdate(),v(f)})}),destroy:function(){h(),m=!0}};if(!et(s,i))return p;p.setOptions(c).then(function(v){!m&&c.onFirstUpdate&&c.onFirstUpdate(v)});function y(){f.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,E=O===void 0?{}:O,d=v.effect;if(typeof d=="function"){var g=d({state:f,name:b,instance:p,options:E}),w=function(){};l.push(g||w)}})}function h(){l.forEach(function(v){return v()}),l=[]}return p}}var Or=[zt,ur,It,Ct,sr,rr,lr,Ft,ar],Er=xr({defaultModifiers:Or}),Ar=typeof Element<"u",jr=typeof Map=="function",Pr=typeof Set=="function",Dr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function we(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!we(e[n],t[n]))return!1;return!0}var o;if(jr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!we(n.value[1],t.get(n.value[0])))return!1;return!0}if(Pr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Dr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(Ar&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!we(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var Rr=function(t,r){try{return we(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Sr=ht(Rr);var $r=[],Br=function(t,r,n){n===void 0&&(n={});var a=C.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||$r},u=C.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=u[0],i=u[1],c=C.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var y=p.state,h=Object.keys(y.elements);yt.flushSync(function(){i({styles:Ue(h.map(function(v){return[v,y.styles[v]||{}]})),attributes:Ue(h.map(function(v){return[v,y.attributes[v]]}))})})},requires:["computeStyles"]}},[]),f=C.useMemo(function(){var m={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return Sr(a.current,m)?a.current||m:(a.current=m,m)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),l=C.useRef();return ze(function(){l.current&&l.current.setOptions(f)},[f]),ze(function(){if(!(t==null||r==null)){var m=n.createPopper||Er,p=m(t,r,f);return l.current=p,function(){p.destroy(),l.current=null}}},[t,r,n.createPopper]),{state:l.current?l.current.state:null,styles:s.styles,attributes:s.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}};const Cr=(e,t)=>{const[r,n]=C.useState(!1),a=C.useRef(),o=C.useRef(),{styles:u,attributes:s}=Br(a.current,o.current,{placement:e.placement||"bottom-end",modifiers:[{name:"offset",options:{offset:e.offset||[0]}}]}),i=c=>{var f,l;(f=a.current)!=null&&f.contains(c.target)||(l=o.current)!=null&&l.contains(c.target)||n(!1)};return C.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]),C.useImperativeHandle(t,()=>({close(){n(!1)}})),he.jsxs(he.Fragment,{children:[he.jsx("button",{ref:a,type:"button",className:e.btnClassName,onClick:()=>n(!r),children:e.button}),he.jsx("div",{ref:o,style:u.popper,...s.popper,className:"z-50",onClick:()=>n(!r),children:r&&e.children})]})},Mr=C.forwardRef(Cr),kr=Object.freeze(Object.defineProperty({__proto__:null,default:Mr},Symbol.toStringTag,{value:"Module"}));export{Mr as D,Ct as a,kr as b,Er as c};
