import { r as rest_props, f as fallback, s as spread_attributes, d as slot, e as bind_props, p as pop, g as sanitize_props, a as push, l as ensure_array_like, i as escape_html } from "../../chunks/index2.js";
import { c as classnames } from "../../chunks/Theme.svelte_svelte_type_style_lang.js";
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "body",
    "color",
    "inverse",
    "outline",
    "theme"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let body = fallback($$props["body"], false);
  let color = fallback($$props["color"], "");
  let inverse = fallback($$props["inverse"], false);
  let outline = fallback($$props["outline"], false);
  let theme = fallback($$props["theme"], void 0);
  classes = classnames(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? `${outline ? "border" : "bg"}-${color}` : false);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    "data-bs-theme": theme,
    class: classes
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    class: className,
    body,
    color,
    inverse,
    outline,
    theme
  });
  pop();
}
function CardBody($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "card-body");
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function CardHeader($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let tag = fallback($$props["tag"], "div");
  classes = classnames(className, "card-header");
  if (tag === "h3") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h3${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></h3>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, tag });
  pop();
}
function CardSubtitle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "card-subtitle");
  $$payload.out += `<h6${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></h6>`;
  bind_props($$props, { class: className });
  pop();
}
function CardText($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "card-text");
  $$payload.out += `<p${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></p>`;
  bind_props($$props, { class: className });
  pop();
}
function CardTitle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "card-title");
  $$payload.out += `<h5${spread_attributes({ ...$$restProps, class: classes })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></h5>`;
  bind_props($$props, { class: className });
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let posts = data.posts;
  const each_array = ensure_array_like(posts);
  $$payload.out += `<div class="d-flex justify-content-center">`;
  if (localStorage.getItem("jwt") != null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a href="/create_post" aria-label="create_post" class="svelte-r2oq6g"><i class="bi bi-patch-plus svelte-r2oq6g"></i></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="pt-3 pb-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$payload.out += `<div class="pt-2" style="max-width: 90vh;">`;
    Card($$payload, {
      children: ($$payload2) => {
        CardHeader($$payload2, {
          children: ($$payload3) => {
            CardTitle($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(post.author)} (${escape_html(post.author_id)})`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        CardBody($$payload2, {
          children: ($$payload3) => {
            CardSubtitle($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(post.title)}`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            CardText($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(post.content)}`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
