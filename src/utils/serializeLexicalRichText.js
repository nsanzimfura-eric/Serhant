import Media from "@/components/Media";
import escapeHTML from "escape-html";
import React, { Fragment } from "react";
import { Text } from "slate";
import { twMerge } from "tailwind-merge";

//This copy-and-pasted from somewhere in lexical here: https://github.com/facebook/lexical/blob/c2ceee223f46543d12c574e62155e619f9a18a5d/packages/lexical/src/LexicalConstants.ts

// DOM
export const DOM_ELEMENT_TYPE = 1;
export const DOM_TEXT_TYPE = 3;

// Reconciling
export const NO_DIRTY_NODES = 0;
export const HAS_DIRTY_NODES = 1;
export const FULL_RECONCILE = 2;

// Text node modes
export const IS_NORMAL = 0;
export const IS_TOKEN = 1;
export const IS_SEGMENTED = 2;
// IS_INERT = 3

// Text node formatting
export const IS_BOLD = 1;
export const IS_ITALIC = 1 << 1;
export const IS_STRIKETHROUGH = 1 << 2;
export const IS_UNDERLINE = 1 << 3;
export const IS_CODE = 1 << 4;
export const IS_SUBSCRIPT = 1 << 5;
export const IS_SUPERSCRIPT = 1 << 6;
export const IS_HIGHLIGHT = 1 << 7;

export const IS_ALL_FORMATTING =
  IS_BOLD |
  IS_ITALIC |
  IS_STRIKETHROUGH |
  IS_UNDERLINE |
  IS_CODE |
  IS_SUBSCRIPT |
  IS_SUPERSCRIPT |
  IS_HIGHLIGHT;

export const IS_DIRECTIONLESS = 1;
export const IS_UNMERGEABLE = 1 << 1;

// Element node formatting
export const IS_ALIGN_LEFT = 1;
export const IS_ALIGN_CENTER = 2;
export const IS_ALIGN_RIGHT = 3;
export const IS_ALIGN_JUSTIFY = 4;
export const IS_ALIGN_START = 5;
export const IS_ALIGN_END = 6;

export const TEXT_TYPE_TO_FORMAT = {
  bold: IS_BOLD,
  code: IS_CODE,
  italic: IS_ITALIC,
  strikethrough: IS_STRIKETHROUGH,
  subscript: IS_SUBSCRIPT,
  superscript: IS_SUPERSCRIPT,
  underline: IS_UNDERLINE,
};

export default function serializeLexicalRichText(children, customClassNames) {
  return children
    .map((node, i) => {
      const classNames = {
        h1: twMerge("h1 mt-6", customClassNames?.h1),
        h2: twMerge("h2 mt-5", customClassNames?.h2),
        h3: twMerge("h3 mt-4", customClassNames?.h3),
        h4: twMerge("h4 mt-3", customClassNames?.h4),
        h5: twMerge("h5 mt-2", customClassNames?.h5),
        h6: twMerge("h6", customClassNames?.h6),
        p: twMerge("p-small", customClassNames?.p),
        ul: twMerge("ul", customClassNames?.ul),
        ol: twMerge("ol", customClassNames?.ol),
        li: twMerge("li", customClassNames?.li),
        blockquote: twMerge("blockquote", customClassNames?.blockquote),
        a: twMerge("a", customClassNames?.a),
        upload: twMerge("media", customClassNames?.img),
      };

      if (Text.isText(node)) {
        let text = node.text ? (
          <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
        ) : (
          <span className="opacity-0">&nbsp;</span>
        );

        if (node["primaryColor"]) {
          text = <span className="text-menzBlue-500">{text}</span>;
        }

        if (node.format === IS_BOLD || node.bold) {
          text = <strong key={i}>{text}</strong>;
        }

        if (node.code) {
          text = <code key={i}>{text}</code>;
        }

        if (node.italic) {
          text = <em key={i}>{text}</em>;
        }

        if (node.underline) {
          text = (
            <span className="underline" key={i}>
              {text}
            </span>
          );
        }

        if (node.strikethrough) {
          text = (
            <span className="line-through" key={i}>
              {text}
            </span>
          );
        }

        return <Fragment key={i}>{text}</Fragment>;
      }

      if (!node) {
        return null;
      }

      switch (node.type) {
        case "h1":
          return (
            <h1 className={`${classNames.h1}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </h1>
          );
        case "h2":
          return (
            <h2 className={`${classNames.h2}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </h2>
          );
        case "h3":
          return (
            <h3 className={`${classNames.h3}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </h3>
          );
        case "h4":
          return (
            <h4 className={`${classNames.h4}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </h4>
          );
        case "h5":
          return (
            <h5 className={`${classNames.h5}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </h5>
          );
        case "h6":
          return (
            <h6 className={`${classNames.h6}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </h6>
          );
        case "quote":
          return (
            <blockquote className="blockquote" key={i}>
              {serializeLexicalRichText(node.children)}
            </blockquote>
          );
        case "ul":
          return (
            <ul className={`${classNames.ul}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </ul>
          );
        case "ol":
          return (
            <ol className={`${classNames.ol}`} key={i}>
              {serializeLexicalRichText(node.children)}
            </ol>
          );
        case "li":
          return (
            <li className={`${classNames.li}`} key={i}>
              - {serializeLexicalRichText(node.children)}
            </li>
          );
        case "link":
          return (
            <a
              className={`${classNames.a}`}
              href={escapeHTML(node.url)}
              key={i}
            >
              {serializeLexicalRichText(node.children)}
            </a>
          );

        case "upload":
          return <Media className="media" data={node.value} key={i} />;

        case "hr":
          return <hr className="hr" key={i} />;

        default:
          return (
            <p
              className={`${classNames.p} ${
                node.format === "right" ? "text-right" : ""
              }`}
              key={i}
            >
              {serializeLexicalRichText(node.children)}
            </p>
          );
      }
    })
    .filter((node) => node !== null);
}
