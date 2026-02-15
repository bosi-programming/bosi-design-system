'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

;/* empty css         */
const jsxRuntime = require('react/jsx-runtime');
const react = require('react');

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

const t=Symbol.for("@ts-pattern/matcher"),e=Symbol.for("@ts-pattern/isVariadic"),n="@ts-pattern/anonymous-select-key",r=t=>Boolean(t&&"object"==typeof t),i=e=>e&&!!e[t],o=(n,s,c)=>{if(i(n)){const e=n[t](),{matched:r,selections:i}=e.match(s);return r&&i&&Object.keys(i).forEach(t=>c(t,i[t])),r}if(r(n)){if(!r(s))return  false;if(Array.isArray(n)){if(!Array.isArray(s))return  false;let t=[],r=[],a=[];for(const o of n.keys()){const s=n[o];i(s)&&s[e]?a.push(s):a.length?r.push(s):t.push(s);}if(a.length){if(a.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(s.length<t.length+r.length)return  false;const e=s.slice(0,t.length),n=0===r.length?[]:s.slice(-r.length),i=s.slice(t.length,0===r.length?Infinity:-r.length);return t.every((t,n)=>o(t,e[n],c))&&r.every((t,e)=>o(t,n[e],c))&&(0===a.length||o(a[0],i,c))}return n.length===s.length&&n.every((t,e)=>o(t,s[e],c))}return Reflect.ownKeys(n).every(e=>{const r=n[e];return (e in s||i(a=r)&&"optional"===a[t]().matcherType)&&o(r,s[e],c);var a;})}return Object.is(s,n)},s=e=>{var n,o,a;return r(e)?i(e)?null!=(n=null==(o=(a=e[t]()).getSelectionKeys)?void 0:o.call(a))?n:[]:Array.isArray(e)?c(e,s):c(Object.values(e),s):[]},c=(t,e)=>t.reduce((t,n)=>t.concat(e(n)),[]);function u(t){return Object.assign(t,{optional:()=>l(t),and:e=>m(t,e),or:e=>d(t,e),select:e=>void 0===e?y(t):y(e,t)})}function l(e){return u({[t]:()=>({match:t=>{let n={};const r=(t,e)=>{n[t]=e;};return void 0===t?(s(e).forEach(t=>r(t,void 0)),{matched:true,selections:n}):{matched:o(e,t,r),selections:n}},getSelectionKeys:()=>s(e),matcherType:"optional"})})}function m(...e){return u({[t]:()=>({match:t=>{let n={};const r=(t,e)=>{n[t]=e;};return {matched:e.every(e=>o(e,t,r)),selections:n}},getSelectionKeys:()=>c(e,s),matcherType:"and"})})}function d(...e){return u({[t]:()=>({match:t=>{let n={};const r=(t,e)=>{n[t]=e;};return c(e,s).forEach(t=>r(t,void 0)),{matched:e.some(e=>o(e,t,r)),selections:n}},getSelectionKeys:()=>c(e,s),matcherType:"or"})})}function p(e){return {[t]:()=>({match:t=>({matched:Boolean(e(t))})})}}function y(...e){const r="string"==typeof e[0]?e[0]:void 0,i=2===e.length?e[1]:"string"==typeof e[0]?void 0:e[0];return u({[t]:()=>({match:t=>{let e={[null!=r?r:n]:t};return {matched:void 0===i||o(i,t,(t,n)=>{e[t]=n;}),selections:e}},getSelectionKeys:()=>[null!=r?r:n].concat(void 0===i?[]:s(i))})})}function v(t){return "number"==typeof t}function b(t){return "string"==typeof t}function w(t){return "bigint"==typeof t}u(p(function(t){return  true}));const j=t=>Object.assign(u(t),{startsWith:e=>{return j(m(t,(n=e,p(t=>b(t)&&t.startsWith(n)))));var n;},endsWith:e=>{return j(m(t,(n=e,p(t=>b(t)&&t.endsWith(n)))));var n;},minLength:e=>j(m(t,(t=>p(e=>b(e)&&e.length>=t))(e))),length:e=>j(m(t,(t=>p(e=>b(e)&&e.length===t))(e))),maxLength:e=>j(m(t,(t=>p(e=>b(e)&&e.length<=t))(e))),includes:e=>{return j(m(t,(n=e,p(t=>b(t)&&t.includes(n)))));var n;},regex:e=>{return j(m(t,(n=e,p(t=>b(t)&&Boolean(t.match(n))))));var n;}});j(p(b));const x=t=>Object.assign(u(t),{between:(e,n)=>x(m(t,((t,e)=>p(n=>v(n)&&t<=n&&e>=n))(e,n))),lt:e=>x(m(t,(t=>p(e=>v(e)&&e<t))(e))),gt:e=>x(m(t,(t=>p(e=>v(e)&&e>t))(e))),lte:e=>x(m(t,(t=>p(e=>v(e)&&e<=t))(e))),gte:e=>x(m(t,(t=>p(e=>v(e)&&e>=t))(e))),int:()=>x(m(t,p(t=>v(t)&&Number.isInteger(t)))),finite:()=>x(m(t,p(t=>v(t)&&Number.isFinite(t)))),positive:()=>x(m(t,p(t=>v(t)&&t>0))),negative:()=>x(m(t,p(t=>v(t)&&t<0)))});x(p(v));const A=t=>Object.assign(u(t),{between:(e,n)=>A(m(t,((t,e)=>p(n=>w(n)&&t<=n&&e>=n))(e,n))),lt:e=>A(m(t,(t=>p(e=>w(e)&&e<t))(e))),gt:e=>A(m(t,(t=>p(e=>w(e)&&e>t))(e))),lte:e=>A(m(t,(t=>p(e=>w(e)&&e<=t))(e))),gte:e=>A(m(t,(t=>p(e=>w(e)&&e>=t))(e))),positive:()=>A(m(t,p(t=>w(t)&&t>0))),negative:()=>A(m(t,p(t=>w(t)&&t<0)))});A(p(w));u(p(function(t){return "boolean"==typeof t}));u(p(function(t){return "symbol"==typeof t}));u(p(function(t){return null==t}));u(p(function(t){return null!=t}));class W extends Error{constructor(t){let e;try{e=JSON.stringify(t);}catch(n){e=t;}super(`Pattern matching error: no pattern matches value ${e}`),this.input=void 0,this.input=t;}}const $={matched:false,value:void 0};function z(t){return new I(t,$)}class I{constructor(t,e){this.input=void 0,this.state=void 0,this.input=t,this.state=e;}with(...t){if(this.state.matched)return this;const e=t[t.length-1],r=[t[0]];let i;3===t.length&&"function"==typeof t[1]?i=t[1]:t.length>2&&r.push(...t.slice(1,t.length-1));let s=false,c={};const a=(t,e)=>{s=true,c[t]=e;},u=!r.some(t=>o(t,this.input,a))||i&&!Boolean(i(this.input))?$:{matched:true,value:e(s?n in c?c[n]:c:this.input,this.input)};return new I(this.input,u)}when(t,e){if(this.state.matched)return this;const n=Boolean(t(this.input));return new I(this.input,n?{matched:true,value:e(this.input,this.input)}:$)}otherwise(t){return this.state.matched?this.state.value:t(this.input)}exhaustive(t=L){return this.state.matched?this.state.value:t(this.input)}run(){return this.exhaustive()}returnType(){return this}narrow(){return this}}function L(t){throw new W(t)}

function getColorClass(action, color) {
  return z({ action, color }).with({ action: "error" }, () => actionClasses.error).with({ action: "warning" }, () => actionClasses.warning).with({ action: "success" }, () => actionClasses.success).with({ action: "info" }, () => actionClasses.info).with({ color: "primary" }, () => colorsClasses.primary).with({ color: "secondary" }, () => colorsClasses.secondary).otherwise(() => colorsClasses.default);
}
function getSizeClass(size) {
  return z(size).with("small", () => sizeClasses.small).with("medium", () => sizeClasses.medium).with("full-width", () => sizeClasses["full-width"]).with(void 0, () => sizeClasses.medium).exhaustive();
}
function getButtonFinalClassName(action, color, size, className) {
  const colorClass = getColorClass(action, color);
  const sizeClass = getSizeClass(size);
  return `${baseButtonClasses} ${colorClass} ${sizeClass} ${className || ""}`.trim();
}

const inputDarkClasses = "dark:border-emerald dark:focus:ring-emerald dark:focus:border-emerald dark:bg-green dark:text-white";
const inputErrorClasses = "dark:border-red-400 border-red-700";

function colorClass(color) {
  return z(color).with("primary", () => "text-primary-on-light dark:text-primary-on-dark").with("secondary", () => "text-secondary-on-light dark:text-secondary-on-dark").with("error", "default", void 0, () => "light:text-black dark:text-gray-93").exhaustive();
}
function sizeClass(size) {
  return z(size).with("h1", () => "text-h1 font-bold").with("h2", () => "text-h2 font-bold").with("h3", () => "text-h3 font-bold").with("h4", () => "text-h4 font-bold").with("details", () => "text-details").with("body", void 0, () => "text-body mb-4").exhaustive();
}
function getTypographyFinalClassName(color, size, className) {
  const colorClassName = colorClass(color);
  const sizeClassName = sizeClass(size);
  return `${colorClassName} ${sizeClassName} ${className ? className : ""}`;
}
function getComponent(size, as) {
  if (as) return as;
  if (size === "body") return "p";
  return size || "p";
}

const fakePlaceholderStyles = "dark:text-gray-400! text-gray-500";
const placeholderStyles = "dark:placeholder:text-gray-400! placeholder:text-gray-500";
const textErrorClasses = "mt-1 text-red-700 dark:text-red-400";

const selectorIconStyles = "pointer-events-none absolute right-2.5 top-3.5 ml-1 h-5 w-5 text-gray-500 dark:text-gray-400";
const selectorBaseClasses = "rounded-xl border border-gray-300 bg-gray-50 px-2 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 md:mb-6 appearance-none cursor-pointer w-full";
const selectorDarkClasses = "dark:bg-green dark:border-emerald dark:placeholder-emerald dark:text-white dark:focus:ring-emerald dark:focus:border-emerald";

const Button = ({ children, className, color = "default", size = "medium", action, ...props }) => {
  const buttonClasses = getButtonFinalClassName(action, color, size, className);
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className: buttonClasses, ...props, children });
};

