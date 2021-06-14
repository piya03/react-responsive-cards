import React from "react";
import { css } from "styled-components";

//resolve bgImage
export function resolveBgImage(bgImage, localImg) {
  if (!bgImage) return null;
  const { image_type, image_url, asset_type, aspect_ratio } = bgImage;

  if (image_type === "ext") {
    return {
      imageUrl: image_url,
      aspectRatio: aspect_ratio,
    };
  }
  if (image_type === "asset") {
    return {
      imageUrl: localImg,
      aspectRatio: aspect_ratio,
    };
  }
  return {
    imageUrl: localImg,
    aspectRatio: aspect_ratio,
  };
}

//resolve formattedTexr
export function resolveFormattedText({ formattedInfo, fallbackVal }) {
  let resolvedText = "";
  if (formattedInfo) {
    const { entities, text } = formattedInfo;

    let arr = text.split("{}");

    let newStr = [];
    let i = 0;

    while (i < arr.length && i < entities.length) {
      if (typeof entities[i] === "object") {
        let finalContent = "";

        const { url, color, font_style, text } = entities[i];

        const styleObject = {
          color: color || "initial",
          fontStyle: font_style || "initial",
          textDecoration: "none",
        };
        if (url) {
          finalContent = (
            <a
              href={url}
              style={styleObject}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              {text}
            </a>
          );
        } else {
          finalContent = <span style={styleObject}>{text}</span>;
        }

        newStr = [...newStr, <span>{arr[i]}</span>, finalContent];
      } else {
        newStr = [...newStr, <span>{arr[i]}</span>, <span>{entities[i]}</span>];
      }

      i++;
    }

    resolvedText = newStr?.length
      ? React.createElement("p", {}, ...(newStr || []))
      : formattedInfo?.text;
  }

  return resolvedText;
}

///resolve cta
export function resolveCtaProperties({ ctaInfoObj }) {
  if (!ctaInfoObj) return null;
  return ctaInfoObj;
}

//swipe dowm fun
