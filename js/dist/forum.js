(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const n=flarum.core.compat["forum/app"];var r=e.n(n);const i=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/CommentPost"];var o=e.n(a);r().initializers.add("datlechin/flarum-link-preview",(function(){(0,i.extend)(o().prototype,"oncreate",(function(){var e=r().forum.attribute("datlechin-link-preview.blacklist"),t=e?e.split(",").map((function(e){return e.trim()})):[];this.element.querySelectorAll(".Post-body a[rel]").forEach((function(e){var n=e.getAttribute("href"),i=n.split("/")[2].replace("www.","");if(!(e.classList.contains("PostMention")&&e.classList.contains("UserMention")||n!==e.textContent||t.includes(i)||t.includes(n))){if(!r().forum.attribute("datlechin-link-preview.convertMediaURLs")&&n.match(/\.(jpe?g|png|gif|svg|webp|mp3|mp4|m4a|wav)$/))return;var a=n.split("/")[0]+"//"+i,o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("img"),c=document.createElement("div"),s=document.createElement("div"),m=document.createElement("a"),p=document.createElement("div"),u=document.createElement("div"),f=document.createElement("a"),v=document.createElement("img"),h=document.createElement("i");o.classList.add("LinkPreview"),l.classList.add("LinkPreview-image"),c.classList.add("LinkPreview-main"),s.classList.add("LinkPreview-title"),m.target="_blank",p.classList.add("LinkPreview-description"),u.classList.add("LinkPreview-domain"),f.href=n,f.target="_blank",f.textContent=i,f.href=a,v.setAttribute("src","https://www.google.com/s2/favicons?sz=64&domain_url="+a),h.classList.add("fa","fa-spinner","fa-spin"),e.parentNode.insertBefore(o,e),o.appendChild(e),o.appendChild(l),l.appendChild(d),o.appendChild(c),c.appendChild(s),s.appendChild(m),c.appendChild(p),c.appendChild(u),u.appendChild(v),u.appendChild(f),l.appendChild(h),e.remove(),r().request({url:r().forum.attribute("apiUrl")+"/datlechin-link-preview?url="+encodeURIComponent(n),method:"GET"}).then((function(e){var t,o,l,c,s;h.remove(),d.setAttribute("src",null!=(t=e.image)?t:"https://www.google.com/s2/favicons?sz=64&domain_url="+a),m.href=null!=(o=e.url)?o:n,m.textContent=null!=(l=e.title)?l:i,p.textContent=null!=(c=e.description)?c:"",f.textContent=null!=(s=e.site_name)?s:i,e.error&&(m.textContent=r().translator.trans("datlechin-link-preview.forum.site_cannot_be_reached"),m.removeAttribute("href"),p.textContent="",f.removeAttribute("href"))}))}}))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map