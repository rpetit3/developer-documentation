!function(){if("ontouchstart"in window){var e,t,n,i,o,s,r={};e=function(e,t){return Math.abs(e[0]-t[0])>5||Math.abs(e[1]-t[1])>5},t=function(e){this.startXY=[e.touches[0].clientX,e.touches[0].clientY],this.threshold=!1},n=function(t){return this.threshold?!1:void(this.threshold=e(this.startXY,[t.touches[0].clientX,t.touches[0].clientY]))},i=function(t){if(!this.threshold&&!e(this.startXY,[t.changedTouches[0].clientX,t.changedTouches[0].clientY])){var n=t.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.simulated=!0,t.target.dispatchEvent(i)}},o=function(e){var t=Date.now(),n=t-r.time,i=e.clientX,o=e.clientY,a=[Math.abs(r.x-i),Math.abs(r.y-o)],c=s(e.target,"A")||e.target,h=c.nodeName,u="A"===h,l=window.navigator.standalone&&u&&e.target.getAttribute("href");return r.time=t,r.x=i,r.y=o,(!e.simulated&&(500>n||1500>n&&a[0]<50&&a[1]<50)||l)&&(e.preventDefault(),e.stopPropagation(),!l)?!1:(l&&(window.location=c.getAttribute("href")),void(c&&c.classList&&(c.classList.add("energize-focus"),window.setTimeout(function(){c.classList.remove("energize-focus")},150))))},s=function(e,t){for(var n=e;n!==document.body;){if(!n||n.nodeName===t)return n;n=n.parentNode}return null},document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",n,!1),document.addEventListener("touchend",i,!1),document.addEventListener("click",o,!0)}}(),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(e){"use strict";function t(t){if(t&&""!==t){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+t+"']").addClass("active");for(var n=0;n<c.length;n++)$(".highlight."+c[n]).hide();$(".highlight."+t).show(),e.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function n(e){return"string"!=typeof e?{}:(e=e.trim().replace(/^(\?|#|&)/,""),e?e.split("&").reduce(function(e,t){var n=t.replace(/\+/g," ").split("="),i=n[0],o=n[1];return i=decodeURIComponent(i),o=void 0===o?null:decodeURIComponent(o),e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(o):e[i]=[e[i],o]:e[i]=o,e},{}):{})}function i(e){return e?Object.keys(e).sort().map(function(t){var n=e[t];return Array.isArray(n)?n.sort().map(function(e){return encodeURIComponent(t)+"="+encodeURIComponent(e)}).join("&"):encodeURIComponent(t)+"="+encodeURIComponent(n)}).join("&"):""}function o(){if(location.search.length>=1){var e=n(location.search).language;if(e)return e;if(-1!=jQuery.inArray(location.search.substr(1),c))return location.search.substr(1)}return!1}function s(e){var t=n(location.search);return t.language?(t.language=e,i(t)):e}function r(e){if(history){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history.pushState({},"","?"+s(e)+"#"+t),localStorage.setItem("language",e)}}function a(e){var n=localStorage.getItem("language");c=e;var i=o();i?(t(i),localStorage.setItem("language",i)):t(null!==n&&-1!=jQuery.inArray(n,c)?n:c[0])}var c=[];e.setupLanguages=a,e.activateLanguage=t,$(function(){$(".lang-selector a").on("click",function(){var e=$(this).data("language-name");return r(e),t(e),!1}),window.onpopstate=function(){t(o())}})}(window),/*! jQuery UI - v1.11.3 - 2015-02-12
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){/*!
   * jQuery UI Widget 1.11.3
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/jQuery.widget/
   */
var t=0,n=Array.prototype.slice;e.cleanData=function(t){return function(n){var i,o,s;for(s=0;null!=(o=n[s]);s++)try{i=e._data(o,"events"),i&&i.remove&&e(o).triggerHandler("remove")}catch(r){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var o,s,r,a,c={},h=t.split(".")[0];return t=t.split(".")[1],o=h+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[h]=e[h]||{},s=e[h][t],r=e[h][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new r(e,t)},e.extend(r,s,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),a=new n,a.options=e.widget.extend({},a.options),e.each(i,function(t,i){return e.isFunction(i)?void(c[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},o=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,s=this._superApply;return this._super=e,this._superApply=o,t=i.apply(this,arguments),this._super=n,this._superApply=s,t}}()):void(c[t]=i)}),r.prototype=e.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||t:t},c,{constructor:r,namespace:h,widgetName:t,widgetFullName:o}),s?(e.each(s._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,r,n._proto)}),delete s._childConstructors):n._childConstructors.push(r),e.widget.bridge(t,r),r},e.widget.extend=function(t){for(var i,o,s=n.call(arguments,1),r=0,a=s.length;a>r;r++)for(i in s[r])o=s[r][i],s[r].hasOwnProperty(i)&&void 0!==o&&(t[i]=e.isPlainObject(o)?e.isPlainObject(t[i])?e.widget.extend({},t[i],o):e.widget.extend({},o):o);return t},e.widget.bridge=function(t,i){var o=i.prototype.widgetFullName||t;e.fn[t]=function(s){var r="string"==typeof s,a=n.call(arguments,1),c=this;return r?this.each(function(){var n,i=e.data(this,o);return"instance"===s?(c=i,!1):i?e.isFunction(i[s])&&"_"!==s.charAt(0)?(n=i[s].apply(i,a),n!==i&&void 0!==n?(c=n&&n.jquery?c.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+s+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+s+"'")}):(a.length&&(s=e.widget.extend.apply(null,[s].concat(a))),this.each(function(){var t=e.data(this,o);t?(t.option(s||{}),t._init&&t._init()):e.data(this,o,new i(s,this))})),c}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,o,s,r=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(r={},i=t.split("."),t=i.shift(),i.length){for(o=r[t]=e.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)o[i[s]]=o[i[s]]||{},o=o[i[s]];if(t=i.pop(),1===arguments.length)return void 0===o[t]?null:o[t];o[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];r[t]=n}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,i){var o,s=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=o=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,o=this.widget()),e.each(i,function(i,r){function a(){return t||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?s[r]:r).apply(s,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||e.guid++);var c=i.match(/^([\w:-]*)\s*(.*)$/),h=c[1]+s.eventNamespace,u=c[2];u?o.delegate(u,h,a):n.bind(h,a)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var o,s,r=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent)for(o in s)o in n||(n[o]=s[o]);return this.element.trigger(n,i),!(e.isFunction(r)&&r.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?n:o.effect||n:t;o=o||{},"number"==typeof o&&(o={duration:o}),r=!e.isEmptyObject(o),o.complete=s,o.delay&&i.delay(o.delay),r&&e.effects&&e.effects.effect[a]?i[t](o):a!==t&&i[a]?i[a](o.duration,o.easing,s):i.queue(function(n){e(this)[t](),s&&s.call(i[0]),n()})}});e.widget}),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,n,i){"use strict";var o="tocify",s="tocify-focus",r="tocify-hover",a="tocify-hide",c="tocify-header",h="."+c,u="tocify-subheader",l="."+u,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var n=this;n.tocifyWrapper=e(".tocify-wrapper"),n.extendPageScroll=!0,n.items=[],n._generateToc(),n.cachedHeights=[],n.cachedAnchors=[],n._addCSSClasses(),n.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),n._setEventHandlers(),e(t).load(function(){n._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){n.extendPageScroll=!1},0)})})},_generateToc:function(){var t,n,i=this,s=i.options.ignoreSelector;return t=e(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),t.length?(i.element.addClass(o),void t.each(function(t){e(this).is(s)||(n=e("<ul/>",{id:c+t,"class":c}).append(i._nestElements(e(this),t)),i.element.append(n),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(i.options.selectors).length?e(this).filter(i.options.selectors).each(function(){e(this).is(s)||i._appendSubheaders.call(this,i,n)}):e(this).find(i.options.selectors).each(function(){e(this).is(s)||i._appendSubheaders.call(this,i,n)})}))})):void i.element.addClass(a)},_setActiveElement:function(e){var n=this,i=t.location.hash.substring(1),o=n.element.find("li[data-unique='"+i+"']");return i.length?(n.element.find("."+n.focusClass).removeClass(n.focusClass),o.addClass(n.focusClass),n.options.showAndHide&&o.click()):(n.element.find("."+n.focusClass).removeClass(n.focusClass),!i.length&&e&&n.options.highlightDefault&&n.element.find(f).first().addClass(n.focusClass)),n},_nestElements:function(t,n){var i,o,s;return i=e.grep(this.items,function(e){return e===t.text()}),this.items.push(i.length?t.text()+n:t.text()),s=this._generateHashValue(i,t,n),o=e("<li/>",{"class":d,"data-unique":s}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:s,"data-unique":s})),o},_generateHashValue:function(e,t,n){var i="",o=this.options.hashGenerator;if("pretty"===o){for(i=t.text().toLowerCase().replace(/\s/g,"-"),i=i.replace(/[^\x00-\x7F]/g,"");i.indexOf("--")>-1;)i=i.replace(/--/g,"-");for(;i.indexOf(":-")>-1;)i=i.replace(/:-/g,"-")}else i="function"==typeof o?o(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(i+=""+n),i},_appendSubheaders:function(t,n){var i=e(this).index(t.options.selectors),o=e(t.options.selectors).eq(i-1),s=+e(this).prop("tagName").charAt(1),r=+o.prop("tagName").charAt(1);r>s?t.element.find(l+"[data-tag="+s+"]").last().append(t._nestElements(e(this),i)):s===r?n.find(f).last().after(t._nestElements(e(this),i)):n.find(f).last().after(e("<ul/>",{"class":u,"data-tag":s})).next(l).append(t._nestElements(e(this),i))},_setEventHandlers:function(){var o=this;this.element.on("click.tocify","li",function(){if(o.options.history&&(t.location.hash=e(this).attr("data-unique")),o.element.find("."+o.focusClass).removeClass(o.focusClass),e(this).addClass(o.focusClass),o.options.showAndHide){var n=e('li[data-unique="'+e(this).attr("data-unique")+'"]');o._triggerShow(n)}o._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(o.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==o.options.theme&&e(this).removeClass(o.hoverClass)}}),e(t).on("resize",function(){o.calculateHeights()}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var s,r,a,c,h=e(t).scrollTop(),u=e(t).height(),l=e(n).height(),d=e("body")[0].scrollHeight;if(o.options.extendPage&&(o.webkit&&h>=d-u-o.options.extendPageOffset||!o.webkit&&u+h>l-o.options.extendPageOffset)&&!e(g).length){if(r=e('div[data-unique="'+e(f).last().attr("data-unique")+'"]'),!r.length)return;a=r.offset().top,e(o.options.context).append(e("<div />",{"class":p,height:Math.abs(a-h)+"px","data-unique":p})),o.extendPageScroll&&(c=o.element.find("li.active"),o._scrollTo(e("div[data-unique="+c.attr("data-unique")+"]")))}setTimeout(function(){var r,a=null;0==o.cachedHeights.length&&o.calculateHeights();var c=e(t).scrollTop();if(o.cachedAnchors.each(function(e){return o.cachedHeights[e]-c<0?void(a=e):!1}),r=e(o.cachedAnchors[a]).attr("data-unique"),s=e('li[data-unique="'+r+'"]'),o.options.highlightOnScroll&&s.length&&!s.hasClass(o.focusClass)){o.element.find("."+o.focusClass).removeClass(o.focusClass),s.addClass(o.focusClass);var h=o.tocifyWrapper,u=e(s).closest(".tocify-header"),l=u.offset().top,d=h.offset().top,f=l-d;if(f>=e(t).height()){var p=f+h.scrollTop();h.scrollTop(p)}else 0>f&&h.scrollTop(0)}o.options.scrollHistory&&t.location.hash!=="#"+r&&r!==i&&(history.replaceState?history.replaceState({},"","#"+r):(scrollV=n.body.scrollTop,scrollH=n.body.scrollLeft,location.hash="#"+r,n.body.scrollTop=scrollV,n.body.scrollLeft=scrollH)),o.options.showAndHideOnScroll&&o.options.showAndHide&&o._triggerShow(s,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var n=e(t.options.context).find("div[data-unique]");n.each(function(n){var i=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[n]=i}),t.cachedAnchors=n},show:function(t){var n=this;if(!t.is(":visible"))switch(t.find(l).length||t.parent().is(h)||t.parent().is(":visible")?t.children(l).length||t.parent().is(h)||(t=t.closest(l)):t=t.parents(l).add(t),n.options.showEffect){case"none":t.show();break;case"show":t.show(n.options.showEffectSpeed);break;case"slideDown":t.slideDown(n.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(n.options.showEffectSpeed);break;default:t.show()}return n.hide(e(l).not(t.parent().is(h)?t:t.closest(h).find(l).not(t.siblings()))),n},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var n=this;return e.parent().is(h)||e.next().is(l)?n.show(e.next(l),t):e.parent().is(l)&&n.show(e.parent(),t),n},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(h+","+l).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=s,this.hoverClass=r),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var n=this,i=n.options.smoothScroll||0,o=n.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(o)?o.call():o)+"px"},{duration:i})}),n}})}),/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,o=this,s=o.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,o=this.getListenersAsObject(e),s="object"==typeof n;for(i in o)o.hasOwnProperty(i)&&-1===t(o[i],n)&&o[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,o,s=this.getListenersAsObject(e);for(o in s)s.hasOwnProperty(o)&&(i=t(s[o],n),-1!==i&&s[o].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,o,s=e?this.removeListener:this.addListener,r=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(o=t[i])&&("function"==typeof o?s.call(this,i,o):r.call(this,i,o));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,o,s,r=this.getListenersAsObject(e);for(o in r)if(r.hasOwnProperty(o))for(i=r[o].length;i--;)n=r[o][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return o.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}.call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var o=function(){};n.removeEventListener?o=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(o=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function o(e){return"[object Array]"===d.call(e)}function s(e){var t=[];if(o(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function r(e,t,n){if(!(this instanceof r))return new r(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),h&&(this.jqDeferred=new h.Deferred);var o=this;setTimeout(function(){o.check()})}function a(e){this.img=e}function c(e){this.src=e,f[e]=this}var h=e.jQuery,u=e.console,l=void 0!==u,d=Object.prototype.toString;r.prototype=new t,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var o=n.querySelectorAll("img"),s=0,r=o.length;r>s;s++){var a=o[s];this.addImage(a)}}},r.prototype.addImage=function(e){var t=new a(e);this.images.push(t)},r.prototype.check=function(){function e(e,o){return t.options.debug&&l&&u.log("confirm",e,o),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return void this.complete();for(var o=0;i>o;o++){var s=this.images[o];s.on("confirm",e),s.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},h&&(h.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(h(this))}),a.prototype=new t,a.prototype.check=function(){var e=f[this.img.src]||new c(this.img.src);if(e.isConfirmed)return void this.confirm(e.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var f={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},r}),function(e){"use strict";function t(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var n=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},i=function(){e.toc=$("#toc").tocify({selectors:"h1, h2, h3",extendPage:!0,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(e,t){return t.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(n),$(".tocify-item").click(n)};$(function(){i(),t(),$(".content").imagesLoaded(function(){e.toc.calculateHeights()})})}(window);