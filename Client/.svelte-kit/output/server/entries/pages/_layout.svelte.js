import { r as rest_props, f as fallback, s as spread_attributes, d as slot, e as bind_props, p as pop, g as sanitize_props, a as push } from "../../chunks/index2.js";
import { c as classnames } from "../../chunks/Theme.svelte_svelte_type_style_lang.js";
function Container($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "fluid"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let sm = fallback($$props["sm"], void 0);
  let md = fallback($$props["md"], void 0);
  let lg = fallback($$props["lg"], void 0);
  let xl = fallback($$props["xl"], void 0);
  let xxl = fallback($$props["xxl"], void 0);
  let fluid = fallback($$props["fluid"], false);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    class: className,
    sm,
    md,
    lg,
    xl,
    xxl,
    fluid
  });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div class="d-flex" style="flex-direction: column; height: 100%;"><div style="background-color: #D3D3D3; flex: 0 0 7%; border-bottom: 1px solid #000"><div class="container pt-2" style="margin-bottom: -0.5em;"><div class="row"><div class="col">`;
  Container($$payload, {
    fluid: true,
    style: "margin-left: -50% !important;",
    children: ($$payload2) => {
      $$payload2.out += `<div><a href="/" class="svelte-iczqsn"><h2 class="d-inline" style="font-family: 'Tesla';">Ripple</h2></a></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="col-10"></div> <div class="col d-flex justify-content-center align-items-center"><a href="/" aria-label="toProfile" class="svelte-iczqsn"><i class="bi bi-person-circle svelte-iczqsn"></i></a></div></div></div></div> <div style="background-color: #E0E0E0; flex: 0 0 83%;" class="d-flex justify-content-center"><div class="w-25"></div> <div class="flex-grow-1 pt-3 pb-3">`;
  children($$payload);
  $$payload.out += `<!----></div> <div class="w-25"></div></div> <footer style="flex: 0 0 10%;" class="pt-2 svelte-iczqsn"><div class="flex-item svelte-iczqsn" style="font-family: 'Tesla';"><h3 style="padding-top: 25%; padding-left: 10%">@Ripple</h3></div> <div class="flex-item svelte-iczqsn"><p class="svelte-iczqsn">Спасибо, что посетили <b style="font-family: 'Tesla';">Ripple!</b> <br>Присоединяйтесь к нам, чтобы делиться мыслями, общаться и <br> оставаться на связи с друзьями и единомышленниками.</p></div> <div class="flex-item svelte-iczqsn"><p class="svelte-iczqsn">Следите за обновлениями и будьте в курсе последних новостей со всего мира! <br>Пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности и <br>Условиями использования.</p></div> <div class="flex-item svelte-iczqsn"><p class="svelte-iczqsn">Контакты: <b style="font-family: 'Tesla';">support@ripple.com</b> <br>Следите за нами в социальных сетях: <b style="font-family: 'Tesla';">@RippleSocial</b></p></div></footer></div>`;
  pop();
}
export {
  _layout as default
};
