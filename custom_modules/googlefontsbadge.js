!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var C;C="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,C.gfBadge=e()}}(function(){return function e(C,t,n){function o(r,i){if(!t[r]){if(!C[r]){var a="function"==typeof require&&require;if(!i&&a)return a(r,!0);if(l)return l(r,!0);var L=new Error("Cannot find module '"+r+"'");throw L.code="MODULE_NOT_FOUND",L}var s=t[r]={exports:{}};C[r][0].call(s.exports,function(e){var t=C[r][1][e];return o(t?t:e)},s,s.exports,e,C,t,n)}return t[r].exports}for(var l="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(e,C,t){(function(e){function t(e,C,t){function o(C){var t=c,n=g;return c=g=void 0,Z=C,h=e.apply(n,t)}function l(e){return Z=e,v=setTimeout(s,C),x?o(e):h}function a(e){var t=e-b,n=e-Z,o=C-t;return z?M(o,y-n):o}function L(e){var t=e-b,n=e-Z;return void 0===b||t>=C||0>t||z&&n>=y}function s(){var e=w();return L(e)?d(e):void(v=setTimeout(s,a(e)))}function d(e){return v=void 0,F&&c?o(e):(c=g=void 0,h)}function f(){void 0!==v&&clearTimeout(v),Z=0,c=b=g=v=void 0}function u(){return void 0===v?h:d(w())}function p(){var e=w(),t=L(e);if(c=arguments,g=this,b=e,t){if(void 0===v)return l(b);if(z)return v=setTimeout(s,C),o(b)}return void 0===v&&(v=setTimeout(s,C)),h}var c,g,y,h,v,b,Z=0,x=!1,z=!1,F=!0;if("function"!=typeof e)throw new TypeError(i);return C=r(C)||0,n(t)&&(x=!!t.leading,z="maxWait"in t,y=z?m(r(t.maxWait)||0,C):y,F="trailing"in t?!!t.trailing:F),p.cancel=f,p.flush=u,p}function n(e){var C=typeof e;return!!e&&("object"==C||"function"==C)}function o(e){return!!e&&"object"==typeof e}function l(e){return"symbol"==typeof e||o(e)&&v.call(e)==L}function r(e){if("number"==typeof e)return e;if(l(e))return a;if(n(e)){var C="function"==typeof e.valueOf?e.valueOf():e;e=n(C)?C+"":C}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var t=f.test(e);return t||u.test(e)?p(e.slice(2),t?2:8):d.test(e)?a:+e}var i="Expected a function",a=NaN,L="[object Symbol]",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,p=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,y=c||g||Function("return this")(),h=Object.prototype,v=h.toString,m=Math.max,M=Math.min,w=function(){return y.Date.now()};C.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,C,t){function n(e,C,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return o(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),l(e,C,{leading:n,maxWait:C,trailing:i})}function o(e){var C=typeof e;return!!e&&("object"==C||"function"==C)}var l=e("lodash.debounce"),r="Expected a function";C.exports=n},{"lodash.debounce":1}],3:[function(e,C,t){"use strict";var n=e("lodash.throttle");if("undefined"!=typeof window&&"undefined"!=typeof document){var o=document,l=o.body,r=o.createElement("div"),i=o.createElement("div"),a=o.createElement("a"),L=o.createElement("style");r.id="js-GoogleFontsBadge",r.className="GoogleFontsBadge",i.className="GoogleFontsBadge-inner",L.id="js-GoogleFontsBadgeStyles",L.innerHTML=".GoogleFontsBadge { transform: translateY(100%); position: fixed; z-index: 9999; bottom: 0; width: 100%; transition: transform 0.2s; pointer-events: none; } .GoogleFontsBadge__down { transform: translateY(100%) } .GoogleFontsBadge__up { transform: translateY(0) } .GoogleFontsBadge-inner { background: #222; } .GoogleFontsBadge-inner svg { width: 136px; display: block; fill: rgba(255, 255, 255, 0.70); } @media (min-width: 1024px) { .GoogleFontsBadge { width: auto } .GoogleFontsBadge-inner { background: transparent; } .GoogleFontsBadge-inner svg { fill: rgba(0, 0, 0, 0.54); } .GoogleFontsBadge__down { transform: translateY(0); } }",a.style.unset="all",a.style.border="none",a.style.background="transparent",a.style.padding="16px 16px 14px 16px",a.style.boxSizing="border-box",a.style.margin="0",a.style.display="block",a.style.pointerEvents="initial",a.setAttribute("target","_blank"),a.setAttribute("aria-label","Project made by Friends of Google Fonts. Follow this link to visit Google Fonts."),a.href="https://fonts.google.com",a.innerHTML='<svg width="100%" height="100%" viewBox="0 0 136 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M82.4,35.9L82.4,19.1L92.2,19.1L92.2,21.2L84.5,21.2L84.5,26.7L91.4,26.7L91.4,28.7L84.5,28.7L84.5,35.9L82.4,35.9L82.4,35.9Z" style="fill-rule:nonzero;"/><path d="M105.1,30.2C105.1,33.7 102.6,36.3 99.2,36.3C95.7,36.3 93.3,33.7 93.3,30.2C93.3,26.7 95.8,24.1 99.2,24.1C102.6,24 105.1,26.7 105.1,30.2ZM102.9,30.2C102.9,27.6 101.1,26 99.1,26C97.1,26 95.3,27.5 95.3,30.2C95.3,32.8 97.1,34.4 99.1,34.4C101.1,34.4 102.9,32.8 102.9,30.2Z" style="fill-rule:nonzero;"/><path d="M109,26C109.7,24.9 111.2,24 112.7,24C115.6,24 117.1,26 117.1,28.8L117.1,35.9L115,35.9L115,29.2C115,26.8 113.8,26 112.2,26C110.3,26 109.2,27.8 109.2,29.6L109.2,36L107,36L107,24.4L109.1,24.4L109,26Z" style="fill-rule:nonzero;"/><path d="M120.5,32.4L120.5,26.4L118.5,26.4L118.5,24.4L120.5,24.4L120.5,20.9L122.7,20.9L122.7,24.4L125.5,24.4L125.5,26.4L122.7,26.4L122.7,32.3C122.7,33.6 123.2,34.2 124.3,34.2C124.7,34.2 125,34.2 125.3,34L126.1,35.9C125.6,36.1 125.1,36.2 124.4,36.2C121.8,36.1 120.5,34.8 120.5,32.4Z" style="fill-rule:nonzero;"/><path d="M126.4,33L128.3,32.2C128.9,33.7 130,34.4 131.4,34.4C132.7,34.4 133.7,33.7 133.7,32.8C133.7,32.2 133.3,31.6 132.1,31.3L129.8,30.7C128.7,30.4 126.7,29.5 126.7,27.5C126.7,25.4 128.9,24.1 131.3,24.1C133.3,24.1 135,25 135.7,26.8L133.8,27.6C133.4,26.5 132.3,26.1 131.2,26.1C130,26.1 128.9,26.6 128.9,27.6C128.9,28.3 129.5,28.7 130.4,28.9L132.7,29.4C135,29.9 135.9,31.4 135.9,32.8C135.9,34.8 134.1,36.4 131.4,36.4C128.7,36.3 127.1,34.7 126.4,33Z" style="fill-rule:nonzero;"/><path d="M0.1,26.7C0.1,21.4 4.6,17.1 9.9,17.1C12.8,17.1 14.9,18.3 16.5,19.8L14.6,21.7C13.5,20.6 11.9,19.8 9.8,19.8C5.9,19.8 2.9,22.9 2.9,26.8C2.9,30.7 5.9,33.8 9.8,33.8C12.3,33.8 13.8,32.8 14.7,31.9C15.5,31.1 15.9,30.1 16.1,28.6L9.9,28.6L9.9,26L18.8,26C18.9,26.5 18.9,27 18.9,27.6C18.9,29.6 18.4,32 16.6,33.8C14.9,35.6 12.7,36.5 9.9,36.5C4.6,36.3 0.1,32 0.1,26.7Z" style="fill-rule:nonzero;"/><path d="M26.1,23.9C22.7,23.9 19.9,26.5 19.9,30.1C19.9,33.7 22.7,36.3 26.1,36.3C29.5,36.3 32.3,33.7 32.3,30.1C32.3,26.5 29.5,23.9 26.1,23.9ZM26.1,33.9C24.2,33.9 22.6,32.3 22.6,30.1C22.6,27.9 24.2,26.3 26.1,26.3C28,26.3 29.6,27.8 29.6,30.1C29.6,32.3 28,33.9 26.1,33.9Z" style="fill-rule:nonzero;"/><path d="M39.7,23.9C36.3,23.9 33.5,26.5 33.5,30.1C33.5,33.7 36.3,36.3 39.7,36.3C43.1,36.3 45.9,33.7 45.9,30.1C45.9,26.5 43.1,23.9 39.7,23.9ZM39.7,33.9C37.8,33.9 36.2,32.3 36.2,30.1C36.2,27.9 37.8,26.3 39.7,26.3C41.6,26.3 43.2,27.8 43.2,30.1C43.2,32.3 41.6,33.9 39.7,33.9Z" style="fill-rule:nonzero;"/><path d="M56.4,24.3L56.4,25.3L56.3,25.3C55.7,24.6 54.5,23.9 53,23.9C49.9,23.9 47,26.6 47,30.1C47,33.6 49.8,36.3 53,36.3C54.5,36.3 55.7,35.6 56.3,34.9L56.4,34.9L56.4,35.8C56.4,38.2 55.1,39.4 53.1,39.4C51.4,39.4 50.4,38.2 50,37.2L47.6,38.2C48.3,39.8 50.1,41.9 53.1,41.9C56.3,41.9 59,40 59,35.4L59,24.3L56.4,24.3ZM53.3,33.9C51.4,33.9 49.8,32.3 49.8,30.2C49.8,28 51.4,26.4 53.3,26.4C55.2,26.4 56.6,28 56.6,30.2C56.6,32.3 55.1,33.9 53.3,33.9Z" style="fill-rule:nonzero;"/><rect x="60.9" y="17.7" width="2.7" height="18.3"/><path d="M71.1,33.9C69.7,33.9 68.7,33.3 68.1,32L76.4,28.6L76.1,27.9C75.6,26.5 74,23.9 70.8,23.9C67.6,23.9 64.9,26.4 64.9,30.1C64.9,33.6 67.5,36.3 71.1,36.3C73.9,36.3 75.6,34.6 76.3,33.5L74.2,32.1C73.5,33.2 72.5,33.9 71.1,33.9ZM70.9,26.3C72,26.3 72.9,26.8 73.2,27.6L67.6,29.9C67.6,27.5 69.5,26.3 70.9,26.3Z" style="fill-rule:nonzero;"/><rect x="0" y="17" width="76.5" height="25" style="fill:none;"/><rect x="0" y="0" width="136" height="40" style="fill:none;"/><path d="M0.9,0.1L2.3,0.1L5,5L5.1,5L7.9,0.1L9.2,0.1L9.2,8.7L7.9,8.7L7.9,4L8,2.6L7.9,2.6L5.5,6.9L4.7,6.9L2.2,2.6L2.1,2.6L2.2,4L2.2,8.7L0.9,8.7L0.9,0.1Z" style="fill-rule:nonzero;"/><path d="M14.3,8C14.1,8.2 13.8,8.4 13.5,8.6C13.2,8.8 12.9,8.9 12.4,8.9C12.1,8.9 11.8,8.9 11.5,8.8C11.2,8.7 11,8.6 10.8,8.4C10.6,8.2 10.4,8 10.3,7.8C10.2,7.6 10.1,7.3 10.1,7C10.1,6.7 10.2,6.4 10.3,6.2C10.4,6 10.6,5.7 10.8,5.6C11,5.4 11.3,5.3 11.6,5.2C11.9,5.1 12.2,5.1 12.6,5.1C13,5.1 13.3,5.1 13.6,5.2C13.9,5.3 14.1,5.3 14.2,5.4L14.2,5C14.2,4.8 14.2,4.7 14.1,4.5C14,4.3 14,4.2 13.9,4.1C13.8,4 13.6,3.9 13.5,3.8C13.4,3.7 13.2,3.7 13,3.7C12.7,3.7 12.4,3.8 12.2,3.9C12,4 11.8,4.2 11.6,4.5L10.5,3.8C10.8,3.4 11.1,3.1 11.5,2.9C11.9,2.7 12.4,2.6 12.9,2.6C13.8,2.6 14.4,2.8 14.9,3.2C15.4,3.6 15.6,4.2 15.6,5L15.6,8.6L14.3,8.6L14.3,8L14.3,8ZM14.3,6.2C14.2,6.1 14,6.1 13.7,6C13.5,5.9 13.2,5.9 13,5.9C12.6,5.9 12.3,6 12,6.2C11.8,6.4 11.6,6.6 11.6,6.9C11.6,7 11.6,7.2 11.7,7.3C11.8,7.4 11.8,7.5 11.9,7.6C12,7.7 12.1,7.7 12.2,7.8C12.3,7.8 12.5,7.9 12.6,7.9C12.8,7.9 13,7.9 13.2,7.8C13.4,7.7 13.6,7.6 13.7,7.5C14,7.2 14.1,7 14.2,6.8C14.3,6.6 14.3,6.4 14.3,6.2Z" style="fill-rule:nonzero;"/><path d="M21.3,7.9C21.1,8.2 20.8,8.4 20.5,8.6C20.2,8.8 19.8,8.9 19.3,8.9C18.9,8.9 18.6,8.8 18.2,8.7C17.9,8.5 17.6,8.3 17.3,8C17,7.7 16.8,7.4 16.7,7C16.6,6.6 16.5,6.2 16.5,5.7C16.5,5.2 16.6,4.8 16.7,4.4C16.8,4 17.1,3.7 17.3,3.4C17.6,3.1 17.9,2.9 18.2,2.7C18.5,2.5 18.9,2.5 19.3,2.5C19.8,2.5 20.1,2.6 20.5,2.8C20.9,3 21.1,3.2 21.2,3.5L21.3,3.5L21.2,2.7L21.2,0.1L22.5,0.1L22.5,8.7L21.2,8.7L21.2,7.9L21.3,7.9ZM19.5,7.6C19.7,7.6 19.9,7.6 20.2,7.5C20.4,7.4 20.6,7.3 20.8,7.1C20.9,7 21,6.8 21.1,6.5C21.2,6.3 21.2,6 21.2,5.7C21.2,5.4 21.2,5.1 21.1,4.9C21,4.7 20.9,4.5 20.7,4.3C20.5,4.1 20.4,4 20.1,3.9C19.9,3.8 19.7,3.8 19.4,3.8C19.2,3.8 18.9,3.8 18.7,3.9C18.5,4 18.3,4.1 18.2,4.3C18.2,4.5 18.1,4.7 18,5C17.9,5.3 17.9,5.5 17.9,5.8C17.9,6.1 17.9,6.4 18,6.6C18.1,6.8 18.2,7 18.4,7.2C18.6,7.4 18.7,7.5 18.9,7.6C19.1,7.6 19.3,7.6 19.5,7.6Z" style="fill-rule:nonzero;"/><path d="M29.3,7.3C29.1,7.8 28.7,8.1 28.2,8.4C27.7,8.7 27.2,8.9 26.5,8.9C26.1,8.9 25.7,8.8 25.3,8.7C24.9,8.5 24.6,8.3 24.3,8C24,7.7 23.8,7.4 23.7,7C23.6,6.6 23.5,6.2 23.5,5.7C23.5,5.3 23.6,4.9 23.7,4.5C23.8,4.1 24,3.8 24.3,3.5C24.6,3.2 24.9,3 25.2,2.8C25.6,2.6 26,2.5 26.4,2.5C26.9,2.5 27.3,2.6 27.6,2.7C28,3 28.3,3.2 28.6,3.5C28.8,3.8 29,4.1 29.2,4.5C29.3,4.9 29.4,5.3 29.4,5.8L29.4,6.1L24.9,6.1C24.9,6.4 25,6.6 25.1,6.8C25.2,7 25.3,7.2 25.5,7.3C25.7,7.4 25.8,7.5 26,7.6C26.2,7.7 26.4,7.7 26.6,7.7C27,7.7 27.3,7.6 27.5,7.4C27.8,7.2 28,7 28.1,6.7L29.3,7.3ZM28,5C28,4.9 27.9,4.7 27.9,4.6C27.8,4.5 27.7,4.3 27.6,4.2C27.5,4.1 27.4,4 27.2,3.9C27,3.8 26.8,3.8 26.5,3.8C26.1,3.8 25.8,3.9 25.5,4.1C25.2,4.3 25,4.6 24.9,5L28,5Z" style="fill-rule:nonzero;"/><path d="M33,0.1L34.3,0.1L34.3,2.8L34.2,3.6L34.3,3.6C34.5,3.3 34.7,3.1 35,2.9C35.3,2.7 35.7,2.6 36.2,2.6C36.6,2.6 36.9,2.7 37.3,2.8C37.7,3 38,3.2 38.2,3.5C38.5,3.8 38.7,4.1 38.8,4.5C39,4.9 39,5.3 39,5.8C39,6.3 39,6.6 38.8,7C38.6,7.4 38.4,7.7 38.2,8C37.9,8.3 37.6,8.5 37.3,8.7C37,8.9 36.6,8.9 36.2,8.9C35.7,8.9 35.4,8.8 35,8.6C34.7,8.4 34.4,8.2 34.3,7.9L34.2,7.9L34.2,8.7L33,8.7L33,0.1ZM36,7.6C36.2,7.6 36.4,7.6 36.7,7.5C36.9,7.4 37.1,7.3 37.3,7.1C37.5,6.9 37.6,6.7 37.7,6.5C37.8,6.3 37.8,6 37.8,5.7C37.8,5.4 37.8,5.1 37.7,4.9C37.6,4.7 37.5,4.5 37.3,4.3C37,4.2 36.9,4.1 36.7,4C36.5,3.9 36.3,3.9 36,3.9C35.8,3.9 35.5,3.9 35.3,4C35.1,4.1 34.9,4.2 34.8,4.4C34.6,4.6 34.5,4.8 34.4,5C34.3,5.2 34.3,5.5 34.3,5.8C34.3,6.1 34.3,6.4 34.4,6.6C34.5,6.8 34.6,7 34.8,7.2C35,7.4 35.1,7.5 35.3,7.6C35.5,7.6 35.8,7.6 36,7.6Z" style="fill-rule:nonzero;"/><path d="M41.7,8.4L39.3,2.9L40.8,2.9L42.4,6.8L42.5,6.8L44.1,2.9L45.6,2.9L41.9,11.4L40.5,11.4L41.7,8.4Z" style="fill-rule:nonzero;"/><path d="M51.3,0C51.5,0 51.7,0 51.9,0.1C52.1,0.1 52.2,0.2 52.4,0.3L52,1.4C51.9,1.4 51.8,1.3 51.7,1.3C51.6,1.3 51.5,1.3 51.3,1.3C51.1,1.3 50.9,1.4 50.7,1.5C50.5,1.6 50.5,1.9 50.5,2.2L50.5,2.8L52,2.8L52,4L50.5,4L50.5,8.7L49.2,8.7L49.2,4L48.1,4L48.1,2.8L49.2,2.8L49.2,2.1C49.2,1.8 49.3,1.5 49.4,1.2C49.5,0.9 49.6,0.7 49.8,0.5C50,0.3 50.2,0.2 50.5,0.1C50.8,0 51,0 51.3,0Z" style="fill-rule:nonzero;"/><path d="M53.1,2.8L54.4,2.8L54.4,3.7L54.5,3.7C54.6,3.5 54.7,3.4 54.8,3.3C54.9,3.2 55,3 55.2,2.9C55.4,2.8 55.5,2.7 55.7,2.7C55.9,2.6 56,2.6 56.2,2.6C56.4,2.6 56.6,2.6 56.7,2.7C56.8,2.7 57,2.8 57.1,2.8L56.7,4C56.6,4 56.5,3.9 56.4,3.9C56.3,3.9 56.2,3.9 56,3.9C55.8,3.9 55.6,3.9 55.4,4C55.2,4.1 55.1,4.2 54.9,4.4C54.8,4.6 54.7,4.7 54.6,4.9C54.5,5.1 54.5,5.3 54.5,5.6L54.5,8.7L53.2,8.7L53.2,2.8L53.1,2.8Z" style="fill-rule:nonzero;"/><path d="M58.5,1.8C58.2,1.8 58,1.7 57.9,1.5C57.8,1.3 57.6,1.1 57.6,0.9C57.6,0.7 57.7,0.4 57.9,0.3C58.1,0.1 58.3,0 58.5,0C58.7,0 59,0.1 59.1,0.3C59.3,0.5 59.4,0.7 59.4,0.9C59.4,1.1 59.3,1.4 59.1,1.5C58.9,1.6 58.8,1.8 58.5,1.8ZM57.9,8.7L57.9,2.8L59.2,2.8L59.2,8.7L57.9,8.7Z" style="fill-rule:nonzero;"/><path d="M66,7.3C65.8,7.8 65.4,8.1 64.9,8.4C64.4,8.7 63.9,8.9 63.2,8.9C62.8,8.9 62.4,8.8 62,8.7C61.6,8.5 61.3,8.3 61,8C60.7,7.7 60.5,7.4 60.4,7C60.3,6.6 60.2,6.2 60.2,5.7C60.2,5.3 60.3,4.9 60.4,4.5C60.5,4.1 60.7,3.8 61,3.5C61.3,3.3 61.6,3 62,2.9C62.4,2.7 62.8,2.6 63.2,2.6C63.7,2.6 64.1,2.7 64.4,2.8C64.8,3 65.1,3.2 65.3,3.4C65.5,3.7 65.7,4 65.9,4.4C66,4.8 66.1,5.2 66.1,5.7L66.1,6L61.6,6C61.6,6.3 61.7,6.5 61.8,6.7C61.9,7 62,7.1 62.2,7.3C62.4,7.4 62.5,7.5 62.7,7.6C62.9,7.7 63.1,7.7 63.3,7.7C63.7,7.7 64,7.6 64.2,7.4C64.4,7.2 64.7,7 64.8,6.7L66,7.3ZM64.8,5C64.8,4.9 64.7,4.7 64.7,4.6C64.6,4.5 64.5,4.3 64.4,4.2C64.3,4.1 64.1,4 63.9,3.9C63.7,3.8 63.5,3.8 63.2,3.8C62.8,3.8 62.5,3.9 62.2,4.1C61.9,4.3 61.7,4.6 61.6,5L64.8,5Z" style="fill-rule:nonzero;"/><path d="M68.4,3.6C68.6,3.3 68.9,3.1 69.2,2.9C69.5,2.7 69.9,2.6 70.3,2.6C71,2.6 71.6,2.8 72,3.3C72.4,3.7 72.6,4.3 72.6,5.1L72.6,8.7L71.3,8.7L71.3,5.2C71.3,4.7 71.2,4.3 70.9,4.1C70.7,3.9 70.4,3.8 70,3.8C69.8,3.8 69.6,3.8 69.4,3.9C69.2,4 69.1,4.1 68.9,4.3C68.8,4.5 68.7,4.7 68.6,4.9C68.5,5.1 68.5,5.3 68.5,5.6L68.5,8.7L67.2,8.7L67.2,2.8L68.5,2.8L68.5,3.6L68.4,3.6Z" style="fill-rule:nonzero;"/><path d="M78.3,7.9C78.1,8.2 77.8,8.4 77.5,8.6C77.2,8.8 76.8,8.9 76.3,8.9C75.9,8.9 75.6,8.8 75.2,8.7C74.9,8.5 74.6,8.3 74.3,8C74,7.7 73.8,7.4 73.7,7C73.5,6.6 73.5,6.2 73.5,5.7C73.5,5.2 73.6,4.8 73.7,4.4C73.9,4 74.1,3.7 74.3,3.4C74.6,3.1 74.9,2.9 75.2,2.7C75.5,2.5 75.9,2.5 76.3,2.5C76.8,2.5 77.1,2.6 77.5,2.8C77.9,3 78.1,3.2 78.2,3.5L78.3,3.5L78.2,2.7L78.2,0.1L79.5,0.1L79.5,8.7L78.2,8.7L78.2,7.9L78.3,7.9ZM76.5,7.6C76.7,7.6 76.9,7.6 77.2,7.5C77.4,7.4 77.6,7.3 77.8,7.1C77.9,7 78,6.8 78.1,6.5C78.2,6.3 78.2,6 78.2,5.7C78.2,5.4 78.2,5.1 78.1,4.9C78,4.7 77.9,4.5 77.7,4.3C77.5,4.1 77.4,4 77.1,3.9C76.9,3.8 76.7,3.8 76.4,3.8C76.2,3.8 75.9,3.8 75.7,3.9C75.5,4 75.3,4.1 75.2,4.3C75.2,4.5 75,4.7 75,5C74.9,5.2 74.9,5.5 74.9,5.8C74.9,6.1 74.9,6.4 75,6.6C75,6.8 75.2,7 75.3,7.1C75.5,7.3 75.6,7.4 75.8,7.5C76.1,7.6 76.3,7.6 76.5,7.6Z" style="fill-rule:nonzero;"/><path d="M83,8.9C82.6,8.9 82.3,8.9 82,8.8C81.7,8.7 81.5,8.6 81.2,8.4C81,8.2 80.8,8.1 80.7,7.9C80.6,7.7 80.4,7.5 80.4,7.3L81.6,6.8C81.8,7 82,7.3 82.2,7.5C82.5,7.7 82.7,7.7 83,7.7C83.3,7.7 83.6,7.6 83.8,7.5C84,7.4 84.1,7.2 84.1,7C84.1,6.8 84,6.7 83.9,6.6C83.8,6.5 83.5,6.4 83.1,6.3L82.3,6.1C82.1,6.1 81.9,6 81.7,5.9C81.5,5.8 81.3,5.7 81.2,5.6C81.1,5.5 80.9,5.3 80.8,5.1C80.7,4.9 80.7,4.7 80.7,4.4C80.7,4.1 80.8,3.9 80.9,3.6C81,3.4 81.2,3.2 81.4,3C81.6,2.8 81.9,2.7 82.2,2.7C82.5,2.6 82.8,2.6 83.1,2.6C83.4,2.6 83.6,2.6 83.9,2.7C84,2.8 84.2,2.8 84.4,3C84.6,3.1 84.8,3.3 85,3.4C85.2,3.6 85.3,3.8 85.4,4L84.2,4.5C84.1,4.2 83.9,4.1 83.7,3.9C83.5,3.8 83.2,3.7 83,3.7C82.9,3.7 82.8,3.7 82.7,3.7C82.6,3.7 82.5,3.8 82.4,3.8C82.2,4 82.1,4 82,4.1C81.9,4.2 82,4.3 82,4.4C82,4.6 82.1,4.7 82.2,4.8C82.3,4.9 82.6,5 82.8,5L83.7,5.2C84.3,5.4 84.8,5.6 85,5.9C85.2,6.2 85.4,6.6 85.4,7C85.4,7.3 85.3,7.5 85.2,7.7C85.1,7.9 84.9,8.1 84.7,8.3C84.5,8.5 84.2,8.6 83.9,8.7C83.7,8.8 83.4,8.9 83,8.9Z" style="fill-rule:nonzero;"/><path d="M91.8,2.6C92.2,2.6 92.7,2.7 93,2.8C93.4,3 93.7,3.2 94,3.5C94.3,3.8 94.5,4.1 94.6,4.5C94.7,4.9 94.8,5.3 94.8,5.7C94.8,6.1 94.7,6.6 94.6,6.9C94.4,7.3 94.2,7.6 94,7.9C93.7,8.2 93.4,8.4 93,8.6C92.6,8.8 92.2,8.8 91.8,8.8C91.4,8.8 91,8.8 90.6,8.6C90.2,8.4 89.9,8.2 89.6,7.9C89.3,7.6 89.1,7.3 89,6.9C88.8,6.5 88.8,6.1 88.8,5.7C88.8,5.3 88.9,4.8 89,4.5C89.2,4.1 89.4,3.8 89.6,3.5C89.9,3.2 90.2,3 90.6,2.8C91,2.7 91.4,2.6 91.8,2.6ZM91.8,7.6C92,7.6 92.2,7.6 92.4,7.5C92.6,7.4 92.8,7.3 93,7.1C93.2,6.9 93.3,6.7 93.4,6.5C93.5,6.3 93.5,6 93.5,5.7C93.5,5.4 93.5,5.1 93.4,4.9C93.3,4.7 93.2,4.5 93,4.3C92.8,4.1 92.7,4 92.4,3.9C92.2,3.8 92,3.8 91.8,3.8C91.6,3.8 91.4,3.8 91.2,3.9C91,4 90.8,4.1 90.6,4.3C90.4,4.5 90.3,4.7 90.2,4.9C90.1,5.1 90.1,5.4 90.1,5.7C90.1,6 90.1,6.3 90.2,6.5C90.3,6.7 90.4,6.9 90.6,7.1C90.8,7.3 90.9,7.4 91.2,7.5C91.4,7.6 91.6,7.6 91.8,7.6Z" style="fill-rule:nonzero;"/><path d="M98.5,0C98.7,0 98.9,0 99.1,0.1C99.3,0.2 99.4,0.2 99.6,0.3L99.2,1.5C99.1,1.5 99,1.4 98.9,1.4C98.8,1.4 98.7,1.4 98.5,1.4C98.3,1.4 98.1,1.5 97.9,1.6C97.7,1.7 97.7,2 97.7,2.3L97.7,2.9L99.2,2.9L99.2,4L97.7,4L97.7,8.7L96.4,8.7L96.4,4L95.3,4L95.3,2.8L96.4,2.8L96.4,2.1C96.4,1.8 96.5,1.5 96.6,1.2C96.7,1 96.8,0.7 97,0.6C97.2,0.4 97.4,0.3 97.7,0.2C97.9,0 98.2,0 98.5,0Z" style="fill-rule:nonzero;"/></svg>',i.appendChild(a),r.appendChild(i);var s={init:function(e){function C(){r.classList.remove("GoogleFontsBadge__down"),r.classList.add("GoogleFontsBadge__up")}function t(){r.classList.add("GoogleFontsBadge__down"),r.classList.remove("GoogleFontsBadge__up")}function i(){console.log("start, hide")}function a(){0===l.scrollTop?C():l.scrollTop<s&&-1*(l.scrollTop-s)>250?C():t(),s=l.scrollTop}var s=0;l.appendChild(r),o.head.appendChild(L),o.addEventListener("touchmove",n(i,500),!1),o.addEventListener("scroll",n(a,500),!1),0===l.scrollTop&&C()},main:function(e){s.init(e)},remove:function(){l.removeChild(r),o.head.removeChild(L)}},d=function(e){return s.main.call(e),s};"object"==typeof C&&"undefined"!=typeof C.exports?C.exports=d:window.gfBadge=d}},{"lodash.throttle":2}]},{},[3])(3)});