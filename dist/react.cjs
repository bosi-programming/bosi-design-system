'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

;/* empty css         */
const jsxRuntime = require('react/jsx-runtime');
require('react');

const baseButtonClasses = "hover:scale-110 rounded-lg cursor-pointer border-none outline-transparent text-body hover:brightness-75 disabled:cursor-not-allowed disabled:bg-gray-15";
const actionClasses = {
  error: "bg-error text-white",
  info: "bg-info text-white",
  warning: "bg-warning text-white",
  success: "bg-success text-white"
};
const colorsClasses = {
  default: actionClasses["info"],
  primary: "bg-primary-on-light text-white dark:bg-primary-on-dark dark:text-black",
  secondary: "bg-secondary-on-light text-white dark:bg-secondary-on-dark dark:text-black"
};
const sizeClasses = {
  small: "px-4 py-2",
  medium: "px-8 py-3",
  "full-width": "w-full px-8 py-3"
};

function getColor(action, color) {
  if (action) return actionClasses[action];
  return color ? colorsClasses[color] : colorsClasses["default"];
}

const Button = ({
  children,
  className,
  onClick,
  color = "default",
  size = "medium",
  action,
  ...props
}) => {
  const colorClass = getColor(action, color);
  const sizeClass = sizeClasses[size];
  const buttonClasses = `
    ${baseButtonClasses}${" "}
    ${colorClass}${" "}
    ${sizeClass}${" "}
    ${className ? className : ""}
  `;
  return /* @__PURE__ */ jsxRuntime.jsx("button", { onClick, className: buttonClasses, ...props, children });
};

