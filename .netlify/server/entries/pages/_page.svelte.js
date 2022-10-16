import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Theme_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mb-8"}"><select data-choose-theme class="${"select select-bordered select-primary w-full max-w-3xl text-xl"}"><option disabled="${"disabled"}" selected="${"selected"}" value="${"Choose a theme"}">Choose a theme</option><option value="${"acid"}">Acid</option><option value="${"aqua"}">Aqua</option><option value="${"autumn"}">Autumn</option><option value="${"black"}">Black</option><option value="${"bumblebee"}">Bumblebee</option><option value="${"business"}">Business</option><option value="${"cmyk"}">CMYK</option><option value="${"coffee"}">Coffee</option><option value="${"corporate"}">Corporate</option><option value="${"cupcake"}">Cupcake</option><option value="${"cyberpunk"}">Cyberpunk</option><option value="${"dark"}">Dark</option><option value="${"dracula"}">Dracula</option><option value="${"emerald"}">Emerald</option><option value="${"fantasy"}">Fantasy</option><option value="${"forest"}">Forest</option><option value="${"garden"}">Garden</option><option value="${"halloween"}">Halloween</option><option value="${"lemonade"}">Lemonade</option><option value="${"light"}">Light</option><option value="${"lofi"}">Lofi</option><option value="${"luxury"}">Luxury</option><option value="${"night"}">Night</option><option value="${"pastel"}">Pastel</option><option value="${"retro"}">Retro</option><option value="${"synthwave"}">Synthwave</option><option value="${"valentine"}">Valentine</option><option value="${"winter"}">Winter</option><option value="${"wireframe"}">Wireframe</option></select></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>SvelteKit Theme Switch</h1>

<p>This is using the <a href="${"https://github.com/saadeghi/theme-change"}"><code>theme-change</code></a>
  package with <a href="${"https://daisyui.com/"}">DaisyUI</a>.
</p>

<p>Typography is with the Tailwind Typography package.</p>

<p>Default theme is set to light.</p>

${validate_component(Theme_select, "ThemeSelect").$$render($$result, {}, {}, {})}

<p>Here&#39;s some DaisyUI buttons, yummy!</p>

<button class="${"btn"}">neutral</button>
<button class="${"btn btn-primary"}">primary</button>
<button class="${"btn btn-secondary"}">secondary</button>
<button class="${"btn btn-accent"}">accent</button>
<button class="${"btn btn-ghost"}">ghost</button>
<button class="${"btn btn-link"}">link</button>

<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the
  documentation
</p>`;
});
export {
  Page as default
};
