import { q as current_component, d as slot, r as rest_props, f as fallback, s as spread_attributes, e as bind_props, p as pop, g as sanitize_props, a as push, j as attr, i as escape_html, c as copy_payload, b as assign_payload } from "../../../chunks/index2.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
import { c as classnames, u as uuid } from "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function InlineContainer($$payload, $$props) {
  $$payload.out += `<div><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
}
function ModalBackdrop($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "isOpen", "fade"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let isOpen = fallback($$props["isOpen"], false);
  let fade = fallback($$props["fade"], true);
  let loaded = false;
  classes = classnames(className, "modal-backdrop");
  if (isOpen && loaded) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        role: "presentation",
        ...$$restProps,
        class: classes
      },
      { fade }
    )}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, isOpen, fade });
  pop();
}
function ModalBody($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "modal-body");
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function ModalHeader($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "toggle",
    "closeAriaLabel",
    "id",
    "children"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let toggle = fallback($$props["toggle"], void 0);
  let closeAriaLabel = fallback($$props["closeAriaLabel"], "Close");
  let id = fallback($$props["id"], void 0);
  let children = fallback($$props["children"], void 0);
  classes = classnames(className, "modal-header");
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><h5 class="modal-title"${attr("id", id)}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(children)}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></h5> <!---->`;
  slot($$payload, $$props, "close", {}, () => {
    if (typeof toggle === "function") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button type="button" class="btn-close"${attr("aria-label", closeAriaLabel)}></button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    class: className,
    toggle,
    closeAriaLabel,
    id,
    children
  });
  pop();
}
function Portal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  push();
  onDestroy(() => {
  });
  $$payload.out += `<div${spread_attributes({ ...$$restProps })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  pop();
}
function Modal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  rest_props($$sanitized_props, [
    "class",
    "static",
    "autoFocus",
    "body",
    "centered",
    "container",
    "fullscreen",
    "header",
    "isOpen",
    "keyboard",
    "backdrop",
    "contentClassName",
    "fade",
    "labelledBy",
    "modalClassName",
    "modalStyle",
    "returnFocusAfterClose",
    "scrollable",
    "size",
    "theme",
    "toggle",
    "unmountOnClose",
    "wrapClassName"
  ]);
  push();
  let outer;
  let className = fallback($$props["class"], "");
  let staticModal = fallback($$props["static"], false);
  let autoFocus = fallback($$props["autoFocus"], true);
  let body = fallback($$props["body"], false);
  let centered = fallback($$props["centered"], false);
  let container = fallback($$props["container"], void 0);
  let fullscreen = fallback($$props["fullscreen"], false);
  let header = fallback($$props["header"], void 0);
  let isOpen = fallback($$props["isOpen"], false);
  let keyboard = fallback($$props["keyboard"], true);
  let backdrop = fallback($$props["backdrop"], true);
  let contentClassName = fallback($$props["contentClassName"], "");
  let fade = fallback($$props["fade"], true);
  let labelledBy = fallback($$props["labelledBy"], () => header ? `modal-${uuid()}` : void 0, true);
  let modalClassName = fallback($$props["modalClassName"], "");
  let modalStyle = fallback($$props["modalStyle"], null);
  let returnFocusAfterClose = fallback($$props["returnFocusAfterClose"], true);
  let scrollable = fallback($$props["scrollable"], false);
  let size = fallback($$props["size"], "");
  let theme = fallback($$props["theme"], null);
  let toggle = fallback($$props["toggle"], void 0);
  let unmountOnClose = fallback($$props["unmountOnClose"], true);
  let wrapClassName = fallback($$props["wrapClassName"], "");
  onDestroy(() => {
  });
  const dialogBaseClass = "modal-dialog";
  classnames(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    "modal-fullscreen": fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === "string",
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });
  outer = container === "inline" || staticModal ? InlineContainer : Portal;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (backdrop && !staticModal) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    outer?.($$payload, {
      children: ($$payload2) => {
        ModalBackdrop($$payload2, { fade, isOpen });
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    static: staticModal,
    autoFocus,
    body,
    centered,
    container,
    fullscreen,
    header,
    isOpen,
    keyboard,
    backdrop,
    contentClassName,
    fade,
    labelledBy,
    modalClassName,
    modalStyle,
    returnFocusAfterClose,
    scrollable,
    size,
    theme,
    toggle,
    unmountOnClose,
    wrapClassName
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  (function proverka() {
    if (localStorage.getItem("jwt") == null) {
      window.location.href = "/";
    }
  })();
  let open = false;
  const toggle = () => open = !open;
  let title = "";
  let mainText = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="mt-5 p-5 border border-2 border-dark rounded d-flex flex-content-center flex-column align-self-center"><h2 class="svelte-xpl19w">Создание поста</h2> <hr class="mb-3 mt-2"> <div class="area mt-5"><h3 class="svelte-xpl19w">Заголовок</h3> `;
    Input($$payload2, {
      class: "area mt-2",
      placeholder: "Введите заголовок",
      get value() {
        return title;
      },
      set value($$value) {
        title = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="area mt-3"><h3 class="svelte-xpl19w">Содержание</h3> `;
    Input($$payload2, {
      type: "textarea",
      class: "area mt-2  ",
      style: "height: 30vh;",
      placeholder: "Введите содержание",
      get value() {
        return mainText;
      },
      set value($$value) {
        mainText = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    Button($$payload2, {
      outline: true,
      color: "secondary",
      class: "mt-3 w-25 align-self-center",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Опубликовать`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Modal($$payload2, {
      isOpen: open,
      toggle,
      children: ($$payload3) => {
        ModalHeader($$payload3, {
          toggle,
          children: ($$payload4) => {
            $$payload4.out += `<!---->Modal title`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        ModalBody($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
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
