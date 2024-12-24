import { r as rest_props, f as fallback, s as spread_attributes, d as slot, e as bind_props, p as pop, g as sanitize_props, a as push, h as sanitize_slots, i as escape_html, c as copy_payload, b as assign_payload } from "../../../chunks/index2.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
import { c as classnames } from "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
function Form($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "inline", "validated"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let inline = fallback($$props["inline"], false);
  let validated = fallback($$props["validated"], false);
  classes = classnames(className, {
    "form-inline": inline,
    "was-validated": validated
  });
  $$payload.out += `<form${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></form>`;
  bind_props($$props, { class: className, inline, validated });
  pop();
}
function FormGroup($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "check",
    "disabled",
    "floating",
    "inline",
    "label",
    "row",
    "spacing",
    "tag"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let check = fallback($$props["check"], false);
  let disabled = fallback($$props["disabled"], false);
  let floating = fallback($$props["floating"], false);
  let inline = fallback($$props["inline"], false);
  let label = fallback($$props["label"], "");
  let row = fallback($$props["row"], false);
  let spacing = fallback($$props["spacing"], "mb-3");
  let tag = fallback($$props["tag"], null);
  classes = classnames(className, spacing, {
    row,
    "form-check": check,
    "form-check-inline": check && inline,
    "form-floating": floating,
    disabled: check && disabled
  });
  if (tag === "fieldset") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<fieldset${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----> `;
    if (label || $$slots.label) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<label>${escape_html(label)} <!---->`;
      slot($$payload, $$props, "label", {}, null);
      $$payload.out += `<!----></label>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></fieldset>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----> `;
    if (label || $$slots.label) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<label>${escape_html(label)} <!---->`;
      slot($$payload, $$props, "label", {}, null);
      $$payload.out += `<!----></label>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    check,
    disabled,
    floating,
    inline,
    label,
    row,
    spacing,
    tag
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  (function proverka() {
    if (localStorage.getItem("jwt") != null) {
      window.location.href = "/";
    }
  })();
  let validated = false;
  let first_name = "";
  let second_name = "";
  let password = "";
  let email = (Math.random() + 1e4).toString(36).substring(7) + "@gmail.com";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="mt-5 p-5 border border-2 border-dark rounded d-flex flex-content-center flex-column align-self-center" style="width: 100%;"><h2 class="svelte-13kbvt9">Регистрация</h2> <hr class="mb-3 mt-2"> `;
    Form($$payload2, {
      validated,
      children: ($$payload3) => {
        FormGroup($$payload3, {
          class: "area mt-5",
          children: ($$payload4) => {
            $$payload4.out += `<h3 class="svelte-13kbvt9">Имя</h3> `;
            Input($$payload4, {
              class: "area mt-2",
              required: true,
              placeholder: "Введите Имя",
              get value() {
                return first_name;
              },
              set value($$value) {
                first_name = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        FormGroup($$payload3, {
          class: "mt-2 ",
          children: ($$payload4) => {
            $$payload4.out += `<h3 class="svelte-13kbvt9">Фамилию</h3> `;
            Input($$payload4, {
              class: "area mt-2",
              required: true,
              placeholder: "Введите Фамилию",
              get value() {
                return second_name;
              },
              set value($$value) {
                second_name = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        FormGroup($$payload3, {
          class: "mt-2",
          children: ($$payload4) => {
            $$payload4.out += `<h3 class="svelte-13kbvt9">Почта</h3> `;
            Input($$payload4, {
              class: "area mt-2",
              value: email,
              required: true,
              type: "email",
              placeholder: "Введите почту"
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        FormGroup($$payload3, {
          class: "mt-3",
          children: ($$payload4) => {
            $$payload4.out += `<h3 class="svelte-13kbvt9">Пароль</h3> `;
            Input($$payload4, {
              class: "area mt-2",
              v: true,
              required: true,
              placeholder: "Введите пароль",
              get value() {
                return password;
              },
              set value($$value) {
                password = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      outline: true,
      color: "secondary",
      class: "mt-3 w-25 align-self-center",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Регистрация`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <p class="pt-4 svelte-13kbvt9">Есть аккаунт? <br><a href="/signin" class="svelte-13kbvt9">Войти!</a></p></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
