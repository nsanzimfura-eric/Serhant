import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { twMerge } from "tailwind-merge";
import Media from "@/components/Media";

export default function serialize(children, customClassNames) {
  return children.map((node, i) => {
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

      if (node.bold) {
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
            {serialize(node.children)}
          </h1>
        );
      case "h2":
        return (
          <h2 className={`${classNames.h2}`} key={i}>
            {serialize(node.children)}
          </h2>
        );
      case "h3":
        return (
          <h3 className={`${classNames.h3}`} key={i}>
            {serialize(node.children)}
          </h3>
        );
      case "h4":
        return (
          <h4 className={`${classNames.h4}`} key={i}>
            {serialize(node.children)}
          </h4>
        );
      case "h5":
        return (
          <h5 className={`${classNames.h5}`} key={i}>
            {serialize(node.children)}
          </h5>
        );
      case "h6":
        return (
          <h6 className={`${classNames.h6}`} key={i}>
            {serialize(node.children)}
          </h6>
        );
      case "quote":
        return (
          <blockquote className="blockquote" key={i}>
            {serialize(node.children)}
          </blockquote>
        );
      case "ul":
        return (
          <ul className={`${classNames.ul}`} key={i}>
            {serialize(node.children)}
          </ul>
        );
      case "ol":
        return (
          <ol className={`${classNames.ol}`} key={i}>
            {serialize(node.children)}
          </ol>
        );
      case "li":
        return (
          <li className={`${classNames.li}`} key={i}>
            - {serialize(node.children)}
          </li>
        );
      case "link":
        return (
          <a className={`${classNames.a}`} href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      case "upload":
        return <Media className="media" data={node.value} key={i} />;

      case "hr":
        return <hr className="hr" key={i} />;

      default:
        return (
          <p className={`${classNames.p}`} key={i}>
            {serialize(node.children)}
          </p>
        );
    }
  });
}
