(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const n=flarum.core.compat["forum/app"];var i=t.n(n);const r=flarum.core.compat["common/extend"],o=flarum.core.compat["forum/components/CommentPost"];var a=t.n(o);function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}const s=flarum.core.compat["common/Component"];var c=t.n(s);const u=flarum.core.compat["common/helpers/icon"];var p=t.n(u);const f=flarum.core.compat["common/components/Link"];var d=t.n(f);const v=flarum.core.compat["common/utils/classList"];var h=t.n(v);const g=flarum.core.compat["common/components/LoadingIndicator"];var y=t.n(g),b=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,l(e,n);var r=i.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.link=e.attrs.link,this.linkAttributes=Object.assign.apply(Object,[{}].concat(Array.from(this.link.attributes,(function(t){var e,n=t.name,i=t.value;return(e={})[n]=i,e})))),this.data=null,this.useGoogleFavicons=e.attrs.useGoogleFavicons,this.fetchData()},r.view=function(){var t,e,n,i,r,o,a={loading:this.loading};return m("div",{className:"LinkPreview "+h()(a)},this.loading||this.getImage()?m("div",{className:"LinkPreview-image"},this.loading?m(y(),{display:"unset",containerClassName:h()("LinkPreview-loading",this.loading&&"active"),size:"small"}):m("img",{src:this.getImage(),"data-link-preview":!0})):null,m("div",{className:"LinkPreview-main"},m("div",{className:"LinkPreview-title"},this.getLink(null!=(t=null==(e=this.data)?void 0:e.title)?t:null==(n=this.data)?void 0:n.error)),m("div",{className:"LinkPreview-description"},this.loading?"":null!=(i=null==(r=this.data)?void 0:r.description)?i:""),m("div",{className:"LinkPreview-domain"},this.useGoogleFavicons?m("img",{src:this.getFavicon(),"data-link-preview":!0}):p()("fas fa-external-link-alt"),this.getLink(null==(o=this.data)?void 0:o.site_name))))},r.oncreate=function(t){this.link.parentNode.insertBefore(t.dom,this.link)},r.getLink=function(t){return m(d(),this.linkAttributes,this.loading?this.getDomain():null!=t?t:this.getDomain())},r.getHref=function(){return this.link.href},r.getDomain=function(){return this.getHref().split("/")[2]},r.getImage=function(){var t,e;return null!=(t=null==(e=this.data)?void 0:e.image)?t:this.getFavicon()},r.getFavicon=function(){return this.useGoogleFavicons?"https://www.google.com/s2/favicons?sz=64&domain_url="+this.getDomain():null},r.fetchData=function(){var t=this;app.request({url:app.forum.attribute("apiUrl")+"/datlechin-link-preview?url="+encodeURIComponent(this.getHref()),method:"GET"}).then((function(e){t.setData(e),t.loading=!1}))},r.setData=function(t){this.data=t,m.redraw()},i}(c());function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}i().initializers.add("datlechin/flarum-link-preview",(function(){(0,r.extend)(a().prototype,"refreshContent",(function(){var t,e=function(t){var e=i().forum.attribute(t);return e?e.split(/[,\n]/).map((function(t){return t.trim()})):[]},n=function(t,e){if(0===e.length)return!1;if(e.includes(t))return!0;for(var n,i=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e);!(n=i()).done;){var r=n.value.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace("\\*",".*").replace("\\?",".");if(t.match(new RegExp(r,"i")))return!0}return!1},r=e("datlechin-link-preview.blacklist"),o=e("datlechin-link-preview.whitelist"),a=null!=(t=i().forum.attribute("datlechin-link-preview.useGoogleFavicons"))&&t;this.element.querySelectorAll(".Post-body a[rel]").forEach((function(t){if(!t.classList.contains("PostMention")&&!t.classList.contains("UserMention")){var e=t.href.replace(/^https?:\/\/(.+?)\/?$/i,"$1");o.length&&!n(e,o)||r.length&&n(e,r)||t.href.replace(/\/$/,"")!==t.textContent.replace(/\/$/,"")||i().forum.attribute("datlechin-link-preview.convertMediaURLs")&&e.match(/\.(jpe?g|png|gif|svg|webp|mp3|mp4|m4a|wav)$/)||m.mount(t,{view:function(){return m(b,{link:t,useGoogleFavicons:a})}})}}))}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map