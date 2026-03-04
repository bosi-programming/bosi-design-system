/* empty css       */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

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
  return /* @__PURE__ */ jsx("button", { className: buttonClasses, ...props, children });
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
    return /* @__PURE__ */ jsx(Component, { id, className: finalClassName, href, target, rel, children });
  }
  return /* @__PURE__ */ jsx(Component, { id, htmlFor, className: finalClassName, children });
}

const nonCardClasses = "p-4 rounded-xl";

function Paper({ children, className, isCard, ...rest }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `shadow-paper dark:shadow-paper-dark border border-black dark:border-white ${className ? className : ""} ${isCard ? "" : nonCardClasses}`,
      ...rest,
      children
    }
  );
}

function Card({ title, content, actions, className }) {
  return /* @__PURE__ */ jsxs(
    Paper,
    {
      className: `flex h-[365px] w-full flex-col items-center justify-between rounded-xl px-5 py-6 md:w-[270px] ${className ? className : ""}`,
      "data-testid": "card",
      isCard: true,
      children: [
        /* @__PURE__ */ jsx(Typography, { color: "primary", size: "h3", children: title }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: content }),
        /* @__PURE__ */ jsx("div", { children: actions })
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
  return /* @__PURE__ */ jsxs("div", { className: `flex w-full flex-col ${className}`, children: [
    label ? /* @__PURE__ */ jsxs(Typography, { as: "label", id: `label-${name}`, htmlFor: name, className: "mb-2! ml-2", children: [
      label,
      required ? "*" : null
    ] }) : null,
    /* @__PURE__ */ jsx(
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
    error ? /* @__PURE__ */ jsx(Typography, { size: "details", as: "p", id: `error-${name}`, className: `ml-2 ${textErrorClasses}`, children: error }) : null
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
  const [clicked, setClicked] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: `flex w-full flex-col ${className}`, children: [
    label ? /* @__PURE__ */ jsxs(Typography, { as: "label", id: `label-${name}`, htmlFor: name, className: "mb-2! ml-2", children: [
      label,
      required ? "*" : null
    ] }) : null,
    /* @__PURE__ */ jsxs("div", { className: "relative", onMouseEnter: () => setClicked(!clicked), onMouseLeave: () => setClicked(!clicked), children: [
      /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
            options.map(({ id, label: label2 }) => {
              if (id === "") return null;
              return /* @__PURE__ */ jsx("option", { value: id, children: label2 }, id);
            })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "1.2",
          stroke: "currentColor",
          className: selectorIconStyles,
          children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" })
        }
      )
    ] }),
    error ? /* @__PURE__ */ jsx(Typography, { size: "details", as: "p", id: `error-${name}`, className: `ml-2 ${textErrorClasses}`, children: error }) : null
  ] });
}

function Github({ className, size }) {
  const finalSize = size || "64px";
  return /* @__PURE__ */ jsx("a", { href: "https://github.com/bosi-programming", "aria-label": "Github", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      height: finalSize,
      width: finalSize,
      viewBox: "0 0 64 64",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M57.1429 0H6.85714C3.07143 0 0 3.07143 0 6.85714V57.1429C0 60.9286 3.07143 64 6.85714 64H57.1429C60.9286 64 64 60.9286 64 57.1429V6.85714C64 3.07143 60.9286 0 57.1429 0ZM39.6143 54.8143C38.4143 55.0286 37.9714 54.2857 37.9714 53.6714C37.9714 52.9 38 48.9571 38 45.7714C38 43.5429 37.2571 42.1286 36.3857 41.3857C41.6714 40.8 47.2429 40.0714 47.2429 30.9429C47.2429 28.3429 46.3143 27.0429 44.8 25.3714C45.0429 24.7571 45.8571 22.2286 44.5571 18.9429C42.5714 18.3286 38.0286 21.5 38.0286 21.5C36.1429 20.9714 34.1 20.7 32.0857 20.7C30.0714 20.7 28.0286 20.9714 26.1429 21.5C26.1429 21.5 21.6 18.3286 19.6143 18.9429C18.3143 22.2143 19.1143 24.7429 19.3714 25.3714C17.8571 27.0429 17.1429 28.3429 17.1429 30.9429C17.1429 40.0286 22.4714 40.8 27.7571 41.3857C27.0714 42 26.4571 43.0571 26.2429 44.5714C24.8857 45.1857 21.4143 46.2429 19.3429 42.5857C18.0429 40.3286 15.7 40.1429 15.7 40.1429C13.3857 40.1143 15.5429 41.6 15.5429 41.6C17.0857 42.3143 18.1714 45.0571 18.1714 45.0571C19.5571 49.3 26.1857 47.8714 26.1857 47.8714C26.1857 49.8571 26.2143 53.0857 26.2143 53.6714C26.2143 54.2857 25.7857 55.0286 24.5714 54.8143C15.1429 51.6571 8.54286 42.6857 8.54286 32.2C8.54286 19.0857 18.5714 9.12857 31.6857 9.12857C44.8 9.12857 55.4286 19.0857 55.4286 32.2C55.4429 42.6857 49.0429 51.6714 39.6143 54.8143ZM25.6 46.0857C25.3286 46.1429 25.0714 46.0286 25.0429 45.8429C25.0143 45.6286 25.2 45.4429 25.4714 45.3857C25.7429 45.3571 26 45.4714 26.0286 45.6571C26.0714 45.8429 25.8857 46.0286 25.6 46.0857ZM24.2429 45.9571C24.2429 46.1429 24.0286 46.3 23.7429 46.3C23.4286 46.3286 23.2143 46.1714 23.2143 45.9571C23.2143 45.7714 23.4286 45.6143 23.7143 45.6143C23.9857 45.5857 24.2429 45.7429 24.2429 45.9571ZM22.2857 45.8C22.2286 45.9857 21.9429 46.0714 21.7 45.9857C21.4286 45.9286 21.2429 45.7143 21.3 45.5286C21.3571 45.3429 21.6429 45.2571 21.8857 45.3143C22.1714 45.4 22.3571 45.6143 22.2857 45.8ZM20.5286 45.0286C20.4 45.1857 20.1286 45.1571 19.9143 44.9429C19.7 44.7571 19.6429 44.4857 19.7857 44.3571C19.9143 44.2 20.1857 44.2286 20.4 44.4429C20.5857 44.6286 20.6571 44.9143 20.5286 45.0286ZM19.2286 43.7286C19.1 43.8143 18.8571 43.7286 18.7 43.5143C18.5429 43.3 18.5429 43.0571 18.7 42.9571C18.8571 42.8286 19.1 42.9286 19.2286 43.1429C19.3857 43.3571 19.3857 43.6143 19.2286 43.7286ZM18.3 42.3429C18.1714 42.4714 17.9571 42.4 17.8 42.2571C17.6429 42.0714 17.6143 41.8571 17.7429 41.7571C17.8714 41.6286 18.0857 41.7 18.2429 41.8429C18.4 42.0286 18.4286 42.2429 18.3 42.3429ZM17.3429 41.2857C17.2857 41.4143 17.1 41.4429 16.9429 41.3429C16.7571 41.2571 16.6714 41.1 16.7286 40.9714C16.7857 40.8857 16.9429 40.8429 17.1286 40.9143C17.3143 41.0143 17.4 41.1714 17.3429 41.2857Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}

function USAFlag({ className, size }) {
  const finalSize = size || "20px";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      height: finalSize,
      width: finalSize,
      viewBox: "0 0 28 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0_503_3486)", children: [
          /* @__PURE__ */ jsx("rect", { width: "28", height: "20", rx: "2", fill: "white" }),
          /* @__PURE__ */ jsx("mask", { id: "mask0_503_3486", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "28", height: "20", children: /* @__PURE__ */ jsx("rect", { width: "28", height: "20", rx: "2", fill: "white" }) }),
          /* @__PURE__ */ jsxs("g", { mask: "url(#mask0_503_3486)", children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z",
                fill: "#D02F44"
              }
            ),
            /* @__PURE__ */ jsx("rect", { width: "12", height: "9.33333", fill: "#46467F" }),
            /* @__PURE__ */ jsx("g", { filter: "url(#filter0_d_503_3486)", children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999ZM5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666C4.29846 2.66666 3.99998 2.36818 3.99998 1.99999C3.99998 1.63181 4.29846 1.33333 4.66665 1.33333C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999ZM7.33331 2.66666C7.7015 2.66666 7.99998 2.36818 7.99998 1.99999C7.99998 1.63181 7.7015 1.33333 7.33331 1.33333C6.96512 1.33333 6.66665 1.63181 6.66665 1.99999C6.66665 2.36818 6.96512 2.66666 7.33331 2.66666ZM10.6666 1.99999C10.6666 2.36818 10.3682 2.66666 9.99998 2.66666C9.63179 2.66666 9.33331 2.36818 9.33331 1.99999C9.33331 1.63181 9.63179 1.33333 9.99998 1.33333C10.3682 1.33333 10.6666 1.63181 10.6666 1.99999ZM3.33331 3.99999C3.7015 3.99999 3.99998 3.70152 3.99998 3.33333C3.99998 2.96514 3.7015 2.66666 3.33331 2.66666C2.96512 2.66666 2.66665 2.96514 2.66665 3.33333C2.66665 3.70152 2.96512 3.99999 3.33331 3.99999ZM6.66665 3.33333C6.66665 3.70152 6.36817 3.99999 5.99998 3.99999C5.63179 3.99999 5.33331 3.70152 5.33331 3.33333C5.33331 2.96514 5.63179 2.66666 5.99998 2.66666C6.36817 2.66666 6.66665 2.96514 6.66665 3.33333ZM8.66665 3.99999C9.03484 3.99999 9.33331 3.70152 9.33331 3.33333C9.33331 2.96514 9.03484 2.66666 8.66665 2.66666C8.29846 2.66666 7.99998 2.96514 7.99998 3.33333C7.99998 3.70152 8.29846 3.99999 8.66665 3.99999ZM10.6666 4.66666C10.6666 5.03485 10.3682 5.33333 9.99998 5.33333C9.63179 5.33333 9.33331 5.03485 9.33331 4.66666C9.33331 4.29847 9.63179 3.99999 9.99998 3.99999C10.3682 3.99999 10.6666 4.29847 10.6666 4.66666ZM7.33331 5.33333C7.7015 5.33333 7.99998 5.03485 7.99998 4.66666C7.99998 4.29847 7.7015 3.99999 7.33331 3.99999C6.96512 3.99999 6.66665 4.29847 6.66665 4.66666C6.66665 5.03485 6.96512 5.33333 7.33331 5.33333ZM5.33331 4.66666C5.33331 5.03485 5.03484 5.33333 4.66665 5.33333C4.29846 5.33333 3.99998 5.03485 3.99998 4.66666C3.99998 4.29847 4.29846 3.99999 4.66665 3.99999C5.03484 3.99999 5.33331 4.29847 5.33331 4.66666ZM1.99998 5.33333C2.36817 5.33333 2.66665 5.03485 2.66665 4.66666C2.66665 4.29847 2.36817 3.99999 1.99998 3.99999C1.63179 3.99999 1.33331 4.29847 1.33331 4.66666C1.33331 5.03485 1.63179 5.33333 1.99998 5.33333ZM3.99998 5.99999C3.99998 6.36819 3.7015 6.66666 3.33331 6.66666C2.96512 6.66666 2.66665 6.36819 2.66665 5.99999C2.66665 5.6318 2.96512 5.33333 3.33331 5.33333C3.7015 5.33333 3.99998 5.6318 3.99998 5.99999ZM5.99998 6.66666C6.36817 6.66666 6.66665 6.36819 6.66665 5.99999C6.66665 5.6318 6.36817 5.33333 5.99998 5.33333C5.63179 5.33333 5.33331 5.6318 5.33331 5.99999C5.33331 6.36819 5.63179 6.66666 5.99998 6.66666ZM9.33331 5.99999C9.33331 6.36819 9.03484 6.66666 8.66665 6.66666C8.29846 6.66666 7.99998 6.36819 7.99998 5.99999C7.99998 5.6318 8.29846 5.33333 8.66665 5.33333C9.03484 5.33333 9.33331 5.6318 9.33331 5.99999ZM9.99998 8C10.3682 8 10.6666 7.70152 10.6666 7.33333C10.6666 6.96514 10.3682 6.66666 9.99998 6.66666C9.63179 6.66666 9.33331 6.96514 9.33331 7.33333C9.33331 7.70152 9.63179 8 9.99998 8ZM7.99998 7.33333C7.99998 7.70152 7.7015 8 7.33331 8C6.96512 8 6.66665 7.70152 6.66665 7.33333C6.66665 6.96514 6.96512 6.66666 7.33331 6.66666C7.7015 6.66666 7.99998 6.96514 7.99998 7.33333ZM4.66665 8C5.03484 8 5.33331 7.70152 5.33331 7.33333C5.33331 6.96514 5.03484 6.66666 4.66665 6.66666C4.29846 6.66666 3.99998 6.96514 3.99998 7.33333C3.99998 7.70152 4.29846 8 4.66665 8ZM2.66665 7.33333C2.66665 7.70152 2.36817 8 1.99998 8C1.63179 8 1.33331 7.70152 1.33331 7.33333C1.33331 6.96514 1.63179 6.66666 1.99998 6.66666C2.36817 6.66666 2.66665 6.96514 2.66665 7.33333Z",
                fill: "url(#paint0_linear_503_3486)"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "filter0_d_503_3486",
              x: "1.33331",
              y: "1.33333",
              width: "9.33331",
              height: "7.66667",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx("feOffset", { dy: "1" }),
                /* @__PURE__ */ jsx("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }),
                /* @__PURE__ */ jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_503_3486" }),
                /* @__PURE__ */ jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_503_3486", result: "shape" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_503_3486",
              x1: "1.33331",
              y1: "1.33333",
              x2: "1.33331",
              y2: "7.99999",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#F0F0F0" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_503_3486", children: /* @__PURE__ */ jsx("rect", { width: "28", height: "20", rx: "2", fill: "white" }) })
        ] })
      ]
    }
  );
}

function Linkedin({ className, size }) {
  const finalSize = size || "64px";
  return /* @__PURE__ */ jsx("a", { "aria-label": "Linkedin", href: "https://www.linkedin.com/in/felipebosi/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      height: finalSize,
      width: finalSize,
      viewBox: "0 0 64 64",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M59.4286 0H4.55714C2.04286 0 0 2.07143 0 4.61429V59.3857C0 61.9286 2.04286 64 4.55714 64H59.4286C61.9429 64 64 61.9286 64 59.3857V4.61429C64 2.07143 61.9429 0 59.4286 0ZM19.3429 54.8571H9.85714V24.3143H19.3571V54.8571H19.3429ZM14.6 20.1429C11.5571 20.1429 9.1 17.6714 9.1 14.6429C9.1 11.6143 11.5571 9.14286 14.6 9.14286C17.6286 9.14286 20.1 11.6143 20.1 14.6429C20.1 17.6857 17.6429 20.1429 14.6 20.1429ZM54.9 54.8571H45.4143V40C45.4143 36.4571 45.3429 31.9 40.4857 31.9C35.5429 31.9 34.7857 35.7571 34.7857 39.7429V54.8571H25.3V24.3143H34.4V28.4857H34.5286C35.8 26.0857 38.9 23.5571 43.5143 23.5571C53.1143 23.5571 54.9 29.8857 54.9 38.1143V54.8571Z",
          fill: "currentColor"
        }
      )
    }
  ) });
}

