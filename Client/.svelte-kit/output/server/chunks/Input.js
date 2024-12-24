import { r as rest_props, f as fallback, s as spread_attributes, i as escape_html, d as slot, e as bind_props, p as pop, g as sanitize_props, a as push, j as attr, c as copy_payload, b as assign_payload, k as spread_props, l as ensure_array_like } from "./index2.js";
import { c as classnames } from "./Theme.svelte_svelte_type_style_lang.js";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "active",
    "block",
    "children",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "value"
  ]);
  push();
  let ariaLabel, classes, defaultAriaLabel;
  let className = fallback($$props["class"], "");
  let active = fallback($$props["active"], false);
  let block = fallback($$props["block"], false);
  let children = fallback($$props["children"], "");
  let close = fallback($$props["close"], false);
  let color = fallback($$props["color"], "secondary");
  let disabled = fallback($$props["disabled"], false);
  let href = fallback($$props["href"], "");
  let inner = fallback($$props["inner"], void 0);
  let outline = fallback($$props["outline"], false);
  let size = fallback($$props["size"], "");
  let value = fallback($$props["value"], "");
  ariaLabel = $$sanitized_props["aria-label"];
  classes = classnames(className, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
  defaultAriaLabel = close ? "Close" : null;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes(
      {
        ...$$restProps,
        class: classes,
        href,
        "aria-label": ariaLabel || defaultAriaLabel
      },
      { disabled }
    )}>`;
    if (children) {
      $$payload.out += "<!--[-->";
      $$payload.out += `${escape_html(children)}`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      ...$$restProps,
      class: classes,
      disabled,
      value,
      "aria-label": ariaLabel || defaultAriaLabel
    })}><!---->`;
    slot($$payload, $$props, "default", {}, () => {
      if (children) {
        $$payload.out += "<!--[-->";
        $$payload.out += `${escape_html(children)}`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]-->`;
    });
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    active,
    block,
    children,
    close,
    color,
    disabled,
    href,
    inner,
    outline,
    size,
    value
  });
  pop();
}
function FormCheck($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "checked",
    "disabled",
    "group",
    "id",
    "inline",
    "inner",
    "invalid",
    "label",
    "name",
    "reverse",
    "size",
    "type",
    "valid",
    "value"
  ]);
  push();
  let classes, inputClasses, idFor;
  let className = fallback($$props["class"], "");
  let checked = fallback($$props["checked"], false);
  let disabled = fallback($$props["disabled"], false);
  let group = fallback($$props["group"], void 0);
  let id = fallback($$props["id"], void 0);
  let inline = fallback($$props["inline"], false);
  let inner = fallback($$props["inner"], void 0);
  let invalid = fallback($$props["invalid"], false);
  let label = fallback($$props["label"], "");
  let name = fallback($$props["name"], "");
  let reverse = fallback($$props["reverse"], false);
  let size = fallback($$props["size"], "");
  let type = fallback($$props["type"], "checkbox");
  let valid = fallback($$props["valid"], false);
  let value = fallback($$props["value"], void 0);
  classes = classnames(className, "form-check", {
    "form-check-reverse": reverse,
    "form-switch": type === "switch",
    "form-check-inline": inline,
    [`form-control-${size}`]: size
  });
  inputClasses = classnames("form-check-input", { "is-invalid": invalid, "is-valid": valid });
  idFor = id || label;
  $$payload.out += `<div${attr("class", classes)}>`;
  if (type === "radio") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input${spread_attributes({
      ...$$restProps,
      class: inputClasses,
      id: idFor,
      type: "radio",
      checked: group === value,
      disabled,
      name,
      value
    })}>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (type === "switch") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<input${spread_attributes({
        ...$$restProps,
        class: inputClasses,
        id: idFor,
        type: "checkbox",
        checked,
        disabled,
        name,
        value
      })}>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<input${spread_attributes({
        ...$$restProps,
        class: inputClasses,
        id: idFor,
        type: "checkbox",
        checked,
        disabled,
        name,
        value
      })}>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  if (label) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label class="form-check-label"${attr("for", idFor)}><!---->`;
    slot($$payload, $$props, "label", {}, () => {
      $$payload.out += `${escape_html(label)}`;
    });
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    class: className,
    checked,
    disabled,
    group,
    id,
    inline,
    inner,
    invalid,
    label,
    name,
    reverse,
    size,
    type,
    valid,
    value
  });
  pop();
}
function FormFeedback($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "valid", "tooltip"]);
  push();
  let className = fallback($$props["class"], "");
  let valid = fallback($$props["valid"], void 0);
  let tooltip = fallback($$props["tooltip"], false);
  let classes;
  {
    const validMode = tooltip ? "tooltip" : "feedback";
    classes = classnames(className, valid ? `valid-${validMode}` : `invalid-${validMode}`);
  }
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, valid, tooltip });
  pop();
}
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "bsSize",
    "checked",
    "color",
    "disabled",
    "feedback",
    "files",
    "group",
    "inner",
    "invalid",
    "label",
    "max",
    "min",
    "multiple",
    "name",
    "placeholder",
    "plaintext",
    "readonly",
    "reverse",
    "size",
    "theme",
    "type",
    "valid",
    "value"
  ]);
  push();
  let className = fallback($$props["class"], "");
  let bsSize = fallback($$props["bsSize"], void 0);
  let checked = fallback($$props["checked"], false);
  let color = fallback($$props["color"], void 0);
  let disabled = fallback($$props["disabled"], void 0);
  let feedback = fallback($$props["feedback"], void 0);
  let files = fallback($$props["files"], void 0);
  let group = fallback($$props["group"], void 0);
  let inner = fallback($$props["inner"], void 0);
  let invalid = fallback($$props["invalid"], false);
  let label = fallback($$props["label"], void 0);
  let max = fallback($$props["max"], void 0);
  let min = fallback($$props["min"], void 0);
  let multiple = fallback($$props["multiple"], void 0);
  let name = fallback($$props["name"], "");
  let placeholder = fallback($$props["placeholder"], "");
  let plaintext = fallback($$props["plaintext"], false);
  let readonly = fallback($$props["readonly"], void 0);
  let reverse = fallback($$props["reverse"], false);
  let size = fallback($$props["size"], void 0);
  let theme = fallback($$props["theme"], void 0);
  let type = fallback($$props["type"], "text");
  let valid = fallback($$props["valid"], false);
  let value = fallback($$props["value"], void 0);
  let classes;
  let tag;
  {
    const isNotaNumber = new RegExp("\\D", "g");
    let isBtn = false;
    let formControlClass = "form-control";
    tag = "input";
    switch (type) {
      case "color":
        formControlClass = `form-control form-control-color`;
        break;
      case "range":
        formControlClass = "form-range";
        break;
      case "select":
        formControlClass = `form-select`;
        tag = "select";
        break;
      case "textarea":
        tag = "textarea";
        break;
      case "button":
      case "reset":
      case "submit":
        formControlClass = `btn btn-${color || "secondary"}`;
        isBtn = true;
        break;
      case "hidden":
      case "image":
        formControlClass = void 0;
        break;
      default:
        formControlClass = "form-control";
        tag = "input";
    }
    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      tag = "input";
    }
    if (size && isNotaNumber.test(size)) {
      console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
      bsSize = size;
      size = void 0;
    }
    classes = classnames(className, formControlClass, {
      "is-invalid": invalid,
      "is-valid": valid,
      [`form-control-${bsSize}`]: bsSize && !isBtn && tag !== "select",
      [`form-select-${bsSize}`]: bsSize && tag === "select",
      [`btn-${bsSize}`]: bsSize && isBtn
    });
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (tag === "input") {
      $$payload2.out += "<!--[-->";
      if (type === "text" || type === "password" || type === "search" || type === "tel" || type === "url") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<input${spread_attributes({
          ...$$restProps,
          ...{ type },
          "data-bs-theme": theme,
          class: classes,
          value,
          disabled,
          name,
          placeholder,
          readonly,
          size
        })}>`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (type === "color") {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<input${spread_attributes({
            ...$$restProps,
            "data-bs-theme": theme,
            class: classes,
            type: "color",
            value,
            disabled,
            name,
            placeholder,
            readonly
          })}>`;
        } else {
          $$payload2.out += "<!--[!-->";
          if (type === "email") {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<input${spread_attributes({
              ...$$restProps,
              "data-bs-theme": theme,
              class: classes,
              type: "email",
              value,
              disabled,
              multiple,
              name,
              placeholder,
              readonly,
              size
            })}>`;
          } else {
            $$payload2.out += "<!--[!-->";
            if (type === "file") {
              $$payload2.out += "<!--[-->";
              $$payload2.out += `<input${spread_attributes({
                ...$$restProps,
                "data-bs-theme": theme,
                class: classes,
                type: "file",
                disabled,
                invalid,
                multiple,
                name,
                placeholder,
                readonly,
                valid
              })}>`;
            } else {
              $$payload2.out += "<!--[!-->";
              if (type === "checkbox" || type === "radio" || type === "switch") {
                $$payload2.out += "<!--[-->";
                FormCheck($$payload2, spread_props([
                  $$restProps,
                  {
                    "data-bs-theme": theme,
                    class: className,
                    size: bsSize,
                    type,
                    disabled,
                    invalid,
                    label,
                    name,
                    placeholder,
                    reverse,
                    readonly,
                    valid,
                    get checked() {
                      return checked;
                    },
                    set checked($$value) {
                      checked = $$value;
                      $$settled = false;
                    },
                    get inner() {
                      return inner;
                    },
                    set inner($$value) {
                      inner = $$value;
                      $$settled = false;
                    },
                    get group() {
                      return group;
                    },
                    set group($$value) {
                      group = $$value;
                      $$settled = false;
                    },
                    get value() {
                      return value;
                    },
                    set value($$value) {
                      value = $$value;
                      $$settled = false;
                    }
                  }
                ]));
              } else {
                $$payload2.out += "<!--[!-->";
                if (type === "date" || type === "datetime" || type === "datetime-local" || type === "month" || type === "number" || type === "time" || type === "range" || type === "week") {
                  $$payload2.out += "<!--[-->";
                  $$payload2.out += `<input${spread_attributes({
                    ...$$restProps,
                    ...{ type },
                    "data-bs-theme": theme,
                    class: classes,
                    value,
                    disabled,
                    max,
                    min,
                    name,
                    placeholder,
                    readonly
                  })}>`;
                } else {
                  $$payload2.out += "<!--[!-->";
                  $$payload2.out += `<input${spread_attributes({
                    ...$$restProps,
                    "data-bs-theme": theme,
                    class: classes,
                    type,
                    name,
                    disabled,
                    placeholder,
                    readonly,
                    value
                  })}>`;
                }
                $$payload2.out += `<!--]-->`;
              }
              $$payload2.out += `<!--]-->`;
            }
            $$payload2.out += `<!--]-->`;
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
      if (tag === "textarea") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<textarea${spread_attributes({
          ...$$restProps,
          "data-bs-theme": theme,
          class: classes,
          disabled,
          name,
          placeholder,
          readonly
        })}>`;
        const $$body = escape_html(value);
        if ($$body) {
          $$payload2.out += `${$$body}`;
        }
        $$payload2.out += `</textarea>`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (tag === "select" && !multiple) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<select${spread_attributes({
            ...$$restProps,
            "data-bs-theme": theme,
            class: classes,
            name,
            disabled,
            readonly
          })}><!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!----></select>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--> `;
    if (feedback) {
      $$payload2.out += "<!--[-->";
      if (Array.isArray(feedback)) {
        $$payload2.out += "<!--[-->";
        const each_array = ensure_array_like(feedback);
        $$payload2.out += `<!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let msg = each_array[$$index];
          FormFeedback($$payload2, {
            valid,
            children: ($$payload3) => {
              $$payload3.out += `<!---->${escape_html(msg)}`;
            },
            $$slots: { default: true }
          });
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
        FormFeedback($$payload2, {
          valid,
          children: ($$payload3) => {
            $$payload3.out += `<!---->${escape_html(feedback)}`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    class: className,
    bsSize,
    checked,
    color,
    disabled,
    feedback,
    files,
    group,
    inner,
    invalid,
    label,
    max,
    min,
    multiple,
    name,
    placeholder,
    plaintext,
    readonly,
    reverse,
    size,
    theme,
    type,
    valid,
    value
  });
  pop();
}
export {
  Button as B,
  Input as I
};
