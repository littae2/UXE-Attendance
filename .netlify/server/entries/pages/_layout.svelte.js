import { c as create_ssr_component } from "../../chunks/index.js";
import "theme-change";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"max-w-3xl mx-auto prose md:prose-lg lg:prose-xl"}"><main>${slots.default ? slots.default({}) : ``}</main></div></div>`;
});
export {
  Layout as default
};
