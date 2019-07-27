import React from "react";
import { Image } from "react-native";

export default function ImageScale({ source, width }) {
  _getHeightImg = (img, newWidth) => {
    const imgProps = Image.resolveAssetSource(img);
    return (newWidth * imgProps.height) / imgProps.width;
  };

  return (
    <Image
      source={source}
      style={{
        height: this._getHeightImg(source, width),
        width: width
      }}
    />
  );
}
