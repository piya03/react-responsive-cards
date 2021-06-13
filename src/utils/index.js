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

    let newStr = "";
    let i = 0;
    while (i < arr.length && i < entities.length) {
      newStr += `${arr[i]} ${entities[i]}`;
      i++;
    }
    resolvedText = newStr;
  }

  if (!resolvedText?.trim()) {
    return fallbackVal;
  }

  return fallbackVal;
}

///resolve cta
export function resolveCtaProperties({ ctaInfoObj }) {
  if (!ctaInfoObj) return null;
  return ctaInfoObj;
}
