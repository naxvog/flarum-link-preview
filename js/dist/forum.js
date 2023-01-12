(()=>{var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const i=flarum.core.compat["forum/app"];var n=t.n(i);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/CommentPost"];var r=t.n(a);function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}const l=flarum.core.compat["common/Component"];var c=function(t){var e,i;function n(){return t.apply(this,arguments)||this}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,s(e,i);var o=n.prototype;return o.oninit=function(e){var i=this;t.prototype.oninit.call(this,e),this.loading=!0,this.link=e.attrs.link,this.linkAttributes=function(){for(var t={},e=0,n=Object.values(i.link.attributes);e<n.length;e++){var o=n[e];t[o.name]=o.value}return t}(),this.data=null,this.useGoogleFavicons=e.attrs.useGoogleFavicons,this.fetchData()},o.view=function(){var t,e,i,n,o,a;return m("div",{className:"LinkPreview"},this.loading||this.getImage()?m("div",{className:"LinkPreview-image"},this.loading?m("i",{className:"fa fa-spinner fa-spin"}):m("img",{src:this.getImage(),"data-link-preview":!0})):null,m("div",{className:"LinkPreview-main"},m("div",{className:"LinkPreview-title"},this.getLink(this.loading?this.getDomain():null!=(t=null==(e=this.data)?void 0:e.title)?t:this.data.error)),m("div",{className:"LinkPreview-description"},this.loading?"":null!=(i=null==(n=this.data)?void 0:n.description)?i:""),m("div",{className:"LinkPreview-domain"},this.useGoogleFavicons?m("img",{src:this.getFavicon(),"data-link-preview":!0}):m("i",{className:"fa fa-external-link-alt"}),this.getLink(this.loading?this.getDomain():null!=(o=null==(a=this.data)?void 0:a.site_name)?o:this.getDomain()))))},o.oncreate=function(t){this.link.parentNode.insertBefore(t.dom,this.link)},o.getLink=function(t){return m("a",this.linkAttributes,t)},o.getHref=function(){return this.link.href},o.getDomain=function(){return this.getHref().split("/")[2]},o.getImage=function(){var t,e;return null!=(t=null==(e=this.data)?void 0:e.image)?t:this.getFavicon()},o.getFavicon=function(){return this.useGoogleFavicons?"https://www.google.com/s2/favicons?sz=64&domain_url="+this.getDomain():null},o.fetchData=function(){var t=this;app.request({url:app.forum.attribute("apiUrl")+"/datlechin-link-preview?url="+encodeURIComponent(this.getHref()),method:"GET"}).then((function(e){t.setData(e),t.loading=!1}))},o.setData=function(t){this.data=t,m.redraw()},n}(t.n(l)());n().initializers.add("datlechin/flarum-link-preview",(function(){(0,o.extend)(r().prototype,"oncreate",(function(){var t,e=n().forum.attribute("datlechin-link-preview.blacklist"),i=e?e.split(",").map((function(t){return t.trim()})):[],o=n().forum.attribute("datlechin-link-preview.whitelist"),a=o?o.split(",").map((function(t){return t.trim()})):[],r=null!=(t=n().forum.attribute("datlechin-link-preview.useGoogleFavicons"))&&t;this.element.querySelectorAll(".Post-body a[rel]").forEach((function(t){var e=t.href,o=e.split("/")[2].split(".").slice(-2).join(".");t.classList.contains("PostMention")||t.classList.contains("UserMention")||a.length&&!a.includes(o)||i.length&&i.includes(o)||e.replace(/\/$/,"")!==t.textContent.replace(/\/$/,"")||n().forum.attribute("datlechin-link-preview.convertMediaURLs")&&e.match(/\.(jpe?g|png|gif|svg|webp|mp3|mp4|m4a|wav)$/)||m.mount(t,{view:function(){return m(c,{link:t,useGoogleFavicons:r})}})}))}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map