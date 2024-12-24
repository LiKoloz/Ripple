import * as universal from '../entries/pages/create_post/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create_post/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/create_post/+page.js";
export const imports = ["_app/immutable/nodes/3.DPD0viwv.js","_app/immutable/chunks/disclose-version.BlHGoT9p.js","_app/immutable/chunks/runtime.FD8xG2QE.js","_app/immutable/chunks/props.BaBg2LSh.js","_app/immutable/chunks/legacy.CN-pHe-p.js","_app/immutable/chunks/Input.B-0M5ygR.js","_app/immutable/chunks/render.CasfLUrm.js","_app/immutable/chunks/if.BUEhq06W.js","_app/immutable/chunks/Theme.svelte_svelte_type_style_lang.47xYrv3C.js","_app/immutable/chunks/index.C9S6Eld7.js","_app/immutable/chunks/this.BI31LKKY.js","_app/immutable/chunks/misc.DS9JOOIa.js","_app/immutable/chunks/index-client.B-ZNRqsW.js"];
export const stylesheets = ["_app/immutable/assets/3.CKxu1xjh.css","_app/immutable/assets/Theme.C6eT-fc2.css"];
export const fonts = [];
