import sanitizeHtml from "sanitize-html";

export function cleanBlogHtml(html = "") {
  return sanitizeHtml(html, {
    allowedTags: [
      "a",
      "b",
      "blockquote",
      "br",
      "caption",
      "code",
      "div",
      "em",
      "figcaption",
      "figure",
      "h2",
      "h3",
      "h4",
      "hr",
      "img",
      "li",
      "ol",
      "p",
      "pre",
      "span",
      "strong",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr",
      "ul"
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading", "decoding"],
      h2: ["id"],
      h3: ["id"],
      h4: ["id"],
      p: ["class"],
      span: ["class"],
      div: ["class"],
      table: ["class"]
    },
    allowedClasses: {
      p: ["featured-snippet-answer", "faq-answer"],
      span: ["featured-snippet-answer", "faq-answer"],
      div: ["featured-snippet-answer", "faq-answer"],
      table: ["*"]
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: sanitizeHtml.simpleTransform(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer"
        },
        true
      ),
      img: sanitizeHtml.simpleTransform(
        "img",
        {
          loading: "lazy",
          decoding: "async"
        },
        true
      )
    }
  });
}