function Instagram({ className, size }) {
  const finalSize = size || "64px";
  return /* @__PURE__ */ jsx(
    "a",
    {
      "aria-label": "Instagram",
      href: "https://www.instagram.com/bosi.programming/",
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          className,
          height: finalSize,
          width: finalSize,
          viewBox: "0 0 64 64",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M32.0071 15.5948C22.9265 15.5948 15.602 22.9193 15.602 31.9999C15.602 41.0806 22.9265 48.4051 32.0071 48.4051C41.0878 48.4051 48.4123 41.0806 48.4123 31.9999C48.4123 22.9193 41.0878 15.5948 32.0071 15.5948ZM32.0071 42.6654C26.139 42.6654 21.3417 37.8824 21.3417 31.9999C21.3417 26.1175 26.1247 21.3345 32.0071 21.3345C37.8896 21.3345 42.6726 26.1175 42.6726 31.9999C42.6726 37.8824 37.8753 42.6654 32.0071 42.6654ZM52.9098 14.9238C52.9098 17.0511 51.1964 18.7502 49.0833 18.7502C46.9559 18.7502 45.2569 17.0369 45.2569 14.9238C45.2569 12.8106 46.9702 11.0973 49.0833 11.0973C51.1964 11.0973 52.9098 12.8106 52.9098 14.9238ZM63.7751 18.8073C63.5324 13.6816 62.3616 9.14127 58.6066 5.4005C54.8658 1.65973 50.3255 0.488954 45.1998 0.231955C39.917 -0.0678781 24.083 -0.0678781 18.8002 0.231955C13.6888 0.474676 9.14847 1.64545 5.39342 5.38622C1.63837 9.12699 0.481874 13.6673 0.224875 18.793C-0.0749582 24.0758 -0.0749582 39.9098 0.224875 45.1926C0.467596 50.3183 1.63837 54.8586 5.39342 58.5994C9.14847 62.3402 13.6745 63.5109 18.8002 63.7679C24.083 64.0678 39.917 64.0678 45.1998 63.7679C50.3255 63.5252 54.8658 62.3544 58.6066 58.5994C62.3474 54.8586 63.5181 50.3183 63.7751 45.1926C64.075 39.9098 64.075 24.0901 63.7751 18.8073ZM56.9504 50.8608C55.8367 53.6593 53.6808 55.8152 50.868 56.9432C46.6561 58.6137 36.6617 58.2282 32.0071 58.2282C27.3526 58.2282 17.3439 58.5994 13.1462 56.9432C10.3478 55.8295 8.19186 53.6736 7.06392 50.8608C5.39342 46.6489 5.77892 36.6545 5.77892 31.9999C5.77892 27.3454 5.4077 17.3367 7.06392 13.139C8.17758 10.3406 10.3335 8.18466 13.1462 7.05672C17.3582 5.38622 27.3526 5.77172 32.0071 5.77172C36.6617 5.77172 46.6704 5.4005 50.868 7.05672C53.6665 8.17038 55.8224 10.3263 56.9504 13.139C58.6209 17.351 58.2354 27.3454 58.2354 31.9999C58.2354 36.6545 58.6209 46.6632 56.9504 50.8608Z",
              fill: "currentColor"
            }
          )
        }
      )
    }
  );
}

