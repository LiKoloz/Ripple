import { c as copy_payload, b as assign_payload, p as pop, a as push } from "../../../chunks/index2.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
import "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
function _page($$payload, $$props) {
  push();
  (function proverka() {
    if (localStorage.getItem("jwt") != null) {
      window.location.href = "/";
    }
  })();
  let login = "";
  let password = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="mt-5 p-5 border border-2 border-dark rounded d-flex flex-content-center flex-column align-self-center"><h2 class="svelte-13kbvt9">Вход</h2> <hr class="mb-3 mt-2"> <div class="area mt-5"><h3 class="svelte-13kbvt9">Логин</h3> `;
    Input($$payload2, {
      class: "area mt-2",
      placeholder: "Введите никнейм",
      get value() {
        return login;
      },
      set value($$value) {
        login = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="area mt-3"><h3 class="svelte-13kbvt9">Пароль</h3> `;
    Input($$payload2, {
      class: "area mt-2",
      type: "password",
      placeholder: "Введите пароль",
      get value() {
        return password;
      },
      set value($$value) {
        password = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    Button($$payload2, {
      outline: true,
      color: "secondary",
      class: "mt-3 w-25 align-self-center",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Войти`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <p class="pt-4 svelte-13kbvt9">Нету аккаунта? <br><a href="/signup" class="svelte-13kbvt9">Зарегиститруйтесь!</a></p></div>`;
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