const t=Symbol.for("@ts-pattern/matcher"),e=Symbol.for("@ts-pattern/isVariadic"),n="@ts-pattern/anonymous-select-key",r=t=>Boolean(t&&"object"==typeof t),i=e=>e&&!!e[t],o=(n,s,c)=>{if(i(n)){const e=n[t](),{matched:r,selections:i}=e.match(s);return r&&i&&Object.keys(i).forEach(t=>c(t,i[t])),r}if(r(n)){if(!r(s))return  false;if(Array.isArray(n)){if(!Array.isArray(s))return  false;let t=[],r=[],a=[];for(const o of n.keys()){const s=n[o];i(s)&&s[e]?a.push(s):a.length?r.push(s):t.push(s);}if(a.length){if(a.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(s.length<t.length+r.length)return  false;const e=s.slice(0,t.length),n=0===r.length?[]:s.slice(-r.length),i=s.slice(t.length,0===r.length?Infinity:-r.length);return t.every((t,n)=>o(t,e[n],c))&&r.every((t,e)=>o(t,n[e],c))&&(0===a.length||o(a[0],i,c))}return n.length===s.length&&n.every((t,e)=>o(t,s[e],c))}return Reflect.ownKeys(n).every(e=>{const r=n[e];return (e in s||i(a=r)&&"optional"===a[t]().matcherType)&&o(r,s[e],c);var a;})}return Object.is(s,n)},s=e=>{var n,o,a;return r(e)?i(e)?null!=(n=null==(o=(a=e[t]()).getSelectionKeys)?void 0:o.call(a))?n:[]:Array.isArray(e)?c(e,s):c(Object.values(e),s):[]},c=(t,e)=>t.reduce((t,n)=>t.concat(e(n)),[]);function u(t){return Object.assign(t,{optional:()=>l(t),and:e=>m(t,e),or:e=>d(t,e),select:e=>void 0===e?y(t):y(e,t)})}function l(e){return u({[t]:()=>({match:t=>{let n={};const r=(t,e)=>{n[t]=e;};return void 0===t?(s(e).forEach(t=>r(t,void 0)),{matched:true,selections:n}):{matched:o(e,t,r),selections:n}},getSelectionKeys:()=>s(e),matcherType:"optional"})})}function m(...e){return u({[t]:()=>({match:t=>{let n={};const r=(t,e)=>{n[t]=e;};return {matched:e.every(e=>o(e,t,r)),selections:n}},getSelectionKeys:()=>c(e,s),matcherType:"and"})})}function d(...e){return u({[t]:()=>({match:t=>{let n={};const r=(t,e)=>{n[t]=e;};return c(e,s).forEach(t=>r(t,void 0)),{matched:e.some(e=>o(e,t,r)),selections:n}},getSelectionKeys:()=>c(e,s),matcherType:"or"})})}function p(e){return {[t]:()=>({match:t=>({matched:Boolean(e(t))})})}}function y(...e){const r="string"==typeof e[0]?e[0]:void 0,i=2===e.length?e[1]:"string"==typeof e[0]?void 0:e[0];return u({[t]:()=>({match:t=>{let e={[null!=r?r:n]:t};return {matched:void 0===i||o(i,t,(t,n)=>{e[t]=n;}),selections:e}},getSelectionKeys:()=>[null!=r?r:n].concat(void 0===i?[]:s(i))})})}function v(t){return "number"==typeof t}function b(t){return "string"==typeof t}function w(t){return "bigint"==typeof t}const S=u(p(function(t){return  true})),O=S,j=t=>Object.assign(u(t),{startsWith:e=>{return j(m(t,(n=e,p(t=>b(t)&&t.startsWith(n)))));var n;},endsWith:e=>{return j(m(t,(n=e,p(t=>b(t)&&t.endsWith(n)))));var n;},minLength:e=>j(m(t,(t=>p(e=>b(e)&&e.length>=t))(e))),length:e=>j(m(t,(t=>p(e=>b(e)&&e.length===t))(e))),maxLength:e=>j(m(t,(t=>p(e=>b(e)&&e.length<=t))(e))),includes:e=>{return j(m(t,(n=e,p(t=>b(t)&&t.includes(n)))));var n;},regex:e=>{return j(m(t,(n=e,p(t=>b(t)&&Boolean(t.match(n))))));var n;}});j(p(b));const x=t=>Object.assign(u(t),{between:(e,n)=>x(m(t,((t,e)=>p(n=>v(n)&&t<=n&&e>=n))(e,n))),lt:e=>x(m(t,(t=>p(e=>v(e)&&e<t))(e))),gt:e=>x(m(t,(t=>p(e=>v(e)&&e>t))(e))),lte:e=>x(m(t,(t=>p(e=>v(e)&&e<=t))(e))),gte:e=>x(m(t,(t=>p(e=>v(e)&&e>=t))(e))),int:()=>x(m(t,p(t=>v(t)&&Number.isInteger(t)))),finite:()=>x(m(t,p(t=>v(t)&&Number.isFinite(t)))),positive:()=>x(m(t,p(t=>v(t)&&t>0))),negative:()=>x(m(t,p(t=>v(t)&&t<0)))});x(p(v));const A=t=>Object.assign(u(t),{between:(e,n)=>A(m(t,((t,e)=>p(n=>w(n)&&t<=n&&e>=n))(e,n))),lt:e=>A(m(t,(t=>p(e=>w(e)&&e<t))(e))),gt:e=>A(m(t,(t=>p(e=>w(e)&&e>t))(e))),lte:e=>A(m(t,(t=>p(e=>w(e)&&e<=t))(e))),gte:e=>A(m(t,(t=>p(e=>w(e)&&e>=t))(e))),positive:()=>A(m(t,p(t=>w(t)&&t>0))),negative:()=>A(m(t,p(t=>w(t)&&t<0)))});A(p(w));u(p(function(t){return "boolean"==typeof t}));u(p(function(t){return "symbol"==typeof t}));u(p(function(t){return null==t}));u(p(function(t){return null!=t}));var N={__proto__:null,_:O};class W extends Error{constructor(t){let e;try{e=JSON.stringify(t);}catch(n){e=t;}super(`Pattern matching error: no pattern matches value ${e}`),this.input=void 0,this.input=t;}}const $={matched:false,value:void 0};function z(t){return new I(t,$)}class I{constructor(t,e){this.input=void 0,this.state=void 0,this.input=t,this.state=e;}with(...t){if(this.state.matched)return this;const e=t[t.length-1],r=[t[0]];let i;3===t.length&&"function"==typeof t[1]?i=t[1]:t.length>2&&r.push(...t.slice(1,t.length-1));let s=false,c={};const a=(t,e)=>{s=true,c[t]=e;},u=!r.some(t=>o(t,this.input,a))||i&&!Boolean(i(this.input))?$:{matched:true,value:e(s?n in c?c[n]:c:this.input,this.input)};return new I(this.input,u)}when(t,e){if(this.state.matched)return this;const n=Boolean(t(this.input));return new I(this.input,n?{matched:true,value:e(this.input,this.input)}:$)}otherwise(t){return this.state.matched?this.state.value:t(this.input)}exhaustive(t=L){return this.state.matched?this.state.value:t(this.input)}run(){return this.exhaustive()}returnType(){return this}narrow(){return this}}function L(t){throw new W(t)}

function colorClass(color) {
  return z(color).with("primary", () => "text-primary-on-light dark:text-primary-on-dark").with("secondary", () => "text-secondary-on-light dark:text-secondary-on-dark").with(N._, () => "light:text-black dark:text-gray-93").exhaustive();
}
function sizeClass(size) {
  return z(size).with("h1", () => "text-h1 font-bold").with("h2", () => "text-h2 font-bold").with("h3", () => "text-h3 font-bold").with("h4", () => "text-h4 font-bold").with("details", () => "text-details").with(N._, () => "text-body mb-4").exhaustive();
}
function getComponent(size, as) {
  if (as) return as;
  if (size === "body") return "p";
  return size || "p";
}

function Typography({ color = "default", size = "body", className, children, as }) {
  const colorClassName = colorClass(color);
  const sizeClassName = sizeClass(size);
  const finalClassName = `${colorClassName} ${sizeClassName} ${className ? className : ""}`;
  const Component = getComponent(size, as);
  return /* @__PURE__ */ jsxRuntime.jsx(Component, { className: finalClassName, children });
}

const nonCardClasses = "p-4 rounded-md";

function Paper({ children, className, isCard, ...rest }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `shadow-paper dark:shadow-paper-dark border border-black dark:border-white ${className ? className : ""} ${isCard ? "" : nonCardClasses}`,
      ...rest,
      children
    }
  );
}

function Card({ title, content, actions, className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Paper,
    {
      className: `flex h-[365px] w-full flex-col items-center justify-between rounded-3xl px-5 py-6 md:w-[270px] ${className ? className : ""}`,
      "data-testid": "card",
      isCard: true,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Typography, { color: "primary", size: "h3", children: title }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2", children: content }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { children: actions })
      ]
    }
  );
}

exports.Button = Button;
exports.Card = Card;
exports.Paper = Paper;
exports.Typography = Typography;
