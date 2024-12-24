import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CWm8fYIA.js","_app/immutable/chunks/disclose-version.BlHGoT9p.js","_app/immutable/chunks/runtime.FD8xG2QE.js","_app/immutable/chunks/legacy.CN-pHe-p.js","_app/immutable/chunks/Theme.svelte_svelte_type_style_lang.47xYrv3C.js","_app/immutable/chunks/index.C9S6Eld7.js","_app/immutable/chunks/props.BaBg2LSh.js"];
export const stylesheets = ["_app/immutable/assets/0.DHIg7D54.css","_app/immutable/assets/Theme.C6eT-fc2.css"];
export const fonts = [];
