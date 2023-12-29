import React from 'react';
import { Image } from 'react-native';
import dimensions from '../../utils/dimensions';
import { IImage } from './types';

export const SVGImage: React.FC<IImage> = ({
  assetSrc: RenderImage,
  width,
  height,
  fill,
  url,
}) => {
  width = width ?? dimensions.viewWidth(24);
  height = height ?? dimensions.viewHeight(24);

  if (url) {
    return (
      <Image
        source={{
          uri: url,
          width: width,
          height: height,
        }}
      />
    );
  }
  return <RenderImage width={width} height={height} fill={fill} />;
};
