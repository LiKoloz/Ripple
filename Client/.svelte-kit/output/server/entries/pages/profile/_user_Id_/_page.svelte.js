import { p as pop, a as push } from "../../../../chunks/index2.js";
import { I as Input, B as Button } from "../../../../chunks/Input.js";
import "../../../../chunks/Theme.svelte_svelte_type_style_lang.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let first_name = data.first_name;
  let second_name = data.last_name;
  let email = data.email;
  let password = "";
  data.nick;
  data.email;
  data.password;
  (function get_user_data() {
    password = localStorage.getItem("password");
  })();
  $$payload.out += `<div class="d-flex flex-column justify-content-center align-items-center svelte-gh8b01" style="max-width: 50vh; width: 100%;"><div class="mt-3 svelte-gh8b01"><h5>Имя</h5> `;
  Input($$payload, { value: first_name, disabled: true });
  $$payload.out += `<!----></div> <div class="mt-3 svelte-gh8b01"><h5>Фамилию</h5> `;
  Input($$payload, { value: second_name, disabled: true });
  $$payload.out += `<!----></div> <div class="mt-3 svelte-gh8b01"><h5>Почта</h5> `;
  Input($$payload, { value: email, disabled: true });
  $$payload.out += `<!----></div> `;
  if (data.id == localStorage.getItem("id")) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-3 svelte-gh8b01"><h5>Пароль</h5> `;
    Input($$payload, { value: password, disabled: true });
    $$payload.out += `<!----></div> `;
    Button($$payload, {
      outline: true,
      color: "secondary",
      class: "mt-3 w-25 align-self-center",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Выйти`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