function Typography({
  color = "default",
  size = "body",
  className,
  children,
  as,
  href,
  target,
  rel,
  htmlFor,
  id
}) {
  const finalClassName = getTypographyFinalClassName(color, size, className);
  const Component = getComponent(size, as);
  if (Component === "a") {
    return /* @__PURE__ */ jsxRuntime.jsx(Component, { id, className: finalClassName, href, target, rel, children });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Component, { id, htmlFor, className: finalClassName, children });
}

const nonCardClasses = "p-4 rounded-xl";

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
      className: `flex h-[365px] w-full flex-col items-center justify-between rounded-xl px-5 py-6 md:w-[270px] ${className ? className : ""}`,
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

function Input({
  name,
  disabled,
  required,
  value,
  setValue,
  label,
  placeholder,
  className,
  type = "text",
  error
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex w-full flex-col ${className}`, children: [
    label ? /* @__PURE__ */ jsxRuntime.jsxs(Typography, { as: "label", id: `label-${name}`, htmlFor: name, className: "mb-2! ml-2", children: [
      label,
      required ? "*" : null
    ] }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        required,
        id: name,
        className: `w-full rounded-xl border border-gray-300 bg-gray-50 px-2 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 ${placeholderStyles} ${inputDarkClasses} ${error ? inputErrorClasses : null}`,
        placeholder,
        value,
        onChange: (e) => setValue(e.target.value),
        name,
        type,
        disabled,
        "aria-invalid": !!error,
        "aria-errormessage": error ? `error-${name}` : void 0,
        "aria-describedby": label ? `label-${name}` : void 0
      }
    ),
    error ? /* @__PURE__ */ jsxRuntime.jsx(Typography, { size: "details", as: "p", id: `error-${name}`, className: `ml-2 ${textErrorClasses}`, children: error }) : null
  ] });
}

function Selector({
  placeholder,
  options,
  label,
  name,
  required,
  disabled,
  error,
  className,
  ...rest
}) {
  const [clicked, setClicked] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex w-full flex-col ${className}`, children: [
    label ? /* @__PURE__ */ jsxRuntime.jsxs(Typography, { as: "label", id: `label-${name}`, htmlFor: name, className: "mb-2! ml-2", children: [
      label,
      required ? "*" : null
    ] }) : null,
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", onMouseEnter: () => setClicked(!clicked), onMouseLeave: () => setClicked(!clicked), children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "select",
        {
          ...rest,
          name,
          id: name,
          required,
          className: `${selectorBaseClasses} ${selectorDarkClasses} ${!rest.value && !clicked ? fakePlaceholderStyles : ""}`,
          disabled,
          "aria-label": label,
          "aria-invalid": !!error,
          "aria-errormessage": error ? `error-${name}` : void 0,
          "aria-describedby": label ? `label-${name}` : void 0,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("option", { value: "", disabled: true, children: placeholder }),
            options.map(({ id, label: label2 }) => {
              if (id === "") return null;
              return /* @__PURE__ */ jsxRuntime.jsx("option", { value: id, children: label2 }, id);
            })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "1.2",
          stroke: "currentColor",
          className: selectorIconStyles,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" })
        }
      )
    ] }),
    error ? /* @__PURE__ */ jsxRuntime.jsx(Typography, { size: "details", as: "p", id: `error-${name}`, className: `ml-2 ${textErrorClasses}`, children: error }) : null
  ] });
}

exports.Button = Button;
exports.Card = Card;
exports.Input = Input;
exports.Paper = Paper;
exports.Selector = Selector;
exports.Typography = Typography;
exports.actionClasses = actionClasses;
exports.baseButtonClasses = baseButtonClasses;
exports.colorsClasses = colorsClasses;
exports.fakePlaceholderStyles = fakePlaceholderStyles;
exports.getButtonFinalClassName = getButtonFinalClassName;
exports.getComponent = getComponent;
exports.getTypographyFinalClassName = getTypographyFinalClassName;
exports.inputDarkClasses = inputDarkClasses;
exports.inputErrorClasses = inputErrorClasses;
exports.placeholderStyles = placeholderStyles;
exports.selectorBaseClasses = selectorBaseClasses;
exports.selectorDarkClasses = selectorDarkClasses;
exports.selectorIconStyles = selectorIconStyles;
exports.sizeClasses = sizeClasses;
exports.textErrorClasses = textErrorClasses;