function BrasilFlag({ className, size }) {
  const finalSize = size || "20px";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      height: finalSize,
      width: finalSize,
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 512 512",
      xmlSpace: "preserve",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            style: { fill: "#73AF00" },
            d: "M473.655,88.275H38.345C17.167,88.275,0,105.442,0,126.62V385.38\n	c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.62\n	C512,105.442,494.833,88.275,473.655,88.275z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            style: { fill: "#FFE15A" },
            d: "M251.41,135.207L65.354,248.458c-5.651,3.439-5.651,11.641,0,15.081L251.41,376.792\n	c2.819,1.716,6.36,1.716,9.18,0l186.056-113.252c5.651-3.439,5.651-11.641,0-15.081L260.59,135.207\n	C257.771,133.492,254.229,133.492,251.41,135.207z"
          }
        ),
        /* @__PURE__ */ jsx("circle", { style: { fill: "#41479B" }, cx: "256", cy: "255.999", r: "70.62" }),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M195.4,219.872c-3.332,5.578-5.905,11.64-7.605,18.077c39.149-2.946,97.062,8.006,133.922,43.773\n		c2.406-6.141,3.995-12.683,4.59-19.522C288.247,230.167,235.628,218.776,195.4,219.872z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M258.925,280.099l1.88,5.638l5.943,0.046c0.769,0.006,1.088,0.988,0.469,1.445l-4.781,3.531\n		l1.793,5.666c0.232,0.734-0.604,1.341-1.229,0.893l-4.835-3.456l-4.835,3.456c-0.626,0.447-1.461-0.159-1.229-0.893l1.793-5.666\n		l-4.781-3.531c-0.619-0.457-0.3-1.439,0.469-1.445l5.943-0.046l1.88-5.638C257.649,279.368,258.681,279.368,258.925,280.099z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M282.024,294.683l0.809,2.426l2.558,0.02c0.331,0.002,0.468,0.425,0.202,0.622l-2.058,1.519\n		l0.771,2.439c0.099,0.316-0.259,0.577-0.53,0.384l-2.081-1.487l-2.081,1.487c-0.269,0.193-0.629-0.068-0.529-0.384l0.771-2.439\n		l-2.058-1.519c-0.267-0.196-0.129-0.619,0.202-0.622l2.558-0.02l0.809-2.426C281.474,294.368,281.919,294.368,282.024,294.683z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M248.938,269.388l0.809,2.426l2.558,0.02c0.331,0.002,0.469,0.425,0.202,0.622l-2.058,1.519\n		l0.771,2.439c0.099,0.316-0.259,0.577-0.529,0.384l-2.081-1.487l-2.081,1.487c-0.269,0.193-0.629-0.068-0.53-0.384l0.771-2.439\n		l-2.058-1.519c-0.266-0.196-0.129-0.619,0.202-0.622l2.558-0.02l0.809-2.426C248.388,269.076,248.833,269.076,248.938,269.388z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M204.13,266.446l0.809,2.426l2.558,0.02c0.331,0.002,0.469,0.425,0.202,0.622l-2.058,1.519\n		l0.771,2.439c0.099,0.316-0.259,0.577-0.53,0.384l-2.081-1.487l-2.081,1.487c-0.269,0.192-0.629-0.068-0.529-0.384l0.771-2.439\n		l-2.058-1.519c-0.267-0.196-0.129-0.619,0.202-0.622l2.558-0.02l0.809-2.426C203.581,266.133,204.025,266.133,204.13,266.446z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M241.614,293.846l0.809,2.426l2.558,0.02c0.331,0.002,0.469,0.425,0.202,0.622l-2.058,1.519\n		l0.771,2.439c0.099,0.316-0.259,0.577-0.529,0.384l-2.081-1.487l-2.081,1.487c-0.269,0.193-0.629-0.068-0.53-0.384l0.771-2.439\n		l-2.058-1.519c-0.266-0.196-0.129-0.619,0.202-0.622l2.558-0.02l0.809-2.426C241.065,293.532,241.51,293.532,241.614,293.846z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M220.99,264.753l0.662,1.984l2.092,0.017c0.27,0.002,0.383,0.348,0.166,0.509l-1.683,1.242\n		l0.631,1.994c0.082,0.258-0.212,0.472-0.433,0.314l-1.702-1.216l-1.702,1.216c-0.221,0.158-0.514-0.056-0.433-0.314l0.631-1.994\n		l-1.683-1.242c-0.217-0.161-0.106-0.507,0.166-0.509l2.092-0.017l0.662-1.984C220.541,264.497,220.904,264.497,220.99,264.753z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M283.819,223.794l0.828,2.482l2.616,0.02c0.339,0.002,0.479,0.435,0.206,0.637l-2.104,1.554\n		l0.789,2.495c0.103,0.323-0.266,0.59-0.541,0.393l-2.129-1.522l-2.129,1.522c-0.276,0.198-0.643-0.071-0.541-0.393l0.789-2.495\n		l-2.104-1.554c-0.273-0.201-0.132-0.633,0.206-0.637l2.616-0.02l0.828-2.482C283.257,223.47,283.712,223.47,283.819,223.794z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M207.012,252.615l0.662,1.984l2.092,0.017c0.27,0.002,0.383,0.348,0.166,0.509l-1.683,1.242\n		l0.631,1.994c0.082,0.258-0.212,0.472-0.433,0.314l-1.702-1.216l-1.702,1.216c-0.221,0.158-0.514-0.056-0.433-0.314l0.631-1.994\n		l-1.683-1.242c-0.218-0.161-0.106-0.506,0.166-0.509l2.092-0.017l0.662-1.984C206.563,252.358,206.926,252.358,207.012,252.615z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M217.112,280.581l1.002,3.005l3.168,0.024c0.41,0.003,0.58,0.526,0.25,0.77l-2.549,1.882l0.956,3.02\n		c0.124,0.391-0.321,0.715-0.655,0.476l-2.578-1.843l-2.578,1.843c-0.333,0.238-0.779-0.085-0.655-0.476l0.956-3.02l-2.549-1.882\n		c-0.33-0.244-0.16-0.767,0.25-0.77l3.168-0.024l1.002-3.005C216.433,280.191,216.983,280.191,217.112,280.581z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M294.903,295.313l0.631,1.891l1.993,0.015c0.258,0.002,0.365,0.331,0.158,0.484l-1.603,1.184\n		l0.601,1.9c0.077,0.246-0.202,0.449-0.413,0.299l-1.621-1.159l-1.622,1.159c-0.21,0.15-0.49-0.053-0.413-0.299l0.601-1.9\n		l-1.603-1.184c-0.207-0.153-0.1-0.482,0.158-0.484l1.993-0.015l0.63-1.891C294.475,295.068,294.822,295.068,294.903,295.313z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              style: { fill: "#F5F5F5" },
              d: "M301.877,280.883l0.809,2.426l2.558,0.02c0.331,0.002,0.469,0.425,0.202,0.622l-2.058,1.519\n		l0.771,2.439c0.099,0.316-0.259,0.577-0.529,0.384l-2.081-1.487l-2.081,1.487c-0.269,0.193-0.629-0.068-0.529-0.384l0.771-2.439\n		l-2.058-1.519c-0.266-0.196-0.129-0.619,0.202-0.622l2.558-0.02l0.809-2.426C301.327,280.568,301.772,280.568,301.877,280.883z"
            }
          )
        ] })
      ]
    }
  );
}

export { BrasilFlag, Button, Card, Github, Input, Instagram, Linkedin, Paper, Selector, Typography, USAFlag, actionClasses, baseButtonClasses, colorsClasses, fakePlaceholderStyles, getButtonFinalClassName, getComponent, getTypographyFinalClassName, inputDarkClasses, inputErrorClasses, placeholderStyles, selectorBaseClasses, selectorDarkClasses, selectorIconStyles, sizeClasses, textErrorClasses };
