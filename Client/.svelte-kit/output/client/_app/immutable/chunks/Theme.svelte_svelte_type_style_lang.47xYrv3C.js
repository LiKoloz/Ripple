import{h as _,a as E,aJ as S,aK as W,a8 as L,aL as B}from"./runtime.FD8xG2QE.js";import{n as I,o as O,p as F,g as P,q as V,u as j,v as q}from"./disclose-version.BlHGoT9p.js";import{w as z}from"./index.C9S6Eld7.js";function Z(t,e,r,i,a){var l;_&&E();var u=(l=e.$$slots)==null?void 0:l[r],h=!1;u===!0&&(u=e[r==="default"?"children":r],h=!0),u===void 0?a!==null&&a(t):u(t,h?()=>i:i)}function m(t){const e={};t.children&&(e.default=!0);for(const r in t.$$slots)e[r]=!0;return e}function tt(t){if(_){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var i=t.value;y(t,"value",null),t.value=i}if(t.hasAttribute("checked")){var a=t.checked;y(t,"checked",null),t.checked=a}}};t.__on_r=r,S(r),I()}}function R(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function y(t,e,r,i){var a=t.__attributes??(t.__attributes={});_&&(a[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||a[e]!==(a[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[W]=r),r==null?t.removeAttribute(e):typeof r!="string"&&k(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function et(t,e,r,i,a=!1,u=!1,h=!1){var l=e||{},p=t.tagName==="OPTION";for(var g in e)g in r||(r[g]=null);i!==void 0&&(r.class=r.class?r.class+" "+i:i);var C=k(t),M=t.__attributes??(t.__attributes={});for(const s in r){let o=r[s];if(p&&s==="value"&&o==null){t.value=t.__value="",l[s]=o;continue}var x=l[s];if(o!==x){l[s]=o;var b=s[0]+s[1];if(b!=="$$"){if(b==="on"){const f={},d="$$"+s;let c=s.slice(2);var v=q(c);if(O(c)&&(c=c.slice(0,-7),f.capture=!0),!v&&x){if(o!=null)continue;t.removeEventListener(c,l[d],f),l[d]=null}if(o!=null)if(v)t[`__${c}`]=o,P([c]);else{let $=function(D){l[s].call(this,D)};l[d]=F(c,t,$,f)}else v&&(t[`__${c}`]=void 0)}else if(s==="style"&&o!=null)t.style.cssText=o+"";else if(s==="autofocus")V(t,!!o);else if(s==="__value"||s==="value"&&o!=null)t.value=t[s]=t.__value=o;else if(s==="selected"&&p)R(t,o);else{var n=s;a||(n=j(n));var w=n==="defaultValue"||n==="defaultChecked";if(o==null&&!u&&!w)if(M[s]=null,n==="value"||n==="checked"){let f=t;if(n==="value"){let d=f.defaultValue;f.removeAttribute(n),f.defaultValue=d}else{let d=f.defaultChecked;f.removeAttribute(n),f.defaultChecked=d}}else t.removeAttribute(s);else w||C.includes(n)&&(u||typeof o!="string")?t[n]=o:typeof o!="function"&&(_&&(n==="src"||n==="href"||n==="srcset")||y(t,n,o))}s==="style"&&"__styles"in t&&(t.__styles={})}}}return l}var A=new Map;function k(t){var e=A.get(t.nodeName);if(e)return e;A.set(t.nodeName,e=[]);for(var r,i=t,a=Element.prototype;a!==i;){r=B(i);for(var u in r)r[u].set&&e.push(u);i=L(i)}return e}function rt(){const t=window?window.getComputedStyle(document.body,null):{};return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function K(){let t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);const e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function G(t){document.body.style.paddingRight=t>0?`${t}px`:null}function J(){return window?document.body.clientWidth<window.innerWidth:!1}function it(){const t=K(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],r=e?parseInt(e.style.paddingRight||0,10):0;J()&&G(r+t)}function st(t,...e){return t.addEventListener(...e),()=>t.removeEventListener(...e)}function N(t){let e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))e=t.map(N).filter(Boolean).join(" ");else for(let r in t)t[r]&&(e&&(e+=" "),e+=r);return e}const ot=(...t)=>t.map(N).filter(Boolean).join(" ");function at(t){if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const i=Number.parseFloat(e),a=Number.parseFloat(r);return!i&&!a?0:(e=e.split(",")[0],r=r.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(r))*1e3)}function nt(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}const T=z(U());T.subscribe(t=>Y(t));function U(){var r,i,a;const t=((r=globalThis.document)==null?void 0:r.documentElement.getAttribute("data-bs-theme"))||"light",e=typeof((i=globalThis.window)==null?void 0:i.matchMedia)=="function"?(a=globalThis.window)==null?void 0:a.matchMedia("(prefers-color-scheme: dark)").matches:!1;return t==="dark"||t==="auto"&&e?"dark":"light"}function Y(t,e){var i;let r=t;if(arguments.length===1){if(r=(i=globalThis.document)==null?void 0:i.documentElement,!r)return;e=t,T.update(()=>e)}r.setAttribute("data-bs-theme",e)}export{et as a,m as b,ot as c,y as d,rt as e,it as f,at as g,G as h,st as i,tt as r,Z as s,nt as u};
